import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"


const navLinks = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Portfolio", href: "portfolio" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
]

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    )
    navLinks.forEach((link) => {
      const section = document.getElementById(link.href)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(href)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white border-b border-black/10 py-3 text-black"
            : "bg-black py-5 text-white"
        } rounded-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between rounded-sm">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center space-x-2"
          >
            <span className={`font-black text-2xl tracking-tight ${scrolled ? "text-black" : "text-white"}`}>web<span style={{ color: "#5711C5" }}>Z</span></span>
            <span className={`font-light text-sm ${scrolled ? "text-black/40" : "text-white/40"} tracking-widest uppercase`}>Creations</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors ${scrolled ? (activeSection === link.href ? "text-black" : "text-black/40") : (activeSection === link.href ? "text-white" : "text-white/40")}`}
                style={activeSection === link.href ? { color: "#5711C5" } : {}}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="overflow-hidden rounded-sm">
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                <button
                  className="text-sm font-semibold px-5 py-2 text-white transition-opacity rounded-sm"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  Get Started
                </button>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black dark:text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[64px] z-40 md:hidden bg-black border-b border-black/10 py-6 px-6 flex flex-col space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium py-3 border-b border-black/5 dark:border-white/5"
                style={
                  activeSection === link.href
                    ? { color: "#5711C5" }
                    : { color: "inherit" }
                }
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="block">
                <button
                  className="w-full h-auto object-cover rounded-sm font-semibold text-white"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  Get Started
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
