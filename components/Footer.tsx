"use client";

import { useLang } from "./LangContext";
import { prefersReducedMotion } from "./motion";
import creditsData from "@/lib/credits.json";

type Credit = {
  slug: string;
  title: string;
  author: string;
  licence: string;
  source: string;
};

const credits = creditsData as Credit[];

export default function Footer() {
  const { t } = useLang();
  const c = t.footer;

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footTop">
          <span className="mono">© {new Date().getFullYear()} Divjaka Smart Tourism Platform</span>
          <span className="mono spacer" style={{ opacity: 0.6 }}>
            {c.park}
          </span>
          <button className="mono" onClick={toTop} data-cursor="Lart">
            {c.back} ↑
          </button>
        </div>

        {/* The CC BY and CC BY-SA licences require attribution, so the list
            stays — folded away rather than filling the footer. */}
        <details className="credits">
          <summary className="mono">{c.credits}</summary>
          <p className="creditsNote">{c.creditsNote}</p>
          <ul className="creditsList">
            {credits.map((cr) => (
              <li key={cr.slug}>
                <a href={cr.source} target="_blank" rel="noreferrer noopener">
                  {cr.title}
                </a>{" "}
                — {cr.author}, {cr.licence}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}
