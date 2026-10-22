"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";
import { gsap, isFinePointer, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Packages() {
  useGsapSetup();
  const { t, lang } = useLang();
  const c = t.packages;
  const float = useRef<HTMLDivElement>(null);
  const [shot, setShot] = useState<string>(c.items[0].img);

  /* a plate of the place follows the pointer down the list */
  useEffect(() => {
    const el = float.current;
    if (!el || !isFinePointer() || prefersReducedMotion()) return;

    gsap.set(el, { xPercent: -50, yPercent: -50 });
    const qx = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3" });
    const qy = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3" });
    const move = (e: MouseEvent) => {
      qx(e.clientX);
      qy(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const show = (img: string) => {
    setShot(img);
    if (!float.current || !isFinePointer() || prefersReducedMotion()) return;
    gsap.to(float.current, { opacity: 1, scale: 1, duration: 0.42, ease: "power3.out" });
  };
  const hide = () => {
    if (!float.current) return;
    gsap.to(float.current, { opacity: 0, scale: 0.86, duration: 0.3 });
  };

  return (
    <>
      <section className="sec" id="paketat" data-tone="shell">
        <div className="wrap">
          <FadeIn className="eyebrow mono">
            <i />
            <b>{c.index}</b>
            <span>{c.eyebrow}</span>
          </FadeIn>

          <div className="secHead">
            <SplitText key={`${lang}-t`} text={c.title} as="h2" className="dLarge" />
            <FadeIn>
              <p className="body">{c.body}</p>
            </FadeIn>
          </div>

          <div className="pkList" onMouseLeave={hide}>
            {c.items.map((p) => (
              <button
                className="pkRow"
                key={p.n}
                onMouseEnter={() => show(p.img)}
                onFocus={() => show(p.img)}
                onBlur={hide}
                type="button"
              >
                <span className="pkNum num">{p.n}</span>
                <span className="pkName">{p.name}</span>
                <span className="pkWhen">{p.when}</span>
              </button>
            ))}
          </div>

          <FadeIn>
            <p className="mono muted" style={{ marginTop: 20 }}>
              {c.note}
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="pkFloat" ref={float} aria-hidden="true">
        <Image src={`/images/${shot}.webp`} alt="" fill sizes="260px" />
      </div>
    </>
  );
}
