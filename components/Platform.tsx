"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";
import { gsap, ScrollTrigger, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Platform() {
  useGsapSetup();
  const { t, lang } = useLang();
  const c = t.platform;
  const root = useRef<HTMLElement>(null);

  /* the cards stack: each one pins, then dims as the next covers it */
  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".module");
      cards.forEach((card, i) => {
        card.style.top = `${96 + i * 18}px`;
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top 82%",
            end: "top 32%",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".moduleArt").forEach((art) => {
        const img = art.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -7, scale: 1.16 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: { trigger: art, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, [lang]);

  return (
    <section className="sec" id="platforma" data-tone="night" ref={root}>
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

        <div className="modules">
          {c.modules.map((m) => (
            <article className="module" key={m.n}>
              <div className="moduleText">
                <span className="moduleNum">{m.n}</span>
                <h3>{m.title}</h3>
                <p className="body">{m.body}</p>
                <div className="tags">
                  {m.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="moduleArt">
                <Image
                  src={`/images/${m.img}.jpg`}
                  alt={m.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
