"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLang } from "./LangContext";
import { useReady } from "./ReadyContext";
import { gsap, ScrollTrigger, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Hero() {
  useGsapSetup();
  const { t, lang } = useLang();
  const ready = useReady();
  const root = useRef<HTMLElement>(null);

  /* entrance, held back until the loader has handed over */
  useEffect(() => {
    if (!ready || !root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".heroTitle .rWord > span", {
        yPercent: 118,
        duration: 1.2,
        stagger: 0.07,
        ease: "expo.out",
      })
        .from(".heroKicker", { y: 16, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.1)
        .from(
          [".heroLower > div", ".heroMeta", ".heroStats li"],
          { y: 26, opacity: 0, duration: 0.9, stagger: 0.06, ease: "power3.out" },
          0.3,
        );
    }, root);
    return () => ctx.revert();
  }, [ready, lang]);

  /* the photograph drifts and dims as the page leaves it */
  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(".heroMedia img", {
        yPercent: 18,
        scale: 1.16,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".heroInner", {
        yPercent: -14,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const words = t.hero.title;

  return (
    <header className="hero" id="hero" ref={root}>
      <div className="heroMedia">
        <Image
          src="/images/hero-lagoon.webp"
          alt="Laguna e Karavastasë në Parkun Kombëtar Divjakë–Karavasta"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      <div className="heroInner wrap">
        <span className="heroKicker mono">
          <i />
          {t.hero.kicker}
        </span>

        <h1 className="heroTitle" key={lang}>
          {words.map((w, i) => (
            <span key={`${w}-${i}`}>
              <span className="rWord">
                <span>{i === words.length - 1 ? <em>{w}</em> : w}</span>
              </span>
              {i < words.length - 1 ? " " : null}
            </span>
          ))}
        </h1>

        <div className="heroLower">
          <div>
            <p className="lede">{t.hero.lede}</p>
            <div className="heroCtas">
              <a className="btn" href="#platforma" data-cursor="Zbulo">
                <span>{t.hero.ctaPrimary}</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </a>
              <a className="btn" href="#paketat" data-cursor="Shiko">
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>
          </div>

          <dl className="heroMeta mono">
            {t.hero.meta.map((m) => (
              <div key={m.k}>
                <dt>{m.k}</dt>
                <dd style={{ margin: 0 }}>{m.v}</dd>
              </div>
            ))}
            <div className="scrollCue mono" style={{ justifyContent: "flex-end" }}>
              <i />
              <span>{t.hero.scroll}</span>
            </div>
          </dl>
        </div>

        <ul className="heroStats">
          {t.hero.stats.map((s) => (
            <li key={s.l}>
              <b className="num">
                {s.v}
                {s.suf}
              </b>
              <small className="mono">{s.l}</small>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
