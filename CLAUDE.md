# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment

Push to `main` — GitHub Actions runs `npm run build` and publishes `dist/` to GitHub Pages. In the repo's Pages settings, source must be set to **GitHub Actions** (not "Deploy from a branch").

## Local development

```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally
```

## Architecture

Astro 5 static site. Each page is a file under `src/pages/` and compiles to its own URL.

- **`src/layouts/Base.astro`** — shared shell: sidebar nav with active-state detection via `Astro.url.pathname`, theme toggle, contact modal, footer. Every page imports this.
- **`src/pages/*.astro`** — one file per route. `index.astro` → `/`, `about.astro` → `/about/`, etc.
- **`src/pages/case-studies/*.astro`** — case study pages at `/case-studies/{slug}/`. Metadata centralized in `src/data/caseStudies.ts`; shared chrome lives in `src/components/{CaseStudyCard,FeaturedWorkCard,CaseStudyNav}.astro`.
- **`src/styles/global.css`** — design tokens as CSS custom properties on `:root`. Dark palette lives in `:root[data-theme="dark"]`; `setTheme()` in `main.js` just toggles `documentElement.dataset.theme`.
- **`public/main.js`** — all client-side interactivity: keyboard shortcuts, filtering, modal, theme switcher, clock, brand ticker, updates/work renderers, case-study CAR carousel. Loaded as a single `<script is:inline src="/main.js">` from Base.astro.
- **`public/{Icons,Images,Logos,Video}/`** — static assets served from the site root (e.g. `/Icons/foo.svg`).

### Navigation

Sidebar items are `<a href="...">` elements. `Base.astro` adds `.active` based on path match. `main.js` exposes `nav(pageId)` for the keyboard-shortcut handler — it sets `window.location.href` from the `PAGE_PATHS` map.

### Keyboard shortcuts

Sidebar shortcut badges (1–9) stay in sync with the `map` object in the `keydown` listener in `main.js`. Key 3 routes to `/writing/`. Key 8 opens the external Adobe Portfolio; key 9 opens the contact modal.

### Assets

- `public/Icons/` — tool/software SVGs used on the About and Tools pages
- `public/Logos/` — client brand assets used in the ticker and case studies
- Brand images are referenced by absolute path (`/Logos/foo.svg`) in the `brands` array at the top of `main.js`
