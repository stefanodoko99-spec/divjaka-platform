"use client";

import { useEffect, useRef } from "react";
import { useLang } from "./LangContext";
import { gsap, ScrollTrigger, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Marquee() {
  useGsapSetup();
  const { t, lang } = useLang();
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || prefersReducedMotion()) return;

    const row = el.firstElementChild as HTMLElement | null;
    if (!row) return;

    let unit = row.getBoundingClientRect().width || 900;
    let pos = 0;
    let dir = 1;
    let speed = 0.7;

    const measure = () => {
      unit = row.getBoundingClientRect().width || 900;
    };
    const tick = () => {
      pos -= speed * dir;
      if (pos <= -unit) pos += unit;
      if (pos > 0) pos -= unit;
      gsap.set(el, { x: pos });
    };

    gsap.ticker.add(tick);
    window.addEventListener("resize", measure);

    /* scroll speed and direction drive the ticker */
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        dir = self.direction;
        speed = 0.7 + Math.min(Math.abs(self.getVelocity()) / 400, 8);
      },
    });

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", measure);
      st.kill();
    };
  }, [lang]);

  const row = (
    <div>
      {t.marquee.map((m) => (
        <span key={m} style={{ display: "contents" }}>
          <em>{m}</em>
          <i />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marqueeTrack" ref={track} key={lang}>
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
