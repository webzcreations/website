import { motion } from "framer-motion"
import { Sliders, DollarSign, Rocket, Headphones, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Sliders,
    title: "Customized Solutions",
    description: "Every business is unique. We tailor our strategies and builds to your exact goals, audience, and industry.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium digital solutions without the premium price tag. Transparent pricing with no hidden fees.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile workflows and efficient development cycles mean your project goes live faster — without cutting corners.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We don't disappear after launch. You get continuous maintenance, updates, and priority assistance.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Approach",
    description: "Every decision is measured against your growth metrics — we build for real business outcomes, not just aesthetics.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Why Us
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Why Businesses <br />
              <span style={{ color: "#5711C5" }}>Choose Us.</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-md">
              We combine technical expertise with a genuine commitment to our clients' success.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-black p-8 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6 text-white"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {reason.description}
                </p>
                <div
                  className="mt-6 w-0 h-0.5 transition-all duration-500 group-hover:w-8"
                  style={{ backgroundColor: "#5711C5" }}
                />
              </motion.div>
            )
          })}
          {/* Fill empty grid cell (5 items in 3-col grid = 1 empty) */}
          {Array.from({ length: 6 - reasons.length }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-black hidden md:block" />
          ))}
        </div>
      </div>
    </section>
  )
}
