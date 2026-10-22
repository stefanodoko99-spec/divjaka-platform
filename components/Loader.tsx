"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "./motion";
import { useLang } from "./LangContext";

/* The photographs the first screens actually need. The counter tracks these
   for real, so the bar reaching 100 means the hero is genuinely ready. */
const PRELOAD = [
  "hero-lagoon",
  "pelican",
  "flamingos",
  "tower-pelican",
  "lagoon",
  "lagoon-tower",
  "pines",
  "visitor-centre",
];

const SLATS = 7;
const MIN_MS = 1500; // never flash past, even from cache
const MAX_MS = 7000; // never trap anyone on a slow connection

export default function Loader({ onDone }: { onDone: () => void }) {
  const { t } = useLang();
  const root = useRef<HTMLDivElement>(null);
  const shown = useRef(0);
  const started = useRef(Date.now());
  const exiting = useRef(false);
  const progressRef = useRef(0);

  const [count, setCount] = useState(0);
  const [done, setDone] = useState<boolean[]>(() => PRELOAD.map(() => false));
  const [gone, setGone] = useState(false);

  const loadedCount = done.filter(Boolean).length;
  progressRef.current = loadedCount;

  const finish = useCallback(() => {
    setGone(true);
    onDone();
    document.body.style.overflow = "";
    window.__lenis?.start();
  }, [onDone]);

  /* fetch the images and record each arrival */
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = [];

    PRELOAD.forEach((slug, i) => {
      const img = new window.Image();
      const mark = () => {
        if (cancelled) return;
        setDone((prev) => {
          if (prev[i]) return prev;
          const next = [...prev];
          next[i] = true;
          return next;
        });
      };
      img.onload = mark;
      img.onerror = mark;
      img.src = `/images/${slug}.jpg`;
      imgs.push(img);
    });

    return () => {
      cancelled = true;
      imgs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  /* ease the displayed number toward real progress, then leave */
  useEffect(() => {
    if (prefersReducedMotion()) {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";
    window.__lenis?.stop();

    const exit = () => {
      if (exiting.current) return;
      exiting.current = true;

      const tl = gsap.timeline({ onComplete: finish });
      tl.to([".loaderThumbs", ".loaderFoot"], {
        y: 18,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in",
      })
        .to(".loaderWord span", { yPercent: -120, duration: 0.6, stagger: 0.03, ease: "expo.in" }, 0.1)
        .to(
          ".loaderSlat",
          {
            yPercent: -100,
            duration: 0.95,
            stagger: 0.06,
            ease: "expo.inOut",
          },
          0.45,
        );
    };

    const tick = () => {
      const el = root.current;
      if (!el || exiting.current) return;

      const target = (progressRef.current / PRELOAD.length) * 100;
      shown.current += (target - shown.current) * 0.08;
      if (target - shown.current < 0.4) shown.current = target;
      setCount(Math.floor(shown.current));

      const elapsed = Date.now() - started.current;
      if ((shown.current >= 99.5 && elapsed >= MIN_MS) || elapsed >= MAX_MS) {
        gsap.ticker.remove(tick);
        setCount(100);
        exit();
      }
    };

    gsap.ticker.add(tick);

    const ctx = gsap.context(() => {
      gsap.from(".loaderWord span", {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.05,
        ease: "expo.out",
      });
      gsap.from(".loaderFoot", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out" });
    }, root);

    return () => {
      gsap.ticker.remove(tick);
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [finish]);

  if (gone) return null;

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loaderSlats">
        {Array.from({ length: SLATS }, (_, i) => (
          <div className="loaderSlat" key={i} />
        ))}
      </div>

      <div className="loaderUi">
        <div className="loaderWord">
          {t.loader.word.split("").map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>

        <div className="loaderThumbs">
          {PRELOAD.map((slug, i) => (
            <span className={`loaderThumb${done[i] ? " on" : ""}`} key={slug}>
              <span style={{ backgroundImage: `url(/images/${slug}.jpg)` }} />
            </span>
          ))}
        </div>

        <div className="loaderFoot">
          <span className="mono">{t.loader.sub}</span>
          <span className="mono loaderStatus">
            {t.loader.status} — {loadedCount}/{PRELOAD.length}
          </span>
          <span className="loaderCount num">{String(count).padStart(3, "0")}</span>
          <div className="loaderTrack">
            <i style={{ transform: `scaleX(${count / 100})` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
