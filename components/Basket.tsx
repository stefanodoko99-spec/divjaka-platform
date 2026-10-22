"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { useBasket } from "./BasketContext";

export default function Basket() {
  const { t } = useLang();
  const c = t.marketplace;
  const { lines, count, add, remove, clear, open, setOpen } = useBasket();
  const [step, setStep] = useState(0);

  /* hold the page still while the drawer is open */
  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  const close = () => {
    setOpen(false);
    if (step === c.steps.length - 1) {
      clear();
      setStep(0);
    }
  };

  const advance = () => {
    if (step < c.steps.length - 1) setStep(step + 1);
  };

  const isLast = step === c.steps.length - 1;
  const canAdvance = count > 0;

  return (
    <>
      <div
        className={`drawerVeil${open ? " on" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`drawer${open ? " on" : ""}`}
        aria-label={c.basket}
        aria-hidden={!open}
      >
        <header className="drawerTop">
          <span className="mono">
            {c.basket} — {count} {count === 1 ? c.itemsOne : c.itemsMany}
          </span>
          <button className="mono drawerClose" onClick={close}>
            {c.close} ✕
          </button>
        </header>

        <ol className="stepper">
          {c.steps.map((s, i) => (
            <li key={s} className={i === step ? "on" : i < step ? "done" : ""}>
              <i className="mono">{String(i + 1).padStart(2, "0")}</i>
              <span>{s}</span>
            </li>
          ))}
        </ol>

        <div className="drawerBody">
          {count === 0 && <p className="drawerEmpty">{c.empty}</p>}

          {count > 0 && step === 0 && (
            <ul className="lines">
              {lines.map((l) => (
                <li key={l.idx}>
                  <div>
                    <b>{c.items[l.idx].n}</b>
                    <span className="mono">{c.items[l.idx].by}</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => remove(l.idx)} aria-label={c.remove}>
                      −
                    </button>
                    <span className="num">{l.qty}</span>
                    <button onClick={() => add(l.idx)} aria-label={c.add}>
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {count > 0 && step === 1 && (
            <div className="drawerForm">
              <input id="basket-name" type="text" placeholder={c.fieldName} autoComplete="name" />
              <input
                id="basket-email"
                type="email"
                placeholder={t.contact.placeholder}
                autoComplete="email"
              />
            </div>
          )}

          {count > 0 && step === 2 && (
            <div className="payments">
              {c.payments.split(" · ").map((p, i) => (
                <label className="payOption" key={p}>
                  <input type="radio" name="pay" defaultChecked={i === 0} />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          )}

          {count > 0 && isLast && (
            <div className="confirmed">
              <p className="confirmedTitle">{c.confirmed}</p>
              <p className="body">{c.confirmedBody}</p>
            </div>
          )}
        </div>

        <footer className="drawerFoot">
          <p className="mono drawerNote">{c.checkoutNote}</p>
          {!isLast ? (
            <button className="btn btnSolid" onClick={advance} disabled={!canAdvance}>
              <span>{c.checkout}</span>
            </button>
          ) : (
            <button className="btn btnSolid" onClick={close}>
              <span>{c.close}</span>
            </button>
          )}
        </footer>
      </aside>
    </>
  );
}
