"use client";

import { useEffect, useRef } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";
import { gsap, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Impact() {
  useGsapSetup();
  const { t, lang } = useLang();
  const c = t.impact;
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const pre = el.dataset.pre ?? "";
        const o = { v: 0 };
        gsap.to(o, {
          v: target,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            el.textContent = pre + Math.round(o.v);
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fill]").forEach((el) => {
        gsap.to(el, {
          scaleX: Number(el.dataset.fill),
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [lang]);

  const maxima = [100, 100, 100, 10, 100, 20];

  return (
    <section className="sec" id="impakti" data-tone="night" ref={root}>
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

        <div className="kpiGrid">
          {c.items.map((k, i) => (
            <FadeIn className="kpiCell" key={k.l} delay={i * 0.04}>
              <div className="kpiVal">
                <span className="num" data-count={k.v} data-pre={k.pre}>
                  {k.pre}0
                </span>
                {k.suf && <span className="suf">{k.suf}</span>}
              </div>
              <p className="kpiLabel">{k.l}</p>
              <div className="kpiBar">
                <i data-fill={Math.min(k.v / maxima[i], 1)} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
