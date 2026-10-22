"use client";

import { useLang } from "./LangContext";
import { FadeIn, SplitText } from "./Reveal";

export default function Intro() {
  const { t, lang } = useLang();
  const c = t.intro;

  return (
    <section className="sec" id="projekti" data-tone="shell">
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

        <div className="psGrid">
          <FadeIn className="psCol problem">
            <h3>
              <i />
              {c.problemTitle}
            </h3>
            <ul>
              {c.problems.map((p, i) => (
                <li key={p}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="psCol solution" delay={0.08}>
            <h3>
              <i />
              {c.solutionTitle}
            </h3>
            <ul>
              {c.solutions.map((s, i) => (
                <li key={s}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
