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
      <MouseCursor3D />
    </>
  )
}

function Home() {
  return (
    <>
      <Seo meta={homeMeta} schema={homeSchema} />
      <Hero />
      <Portfolio />
      <Problems />
      <ServiceLinks />
      <Pricing />
      <Process />
      <About />
      <FAQ />
      <Contact />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
