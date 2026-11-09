# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # Vite dev server, http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
node scripts/make-images.mjs   # regenerates the placeholder SVGs in public/images/
```

There is no test runner or linter configured.

## Architecture

Marketing/portfolio site: React 19 + Vite + Tailwind CSS 3 (framer-motion, lucide-react) with react-router-dom v6. No backend.

**SEO / prerendering:** `npm run build` runs the client build, an SSR build of [src/entry-server.jsx](src/entry-server.jsx), then [scripts/prerender.mjs](scripts/prerender.mjs), which writes `dist/<route>/index.html` for every route plus `dist/sitemap.xml`. The client hydrates these pages. Extra pages (services, pricing, portfolio, contact) are defined in [src/data/pages.js](src/data/pages.js) and rendered by [src/components/LandingPage.jsx](src/components/LandingPage.jsx); titles, schema.org JSON-LD and the route list are in [src/data/seo.js](src/data/seo.js). To add a page, add an entry to `pages.js`. Keep components SSR-safe (no `window`/`localStorage` during render).

- [src/App.jsx](src/App.jsx) defines the routes; the home page renders a fixed sequence of section components from [src/components/](src/components/) (Header, Hero, Problems, Portfolio, Pricing, Process, Testimonials, About, FAQ, Contact, Footer, plus a floating WhatsAppButton). Nav links are in-page `#anchor`s.
- **All copy and business details live in [src/data/content.js](src/data/content.js)** (brand, nav, hero, pricing, portfolio, testimonials, FAQs, contact, `formspreeId`, `whatsappLink()` helper). Components read from it rather than hardcoding text; change content there. Placeholders are marked `REPLACE` / `PLACEHOLDER`. Hero headline uses `{niche}` / `{city}` tokens filled from `brand`.
- Contact form posts to Formspree (`https://formspree.io/f/${formspreeId}`) from [src/components/Contact.jsx](src/components/Contact.jsx); it won't work until `formspreeId` is set.
- Theme (brand/accent/cream/ink/muted colours, `font-heading`/`font-body`) is defined in [tailwind.config.js](tailwind.config.js); fonts are loaded in [index.html](index.html). Shared classes such as `btn-whatsapp` are in [src/index.css](src/index.css). Accent colours were chosen for AA contrast; keep that when changing them.
- Meta Pixel snippet in `index.html` is commented out with a `YOUR_PIXEL_ID` placeholder; `og:url` is also left commented until deploy.

## Deployment

`dist/` is build output (gitignored); never edit it by hand. Deploy configs exist for both Netlify ([netlify.toml](netlify.toml)) and Vercel ([vercel.json](vercel.json)); unknown URLs serve [public/404.html](public/404.html).
