import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import heroDashboard from "../assets/hero_dashboard.png"

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Label */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Digital Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white">
            We Build{" "}
            <br />
            <span style={{ color: "#5711C5" }}>Digital</span>
            <br />
            Experiences.
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg text-white/50 max-w-md leading-relaxed">
            webZ Creations crafts high‑performance websites, apps, and SEO systems for ambitious brands.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              <button
                className="flex items-center space-x-2 px-7 py-3.5 text-sm font-semibold text-white"
                style={{ backgroundColor: "#5711C5" }}
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
              <button className="px-7 py-3.5 text-sm font-semibold text-white border border-white/20">
                View Work
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-10 pt-4 border-t border-white/10">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "4.9★", label: "Client Rating" },
              { value: "5yr+", label: "Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
            <div className="border border-white/10 overflow-hidden rounded-sm">
              {/* Browser chrome */}
              <div className="flex items-center space-x-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <img
                src={heroDashboard}
                alt="webZ Creations Dashboard"
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 bg-white px-4 py-3 hidden sm:flex items-center space-x-3"
          >
            <div className="w-2 h-8" style={{ backgroundColor: "#5711C5" }} />
            <div>
              <p className="text-xs text-black/50">Delivery Rate</p>
              <p className="text-sm font-black text-black">100% On‑Time</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
