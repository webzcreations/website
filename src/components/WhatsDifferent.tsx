import { motion } from "framer-motion"
import { Cpu, Smartphone, Search, MessageSquare, Layers } from "lucide-react"

const differences = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We leverage cutting-edge frameworks and tools to build fast, scalable, and secure digital products.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every project is crafted mobile-first, ensuring a flawless experience across all devices and screen sizes.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    description: "Clean code, semantic markup, and optimized performance mean your site ranks higher from day one.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "No jargon, no surprises. You get clear updates, honest timelines, and direct access to your project team.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Built to grow with you. Our architectures handle increased traffic, features, and complexity with ease.",
  },
]

export default function WhatsDifferent() {
  return (
    <section id="what-makes-us-different" className="py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: "#5711C5" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Our Edge
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black dark:text-white leading-tight">
              What Makes Us <br />
              <span style={{ color: "#5711C5" }}>Different.</span>
            </h2>
            <p className="text-base text-black/50 dark:text-white/50 leading-relaxed max-w-md">
              We don't just build websites — we engineer digital experiences that drive measurable results.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 dark:bg-white/10">
          {differences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white dark:bg-black p-8 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6 text-white"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="mt-6 w-0 h-0.5 transition-all duration-500 group-hover:w-8"
                  style={{ backgroundColor: "#5711C5" }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
