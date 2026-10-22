"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLang } from "./LangContext";
import { FadeIn, SplitText, useParallax } from "./Reveal";

export default function Hotel() {
  const { t, lang } = useLang();
  const c = t.hotel;
  const art = useRef<HTMLDivElement>(null);
  useParallax(art, 12);

  return (
    <section className="sec" id="hoteli" data-tone="shell">
      <div className="wrap">
        <FadeIn className="eyebrow mono">
          <i />
          <b>{c.index}</b>
          <span>{c.eyebrow}</span>
        </FadeIn>

        <div className="hotelGrid">
          <div>
            <SplitText
              key={`${lang}-t`}
              text={c.title}
              as="h2"
              className="dMed"
            />
            <FadeIn>
              <p className="body" style={{ marginTop: 24 }}>
                {c.body1}
              </p>
              <p className="body" style={{ marginTop: 18 }}>
                {c.body2}
              </p>
            </FadeIn>

            <dl className="facts">
              {c.facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hotelArt" ref={art}>
            <Image
              src="/images/pines.jpg"
              alt="Pylli i pishave pranë Hotel Pelikan, Divjakë"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
