import SEOHead from "../components/SEOHead"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import WhatsDifferent from "../components/WhatsDifferent"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Home"
        description="WebZ Creations is a premier digital experience agency. We craft high-performance websites, custom SEO strategies, powerful mobile apps, and robust CRM systems to scale your business."
        keywords="WebZ Creations, web design agency, web development, SEO agency, digital marketing, app development, CRM development, custom software"
      />
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <WhatsDifferent />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
