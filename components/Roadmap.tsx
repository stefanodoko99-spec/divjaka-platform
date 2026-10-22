"use client";

import { useEffect, useRef } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";
import { TECH } from "@/lib/content";
import { gsap, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Roadmap() {
  useGsapSetup();
  const { t, lang } = useLang();
  const c = t.roadmap;
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const narrow = window.matchMedia("(max-width: 780px)").matches;
      gsap.to(".tlLine i", {
        [narrow ? "scaleY" : "scaleX"]: 1,
        ease: "none",
        scrollTrigger: { trigger: ".tl", start: "top 78%", end: "bottom 65%", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section className="sec" id="plani" data-tone="lagoon" ref={root}>
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

        <div className="tl">
          <div className="tlLine" aria-hidden="true">
            <i />
          </div>
          <div className="tlGrid">
            {c.phases.map((p, i) => (
              <FadeIn className={`tlItem${i === 0 ? " live" : ""}`} key={p.n} delay={i * 0.06}>
                <div className="mono muted" style={{ marginBottom: 10 }}>
                  {p.n}
                </div>
                <h4>{p.title}</h4>
                <ul>
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <h3 className="dMed" style={{ marginTop: "clamp(46px, 6vw, 84px)" }}>
            {c.techTitle}
          </h3>
          <div className="tech">
            {TECH.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
