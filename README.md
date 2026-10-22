# Divjaka Smart Tourism Platform

Marketing site for the **Divjaka Smart Tourism Platform** — a digital tourism platform for the
Divjakë–Karavasta area of Albania, with **Hotel Pelikan** as applicant and first operator.

Bilingual (Albanian primary, English toggle), single page, nine sections: the project purpose,
six platform modules, seven destinations, bookable packages, the six project objectives,
24-month targets, the hotel, the implementation roadmap and contact.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · GSAP + ScrollTrigger · Lenis ·
plain CSS with custom properties. No UI framework.

## How it is put together

- `lib/content.ts` — every string on the site, in both languages. Copy changes happen here,
  not in components.
- `app/globals.css` — the palette and all styles. Sections are colour-blocked: each one sets
  `data-tone` (`shell`, `sand`, `night`, `lagoon`, `sun`) and everything inside derives its
  colours from that block.
- `components/` — one component per section, plus the loader, cursor, smooth scroll and nav.
- `components/motion.ts` — GSAP registration and the reduced-motion / pointer checks.

## Deploying

The whole site prerenders, so it builds to static files (`output: "export"`) and needs no Node
runtime. That also means the Next image optimizer is off and the photographs are pre-sized WebP.

```bash
npm run deploy   # next build, then wrangler pages deploy out
```

First time only: `npx wrangler login`.

## Before this goes to anyone official

- **The hotel's real phone and email** still need adding to `CONTACT` in `lib/content.ts`. It
  currently carries only the location and coordinates, which are true.
- **The *Impakti* figures** (+40% sales, 60 businesses, 12k visitors) are 24-month targets and are
  labelled as such on the page. They are not measured results.

The facts about the park are verified: 222 km² protected area, 42 km² lagoon (the largest in
Albania), 230+ bird species recorded, roughly 5% of the world's Dalmatian pelicans, Ramsar
site no. 781.

## Photographs

All photographs are from Wikimedia Commons under CC0, CC BY or CC BY-SA licences. The CC BY and
CC BY-SA ones **require attribution**, which is why `lib/credits.json` exists and the footer lists
every author and licence. If you swap an image, update that file — do not remove the credits block.
