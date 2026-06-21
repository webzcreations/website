import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HeroIllustration from "./HeroIllustration"

const floatingOrbs = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 8, opacity: 0.08 },
  { size: 200, x: "75%", y: "10%", delay: 2, duration: 10, opacity: 0.06 },
  { size: 250, x: "60%", y: "70%", delay: 4, duration: 9, opacity: 0.05 },
  { size: 150, x: "20%", y: "60%", delay: 1, duration: 7, opacity: 0.07 },
  { size: 180, x: "85%", y: "50%", delay: 3, duration: 11, opacity: 0.04 },
]

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
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background:
                "radial-gradient(circle, rgba(87,17,197,0.3) 0%, rgba(87,17,197,0) 70%)",
              opacity: orb.opacity,
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -10, 5, 0],
              scale: [1, 1.05, 0.95, 1.02, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>

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

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  )
}
