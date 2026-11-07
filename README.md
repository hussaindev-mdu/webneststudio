# WebNestStudio – Portfolio Website

React (Vite) + Tailwind CSS single-page site. Fast, mobile-first, no heavy UI libraries.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Edit content
Everything editable (brand details, city/niche, prices, portfolio, testimonials, FAQs, contact info) is in **`src/data/content.js`**. Search for `REPLACE` and `PLACEHOLDER`.
- Portfolio images: drop files into `public/images/` and update the paths. The current SVGs are generated placeholders (`node scripts/make-images.mjs`).
- Your photo: put it in `public/images/` and set `about.photo` (e.g. `'/images/me.jpg'`).
- Colours & fonts: `tailwind.config.js` (fonts are loaded in `index.html`).

## Formspree (contact form)
1. Sign up at https://formspree.io and create a form.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. Set `formspreeId` in `src/data/content.js`.

## Meta Pixel
In `index.html`, replace `YOUR_PIXEL_ID` in the commented Pixel block and remove the comment markers (`<!--` and `-->`).

## Deploy
**Netlify:** push to GitHub → "Add new site" → import repo. Build command `npm run build`, publish directory `dist` (already in `netlify.toml`). Or drag the `dist` folder into Netlify Drop.

**Vercel:** push to GitHub → "Add New Project" → import. Vercel auto-detects Vite (settings in `vercel.json`).

Unknown URLs show `public/404.html` on both platforms. After deploying, uncomment and set `og:url` in `index.html`.
