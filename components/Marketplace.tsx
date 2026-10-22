"use client";

import { useMemo, useState } from "react";
import { useLang } from "./LangContext";
import { useBasket } from "./BasketContext";
import { FadeIn, SplitText } from "./Reveal";

export default function Marketplace() {
  const { t, lang } = useLang();
  const c = t.marketplace;
  const { add, has, count, setOpen } = useBasket();
  const [cat, setCat] = useState<string>("all");

  const stockLabel = (s: string) =>
    s === "in" ? c.stockIn : s === "seasonal" ? c.stockSeasonal : c.stockOrder;

  /* indices are kept so the basket stays keyed to the catalogue, not the filter */
  const shown = useMemo(
    () =>
      c.items
        .map((item, idx) => ({ item, idx }))
        .filter(({ item }) => cat === "all" || item.cat === cat),
    [c.items, cat],
  );

  return (
    <section className="sec" id="marketplace" data-tone="sand">
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

        <div className="shopBar">
          <div className="filters" role="group" aria-label={c.eyebrow}>
            <button
              className={`filter${cat === "all" ? " on" : ""}`}
              onClick={() => setCat("all")}
              aria-pressed={cat === "all"}
            >
              {c.all}
            </button>
            {c.categories.map((k) => (
              <button
                key={k.id}
                className={`filter${cat === k.id ? " on" : ""}`}
                onClick={() => setCat(k.id)}
                aria-pressed={cat === k.id}
              >
                {k.label}
              </button>
            ))}
          </div>

          <button className="shopBasket mono" onClick={() => setOpen(true)}>
            {c.basket}
            <em className="num">{count}</em>
          </button>
        </div>

        <div className="shopGrid">
          {shown.map(({ item, idx }) => (
            <article className="product" key={item.n}>
              <div className="productTop">
                <span className={`stock stock--${item.stock}`}>{stockLabel(item.stock)}</span>
                <span className="mono productCat">
                  {c.categories.find((k) => k.id === item.cat)?.label}
                </span>
              </div>
              <h3 className="productName">{item.n}</h3>
              <p className="productBy">{item.by}</p>
              <button
                className={`productAdd${has(idx) ? " added" : ""}`}
                onClick={() => add(idx)}
              >
                <span>{has(idx) ? c.inBasket : c.add}</span>
                <i aria-hidden="true">+</i>
              </button>
            </article>
          ))}
        </div>

        <FadeIn>
          <p className="mono shopNote">{c.priceNote}</p>
        </FadeIn>
      </div>
    </section>
  );
}
