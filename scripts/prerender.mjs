// After `vite build` and `vite build --ssr`, writes a static HTML file for every route
// (dist/<route>/index.html) with the page content, title, description and canonical tag,
// plus dist/sitemap.xml. GitHub Pages then serves real HTML to Google and visitors.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, routes, SITE } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const must = (html, re, to) => {
  if (!re.test(html)) throw new Error('index.html is missing: ' + re)
  return html.replace(re, () => to)
}

for (const r of routes) {
  const url = SITE.url + r.path
  let html = template.replace('<div id="root"></div>', () => `<div id="root">${render(r.path)}</div>`)
  html = must(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
  html = must(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(r.description)}" />`)
  html = must(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(r.title)}" />`)
  html = must(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(r.description)}" />`)
  html = must(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  html = must(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  const file = r.path === '/' ? 'index.html' : path.join(r.path.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), html)
  console.log('prerendered', r.path)
}

const day = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((r) => `  <url>\n    <loc>${SITE.url + r.path}</loc>\n    <lastmod>${day}</lastmod>\n    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
  .join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log('sitemap.xml written with', routes.length, 'URLs')
