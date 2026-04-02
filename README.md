# Solantik — Siber Güvenlik Danışmanlığı

Marketing website for **Solantik**, a Turkish cybersecurity consultancy firm. Built on a scroll-driven, WebGL-animated single-page layout with a Next.js 16 App Router backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.2 (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS 3.4 + CSS Variables |
| Animations | GSAP 3.12 + ScrollTrigger |
| Smooth Scroll | Lenis 1.1 |
| 3D Background | Three.js 0.164 (WebGL particle system) |
| Icons | Iconify (`iconify-icon` web component) |
| Fonts | Orbitron (display), Sarpanch (body) via Google Fonts |
| Language | JavaScript (JSX) + TypeScript for API routes |

---

## Project Structure

```
solantik/
├── app/
│   ├── layout.jsx            # Root server component — metadata, lang="tr", CSS import
│   ├── page.jsx              # Root client component — Lenis + GSAP orchestration
│   ├── globals.css           # Tailwind directives, CSS variables, custom utilities
│   ├── api/
│   │   ├── contact/route.ts  # POST /api/contact — contact form handler
│   │   └── waitlist/route.ts # POST /api/waitlist — platform early access signup
│   ├── gizlilik/page.jsx     # Privacy Policy (placeholder)
│   ├── kosullar/page.jsx     # Terms of Use (placeholder)
│   └── kvkk/page.jsx         # KVKK Disclosure (placeholder)
│
├── components/
│   ├── Navigation.jsx        # Fixed top navbar with Lenis scroll-to
│   ├── WebGLBackground.jsx   # Three.js particle field — syncs to scroll + theme
│   ├── PinnedStage.jsx       # Hero — 4-phase pinned scroll timeline (GSAP)
│   ├── Manifesto.jsx         # About / Company values (#hakkimizda)
│   ├── Overview.jsx          # Engagement process steps (#overview)
│   ├── Interface.jsx         # "Neden Solantik" benefits (#interface)
│   ├── Modules.jsx           # Services grid — 6 cards (#hizmetler)
│   ├── Pricing.jsx           # Platform pricing tiers (#platform)
│   └── Access.jsx            # CTA + minimal footer (#iletisim)
│
├── store.js                  # Shared mutable state (scrollState, THEMES array)
├── next.config.js            # Next.js config (CommonJS)
├── tailwind.config.js        # Tailwind config (CommonJS, custom rotate-x plugin)
└── postcss.config.js         # PostCSS config — required for Tailwind processing
```

---

## Architecture Notes

### Scroll & Animation System

All animation logic lives in `app/page.jsx` (`'use client'`). On mount:

1. **Lenis** is initialised and attached to `window.lenis` so inline `onClick` handlers in child components can call `window.lenis.scrollTo(...)`.
2. **GSAP ticker** is synced with Lenis via `gsap.ticker.add(time => lenis.raf(time * 1000))` so all scroll-driven animations run on the same frame loop.
3. **ScrollTrigger** creates one trigger per entry in `THEMES` (from `store.js`). When a section enters the viewport, `applyTheme()` tweens the CSS custom properties (`--bg`, `--accent`, `--border`, `--panel`) on `document.documentElement`, causing a smooth color transition across the entire page.

### WebGL Background

`WebGLBackground.jsx` runs a Three.js particle system in a fixed `z-0` canvas. It:
- Starts with 12 000 particles in a **field** formation.
- Morphs them toward an **orb** formation as scroll progress increases (lerped each frame).
- Reads `themeProxy.bg` / `themeProxy.accent` each frame — these are GSAP-tweened Color objects exported from the same file so `app/page.jsx` can smoothly transition particle colors in sync with the CSS theme.

### Theme System

`store.js` exports two things:
- `scrollState` — a mutable object (`{ scrollProgress, targetProgress }`) shared between the WebGL render loop and GSAP's ScrollTrigger update.
- `THEMES` — array of 7 objects, one per section, each containing `{ id, bg, accent, border, panel }`. The `id` values match section element IDs in the components.

### `'use client'` Boundary

Every component file is marked `'use client'` because they all use browser-only APIs (GSAP, Three.js, `window`, `useEffect`). `app/layout.jsx` remains a server component and handles metadata/SEO.

---

## API Routes

### `POST /api/contact`

Accepts a JSON body. Returns `{ success: boolean, message: string }`.

| Field | Type | Required |
|---|---|---|
| name | string | ✓ |
| email | string | ✓ |
| company | string | ✓ |
| message | string | ✓ |
| service | string | — |

> **TODO:** Integrate Resend or Nodemailer to deliver form submissions by email.

### `POST /api/waitlist`

Accepts `{ email: string }`. Validates format, logs to console.

> **TODO:** Persist to a database (e.g. Supabase, PlanetScale) or forward to a mailing list service (e.g. Loops, Mailchimp).

---

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build (Turbopack)
npm start        # Serve production build
```

---

## Key Config Notes

### PostCSS (`postcss.config.js`)
Must exist — without it Tailwind's `@tailwind` directives are not processed, leaving all utility classes non-functional.

### Tailwind (`tailwind.config.js`)
Uses **CommonJS** (`module.exports`), not ES module `export default`. If you change this, PostCSS will fail to load the config because the project has no `"type": "module"` in `package.json`.

### Custom Tailwind Plugin
The config includes a plugin that generates `.rotate-x-{value}` utilities (0, 5, 6, 10, 15, 20, 30, 45, 75 degrees) used by GSAP's `rotateX` animations on the hero cards.

### `perspective-[1000px]`
Turbopack's CSS parser (lightningcss) rejects arbitrary Tailwind values containing brackets. The single usage of `perspective` in `PinnedStage.jsx` is applied via `style={{ perspective: '1000px' }}` instead.

---

## SEO & Metadata

Set in `app/layout.jsx` via Next.js `metadata` export:
- `lang="tr"`, `og:locale: "tr_TR"`
- Full Open Graph and Twitter card tags
- Turkish title and description targeting pentest/siber güvenlik keywords

---

## Roadmap

- [ ] Connect `/api/contact` to email delivery (Resend recommended)
- [ ] Connect `/api/waitlist` to database + email list
- [ ] Complete `/gizlilik`, `/kosullar`, `/kvkk` legal pages
- [ ] Add `og:image` and favicon
- [ ] Deploy to Vercel
