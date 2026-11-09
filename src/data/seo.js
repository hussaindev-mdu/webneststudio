import { brand } from './content'
import { pages } from './pages'

export const SITE = {
  url: 'https://webneststudio.live',
  name: brand.name,
  ogImage: 'https://webneststudio.live/og-image.png',
}

export const pathFor = (slug) => (slug ? `/${slug}/` : '/')
export const urlFor = (slug) => SITE.url + pathFor(slug)

export const homeMeta = {
  path: '/',
  title: 'Affordable Website Development in India from ₹5,999 | WebNestStudio',
  description:
    'Fast, mobile-friendly websites for restaurants, clinics, real estate and small businesses across India. Packages from ₹5,999, live in 6 days.',
}

export const metaFor = (page) => ({ path: pathFor(page.slug), title: page.title, description: page.description })

// every indexable page, used for prerendering and the sitemap
export const routes = [homeMeta, ...pages.map(metaFor)]

const business = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#business`,
  name: brand.name,
  url: SITE.url + '/',
  logo: `${SITE.url}/favicon.svg`,
  image: SITE.ogImage,
  email: brand.email,
  telephone: '+' + brand.whatsappNumber,
  areaServed: { '@type': 'Country', name: 'India' },
  priceRange: '₹5,999 - ₹9,999',
  description: homeMeta.description,
}

export const homeSchema = [
  { '@context': 'https://schema.org', ...business },
  { '@context': 'https://schema.org', '@type': 'WebSite', name: brand.name, url: SITE.url + '/' },
]

export const serviceSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.h1,
  serviceType: page.nav,
  description: page.description,
  url: urlFor(page.slug),
  areaServed: { '@type': 'Country', name: 'India' },
  provider: { '@id': `${SITE.url}/#business` },
})

export const breadcrumbSchema = (page) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
    { '@type': 'ListItem', position: 2, name: page.nav, item: urlFor(page.slug) },
  ],
})

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
})
