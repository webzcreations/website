import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:text-white" style={{ '--tw-selection-color': '#5711C5' } as React.CSSProperties}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
