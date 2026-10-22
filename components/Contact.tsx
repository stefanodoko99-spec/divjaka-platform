"use client";

import { useState } from "react";
import { useLang } from "./LangContext";
import { CONTACT } from "@/lib/content";
import { FadeIn, SplitText } from "./Reveal";

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const [email, setEmail] = useState("");
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setNote({ text: ok ? c.sent : c.invalid, ok });
    if (ok) setEmail("");
  };

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard refused — the value stays selectable on the page */
    }
  };

  return (
    <section className="sec" id="kontakt" data-tone="sun">
      <div className="wrap">
        <div className="contactGrid">
          <div>
            <FadeIn className="eyebrow mono">
              <i />
              <span>{c.eyebrow}</span>
            </FadeIn>

            <SplitText key={`${lang}-t`} text={c.title} as="h2" className="dLarge" />

            <form onSubmit={submit} noValidate>
              <div className="field">
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={c.placeholder}
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="submit" data-cursor="Dërgo">
                  <span>{c.submit}</span>
                </button>
              </div>
              <p className="fieldNote" role="status" style={{ opacity: note ? 1 : 0 }}>
                {note?.text ?? "—"}
              </p>
            </form>

            <p className="body" style={{ marginTop: 10, fontSize: 13 }}>
              {c.disclaimer}
            </p>
          </div>

          <FadeIn>
            <p className="mono" style={{ marginBottom: 14 }}>
              Hotel Pelikan · Divjakë
            </p>
            {CONTACT.map((row) => (
              <div className="copyRow" key={row.value}>
                <span className="mono copyLabel">{row.label}</span>
                <b className="num">{row.value}</b>
                <button onClick={() => copy(row.value)} type="button">
                  {copied === row.value ? c.copied : c.copy}
                </button>
              </div>
            ))}
            <p className="body" style={{ marginTop: 22, fontSize: 13 }}>
              {c.address}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
