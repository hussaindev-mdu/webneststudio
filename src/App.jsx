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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Problems />
        <Pricing />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MouseCursor3D />
    </>
  )
}
