"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";
import { useBasket } from "./BasketContext";
import { gsap, ScrollTrigger, isFinePointer, prefersReducedMotion, useGsapSetup } from "./motion";

export default function Nav() {
  useGsapSetup();
  const { t, lang, setLang } = useLang();
  const { count, setOpen } = useBasket();
  const bar = useRef<HTMLElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (progress.current) {
            gsap.set(progress.current, { width: `${self.progress * 100}%` });
          }
        },
      });
      ScrollTrigger.create({
        trigger: "#hero",
        start: "bottom 90px",
        onEnter: () => setSolid(true),
        onLeaveBack: () => setSolid(false),
      });
    });

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const triggers = sections.map((sec) =>
      ScrollTrigger.create({
        trigger: sec,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) setActive(sec.id);
        },
      }),
    );

    return () => {
      ctx.revert();
      triggers.forEach((tr) => tr.kill());
    };
  }, []);

  /* magnetic pull on the basket button */
  const ctaRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || !isFinePointer() || prefersReducedMotion()) return;
    const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      qx((e.clientX - (r.left + r.width / 2)) * 0.3);
      qy((e.clientY - (r.top + r.height / 2)) * 0.4);
    };
    const reset = () => {
      qx(0);
      qy(0);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60 });
    else el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <nav className={`nav${solid ? " solid" : ""}`} ref={bar}>
      <a className="brand" href="#hero" onClick={(e) => go(e, "hero")} data-cursor="Lart">
        <svg className="brandMark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1" />
          <path
            d="M8 24c5-7 11-9 16-6 1.6 1 3 .8 4.4-.4 1.6-1.4 3-1 3.6.6-1.2 4.4-5 7.2-10 7.2-5.6 0-10-.6-14-1.4Z"
            fill="currentColor"
          />
        </svg>
        <span>Divjaka&nbsp;STP</span>
      </a>

      <div className="navLinks">
        {t.nav.links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? "on" : ""}
            onClick={(e) => go(e, l.id)}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="navTools">
        <div className="langToggle" role="group" aria-label="Gjuha / Language">
          <button
            className={lang === "al" ? "on" : ""}
            onClick={() => setLang("al")}
            aria-pressed={lang === "al"}
          >
            <span>AL</span>
          </button>
          <button
            className={lang === "en" ? "on" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            <span>EN</span>
          </button>
        </div>
        <button
          className="btn btnSolid basketBtn"
          ref={ctaRef}
          onClick={() => setOpen(true)}
          data-cursor={t.marketplace.open}
          aria-label={`${t.marketplace.basket} — ${count}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M4 7h16l-1.4 12.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8Z" />
            <path d="M8.6 7a3.4 3.4 0 0 1 6.8 0" strokeLinecap="round" />
          </svg>
          <span>{t.marketplace.basket}</span>
          {count > 0 && <em className="basketCount num">{count}</em>}
        </button>
      </div>

      <span className="navProgress" ref={progress} />
    </nav>
  );
}
