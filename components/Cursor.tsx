"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, isFinePointer, prefersReducedMotion } from "./motion";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    const r = ring.current;
    const d = dot.current;
    if (!r || !d) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      gsap.set([r, d], { opacity: 1 });
      gsap.to(d, { x, y, duration: 0.08, overwrite: true });
    };
    const tick = () => {
      rx += (x - rx) * 0.15;
      ry += (y - ry) * 0.15;
      gsap.set(r, { x: rx, y: ry });
    };

    window.addEventListener("mousemove", move, { passive: true });
    gsap.ticker.add(tick);

    const enter = (e: Event) => {
      const el = (e.currentTarget as HTMLElement) ?? null;
      const text = el?.getAttribute("data-cursor");
      if (text) {
        setLabel(text);
        r.classList.add("big");
      } else {
        gsap.to(r, { scale: 0.5, duration: 0.3 });
      }
    };
    const leave = () => {
      r.classList.remove("big");
      gsap.to(r, { scale: 1, duration: 0.3 });
    };

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("a, button, [data-cursor]"),
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      gsap.ticker.remove(tick);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={ring} aria-hidden="true">
        <span className="cursorLabel">{label}</span>
      </div>
      <div className="cursorDot" ref={dot} aria-hidden="true" />
    </>
  );
}
