"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "./motion";
import { useLang } from "./LangContext";

/* The last shot is the hero photograph, so the frame expands straight into
   the hero and the cut is invisible. */
const SHOTS = ["pelican", "flamingos", "tower-pelican", "hero-lagoon"];

export default function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLang();
  const root = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [shot, setShot] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => {
      setGone(true);
      onDone();
      document.body.style.overflow = "";
      window.__lenis?.start();
    };

    if (prefersReducedMotion()) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";
    window.__lenis?.stop();

    const counter = { v: 0 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });

      tl.from(".loaderWord span", {
        yPercent: 120,
        duration: 1,
        stagger: 0.045,
        ease: "expo.out",
      })
        .from(frame.current, { scaleY: 0, transformOrigin: "bottom", duration: 1, ease: "expo.out" }, 0)
        .to(counter, {
          v: 100,
          duration: 1.8,
          ease: "power2.inOut",
          onUpdate: () => setCount(Math.round(counter.v)),
        }, 0)
        .to(".loaderTrack i", { scaleX: 1, duration: 1.8, ease: "power2.inOut" }, 0)
        /* expand the frame into a full-bleed plate of the hero photograph */
        .to(frame.current, {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          duration: 1.1,
          ease: "expo.inOut",
          onStart: () => {
            if (frame.current) frame.current.style.aspectRatio = "auto";
          },
        }, 1.9)
        .to(".loaderWord span", { yPercent: -120, duration: 0.7, ease: "expo.in" }, 1.95)
        .to(".loaderBar", { opacity: 0, duration: 0.4 }, 1.95)
        .to(root.current, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, 2.6);
    }, root);

    /* cycle the photographs while the counter runs */
    const cycle = window.setInterval(() => {
      setShot((s) => (s < SHOTS.length - 1 ? s + 1 : s));
    }, 460);
    const stopCycle = window.setTimeout(() => window.clearInterval(cycle), 1900);

    return () => {
      ctx.revert();
      window.clearInterval(cycle);
      window.clearTimeout(stopCycle);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loaderStage">
        <div className="loaderFrame" ref={frame}>
          {SHOTS.map((s, i) => (
            <Image
              key={s}
              src={`/images/${s}.jpg`}
              alt=""
              fill
              priority={i === 0 || i === SHOTS.length - 1}
              sizes="100vw"
              className={i === shot ? "on" : ""}
              style={{ transition: "opacity .35s" }}
            />
          ))}
        </div>
        <div className="loaderWord">
          {t.loader.word.split("").map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </div>

      <div className="loaderBar">
        <span className="mono">{t.loader.sub}</span>
        <span className="loaderCount num">{String(count).padStart(3, "0")}</span>
        <span className="mono" style={{ textAlign: "right" }}>
          {t.loader.status}
        </span>
        <div className="loaderTrack">
          <i />
        </div>
      </div>
    </div>
  );
}
