# SemmAi domain migration checklist

The site is branded SemmAi and the code now uses **https://semmai.net** (switched in the code, not yet deployed). The old domain was **https://webneststudio.live**. The code-change section below is done; the redirect, Search Console and social-profile steps are still open.

## Before you switch

- [ ] Confirm "SemmAi" is clear to use: trademark search (India IP office and, if you plan to sell abroad, WIPO), company-name check (MCA), and social handles.
- [ ] Buy the domain and decide on one form (e.g. `https://example.com`, no `www`, or the reverse). Every step below uses that exact form.
- [ ] Note current Google Search Console traffic for the 12 URLs, so you can compare after the move.

## Code changes (DONE: CNAME, SITE.url/ogImage, index.html, robots.txt, privacy.js)

| File | Change |
|---|---|
| `public/CNAME` | New domain (GitHub Pages custom domain) |
| `src/data/seo.js` | `SITE.url` and `SITE.ogImage` |
| `index.html` | `canonical`, `og:image`, `twitter:image`, `og:url` |
| `public/robots.txt` | `Sitemap:` line |
| `src/data/privacy.js` | Mention of webneststudio.live |
| `README.md` | Live URL |

Paths stay the same, so every page keeps its slug: `/website-development/`, `/pricing/` and so on. Rebuild and confirm `dist/sitemap.xml` lists the new domain.

## Redirects (most important)

- [ ] Keep webneststudio.live registered for at least 12 months after the move, ideally longer.
- [ ] Make every old URL return a **301** to the same path on the new domain (`webneststudio.live/pricing/` → `new-domain/pricing/`), not to the homepage. GitHub Pages cannot send 301s for a domain it no longer serves, so point the old domain at a host or DNS provider that supports path-preserving redirects (e.g. Cloudflare redirect rule, Netlify `_redirects`, or a registrar forwarding service that keeps the path).
- [ ] Test a few old URLs: each should show `301` and land on the matching new page.

## Google and other search engines

- [ ] Add and verify the new domain in Google Search Console (domain property).
- [ ] Submit the new `sitemap.xml`.
- [ ] Run **Change of Address** from the old webneststudio.live property to the new one.
- [ ] Do the same in Bing Webmaster Tools (Site Move).
- [ ] Update the Google Analytics property's website URL; the GA4 ID can stay the same.
- [ ] If you add a Google Business Profile, use the new domain.

## Outside the website

- [ ] Instagram and Facebook: update profile name, website link and profile picture (`logo/semmai/semmai-icon-512.png`). Only then update `brand.instagram` / `brand.facebook` in `src/data/content.js`, if the profile URLs change.
- [ ] WhatsApp Business: name, website link, profile picture.
- [ ] Formspree: add the new domain to allowed domains if restriction is enabled.
- [ ] Email signature, invoices, demo sites and any directory listings that link to webneststudio.live.

## After the switch

- [ ] Check Search Console "Pages" and "Crawl stats" weekly for 4–6 weeks; fix any 404s.
- [ ] Expect a temporary dip in rankings for a few weeks; it usually recovers if every old URL 301s to its match.
- [ ] Optional, once the old name no longer brings traffic: rename `package.json` and the `webnest-*.glb` model files.
