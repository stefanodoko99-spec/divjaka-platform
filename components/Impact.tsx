"use client";

import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";

export default function Impact() {
  const { t, lang } = useLang();
  const c = t.impact;

  return (
    <section className="sec" id="impakti" data-tone="night">
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

        <div className="metricGrid">
          {c.items.map((m, i) => (
            <FadeIn className="metric" key={m.k} delay={i * 0.04}>
              <span className="metricNum mono">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="metricName">{m.k}</h3>
              <p className="metricDesc">{m.d}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
