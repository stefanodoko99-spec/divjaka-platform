"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";
import { gsap, ScrollTrigger, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Destinations() {
  useGsapSetup();
  const { t, lang } = useLang();
  const c = t.destinations;
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  /* on desktop the section pins and the cards run sideways */
  useEffect(() => {
    if (!root.current || !track.current || prefersReducedMotion()) return;
    const el = track.current;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1101px)", () => {
      const distance = () => Math.max(el.scrollWidth - window.innerWidth + 80, 1);
      const tween = gsap.to(el, { x: () => -distance(), ease: "none" });

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tween,
      });

      gsap.from(".destCard", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 62%" },
      });
    });

    return () => mm.revert();
  }, [lang]);

  return (
    <section className="sec destSection" id="destinacionet" data-tone="lagoon" ref={root}>
      <div className="wrap">
        <FadeIn className="eyebrow mono">
          <i />
          <b>{c.index}</b>
          <span>{c.eyebrow}</span>
        </FadeIn>

        <div className="destHead">
          <SplitText
            key={`${lang}-t`}
            text={c.title}
            as="h2"
            className="dLarge"
          />
          <p className="body" style={{ maxWidth: "40ch" }}>
            {c.body}
          </p>
        </div>
      </div>

      <div className="destViewport">
        <div className="destTrack" ref={track}>
          {c.items.map((d, i) => (
            <article className="destCard" key={d.title} data-cursor={c.drag}>
              <div className="destImg">
                <span className="destNum">{String(i + 1).padStart(2, "0")}</span>
                <Image
                  src={`/images/${d.img}.webp`}
                  alt={d.title}
                  fill
                  sizes="(max-width: 1100px) 76vw, 30vw"
                />
              </div>
              <div className="destBody">
                <h3>{d.title}</h3>
                <p className="body" style={{ fontSize: 14 }}>
                  {d.body}
                </p>
                <div className="destMeta">
                  {d.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
