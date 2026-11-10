import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Process from './components/Process'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MouseCursor3D from './components/MouseCursor3D'
import ServiceLinks from './components/ServiceLinks'
import LandingPage from './components/LandingPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsPage from './components/TermsPage'
import Seo from './components/Seo'
import { pages } from './data/pages'
import { homeMeta, homeSchema } from './data/seo'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { if (!window.location.hash) window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function Home() {
  return (
    <>
      <Seo meta={homeMeta} schema={homeSchema} />
      {/* the 3D mouse cursor only applies to the home page's 3D laptop, so it mounts here only */}
      <MouseCursor3D />
      <Hero />
      <Portfolio preview title="Featured projects" subtitle="A quick look at our work. See every project, with live demos, on the portfolio page." moreHref="/portfolio/" moreLabel="View all website design projects" />
      <Problems />
      <ServiceLinks />
      <Pricing previewFeatures={3} title="Website packages at a glance" subtitle="One-time website development fee. The full feature list for each package is on our pricing page." moreHref="/pricing/" moreLabel="See full website development pricing" />
      <Process />
      <About />
      <FAQ />
      <Contact moreHref="/contact/" moreLabel="More ways to contact WebNestStudio" />
    </>
  )
}

function NotFound() {
  return (
    <section className="section pt-32 text-center">
      <Seo meta={{ path: '/404/', title: 'Page not found | WebNestStudio', description: 'This page could not be found.' }} noindex />
      <h1 className="text-4xl font-extrabold">Page not found</h1>
      <Link to="/" className="btn-primary mt-6">Back to home</Link>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {pages.map((p) => <Route key={p.slug} path={p.slug} element={<LandingPage page={p} />} />)}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
