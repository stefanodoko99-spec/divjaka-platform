"use client";

import { useRef, useState } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";
import { gsap, prefersReducedMotion, ScrollTrigger } from "./motion";

export default function Objectives() {
  const { t, lang } = useLang();
  const c = t.objectives;
  const [open, setOpen] = useState<number | null>(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    const animate = (idx: number, to: number) => {
      const panel = panels.current[idx];
      if (!panel) return;
      if (prefersReducedMotion()) {
        panel.style.height = `${to}px`;
        return;
      }
      gsap.to(panel, {
        height: to,
        duration: 0.55,
        ease: "power3.inOut",
        onComplete: () => ScrollTrigger.refresh(),
      });
    };

    if (open !== null) animate(open, 0);
    if (next !== null) {
      const inner = panels.current[next]?.firstElementChild as HTMLElement | undefined;
      animate(next, inner?.offsetHeight ?? 0);
    }
    setOpen(next);
  };

  return (
    <section className="sec" id="objektivat" data-tone="shell">
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

        <div className="obj">
          {c.items.map((o, i) => (
            <div className={`objItem${open === i ? " open" : ""}`} key={o.title}>
              <button className="objBtn" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span className="objNum">{String(i + 1).padStart(2, "0")}</span>
                <span className="objTitle">{o.title}</span>
                <span className="objPlus" aria-hidden="true" />
              </button>
              <div
                className="objPanel"
                ref={(el) => {
                  panels.current[i] = el;
                }}
                style={open === i ? undefined : { height: 0 }}
              >
                <div className="objInner">
                  <i />
                  <div>
                    <p className="body">{o.body}</p>
                    <div className="objKpis">
                      {o.kpis.map((k) => (
                        <span className="tag" key={k}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
