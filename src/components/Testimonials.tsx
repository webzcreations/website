import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "VP of Marketing, Apex Blockchain Labs",
    quote: "webZ Creations crafted a crypto wallet dashboard that completely exceeded our initial layouts. The design and smooth animations look premium. Best design agency we have worked with.",
    rating: 5,
  },
  {
    name: "Marcus Vance",
    role: "Director of Operations, Zeta Logistics",
    quote: "We needed a custom CRM tool to coordinate our global delivery logs. The team delivered on time, with clean TypeScript coding and robust search capabilities. Our workflow lookup speed skyrocketed.",
    rating: 5,
  },
  {
    name: "Liam O'Connor",
    role: "Product Owner, Aether Systems",
    quote: "Their SEO strategy combined with the page rebuilding raised our monthly organic inquiries by 150%. They are extremely responsive, analytical, and write clean, structured React code.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Client Voices
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            What Our <span style={{ color: "#5711C5" }}>Clients</span> Say.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-black p-8 flex flex-col justify-between space-y-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-white/5">
                <Quote className="h-12 w-12 fill-current rotate-180" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <div key={i} className="w-3 h-3" style={{ backgroundColor: "#5711C5" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-white/70 leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                <div
                  className="w-9 h-9 flex items-center justify-center text-xs font-black text-white shrink-0"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
