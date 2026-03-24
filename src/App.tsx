import Nav from './components/Nav'
import Hero from './components/Hero'
import Works from './components/Works'
import Lab from './components/Lab'
import About from './components/About'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Works />
        <Lab />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
