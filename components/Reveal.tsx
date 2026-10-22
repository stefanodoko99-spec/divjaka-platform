"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, useGsapSetup } from "./motion";

/**
 * Splits a string into masked words and raises them on scroll.
 * Re-keyed by the caller on language change so the split rebuilds.
 */
export function SplitText({
  text,
  as: Tag = "h2",
  className,
  stagger = 0.035,
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  useGsapSetup();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".rWord > span"), {
        yPercent: 110,
        duration: 1,
        delay,
        stagger,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    }, el);
    return () => ctx.revert();
  }, [text, stagger, delay]);

  const words = text.split(/\s+/);

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="rWord">
            <span>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

/** Fades and lifts a block when it enters the viewport. */
export function FadeIn({
  children,
  className,
  y = 22,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  as?: ElementType;
}) {
  useGsapSetup();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 92%" },
      });
    }, el);
    return () => ctx.revert();
  }, [y, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/** Parallaxes an <img> inside an overflow-hidden frame. */
export function useParallax(ref: React.RefObject<HTMLElement | null>, amount = 14) {
  useGsapSetup();
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const img = el.querySelector("img");
    if (!img) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -amount / 2, scale: 1.14 },
        {
          yPercent: amount / 2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [ref, amount]);
}

export { ScrollTrigger };
