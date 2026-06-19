import { motion } from "framer-motion"
import { Globe, Search, BarChart3, Smartphone, Settings, Laptop } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Stunning, high-performance websites engineered with React and Next.js. Optimized for speed, SEO, and visual impact.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Advanced search campaigns that rank your site higher, drive organic traffic, and capture high-intent inquiries.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Multi-channel marketing plans from social campaigns to PPC management designed to maximize ROI.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native-feel iOS and Android mobile apps crafted using React Native, delivering premium UI and hardware efficiency.",
  },
  {
    icon: Settings,
    title: "CRM Development",
    description: "Bespoke CRM software that aligns customer records, automates workflows, and scales management speed.",
  },
  {
    icon: Laptop,
    title: "Consulting & Strategy",
    description: "Full digital roadmap audits. Discover scaling bottlenecks, architect secure clouds, and build design systems.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: "#5711C5" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              What We Do
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black dark:text-white leading-tight">
              Services Built for <br />
              <span style={{ color: "#5711C5" }}>Real Results.</span>
            </h2>
            <p className="text-base text-black/50 dark:text-white/50 leading-relaxed max-w-md">
              From custom product launches to search ranking upgrades and operational automations — we deliver engineered quality.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 dark:bg-white/10">
          {services.map((service, index) => {
            const Icon = service.icon
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
                  {service.title}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  {service.description}
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
