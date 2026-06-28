import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Globe, Search, Smartphone, Settings, Palette } from "lucide-react"
import SEOHead from "../components/SEOHead"
import Footer from "../components/Footer"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "We build stunning, high-performance websites using modern frameworks like React and Next.js. Every site is engineered for speed, SEO, and visual impact — ensuring your brand stands out and loads in an instant.",
    features: [
      "Custom React / Next.js development",
      "Responsive & mobile-first design",
      "Performance optimization & Core Web Vitals",
      "CMS integration (Sanity, Strapi, Contentful)",
      "Ongoing maintenance & hosting",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Our SEO strategies go beyond keywords. We audit your entire digital presence, optimize technical infrastructure, and build content plans that drive sustainable organic growth.",
    features: [
      "Technical SEO audits & fixes",
      "On-page & off-page optimization",
      "Keyword research & content strategy",
      "Local SEO & Google Business optimization",
      "Monthly performance reporting",
    ],
  },
  {
    icon: Smartphone,
    title: "App Engineering",
    description: "From concept to launch, we craft native-feel mobile applications using React Native. Your users get a premium experience on both iOS and Android from a single codebase.",
    features: [
      "Cross-platform React Native development",
      "Native module integration",
      "Push notifications & real-time features",
      "App Store & Play Store deployment",
      "Post-launch support & updates",
    ],
  },
  {
    icon: Settings,
    title: "CRM Automations",
    description: "We design and build custom CRM systems that align with your exact workflows, automate repetitive tasks, and give your team full visibility into leads, customers, and operations.",
    features: [
      "Bespoke CRM architecture",
      "Sales pipeline & lead tracking",
      "Workflow automation & triggers",
      "Analytics dashboards & reports",
      "Third-party integrations (email, Slack, etc.)",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Strategy",
    description: "Great design is invisible. We research, prototype, and test every interaction to create intuitive interfaces that guide users effortlessly toward their goals.",
    features: [
      "User research & persona development",
      "Wireframing & interactive prototyping",
      "Visual design & design systems",
      "Usability testing & iteration",
      "Accessibility compliance (WCAG)",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Services"
        description="WebZ Creations offers end-to-end digital services: Website Development, SEO Optimization, App Engineering, CRM Automations, and UI/UX Strategy. Tailored solutions to grow your business."
        keywords="web development services, SEO services, app development services, CRM automation, UI UX design agency, digital agency services"
      />
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-sm font-semibold text-black/60 dark:text-white/60 hover:text-[#5711C5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link to="/">
            <img src="/logoWithBackground.svg" alt="webZ Creations" className="h-10 w-auto" />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                What We Deliver
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Our <span style={{ color: "#5711C5" }}>Services.</span>
            </h1>
            <p className="mt-6 text-base text-white/50 leading-relaxed max-w-2xl">
              From concept to launch — we provide end-to-end digital services that help businesses grow,
              automate, and stand out. Each service is tailored to your specific goals and delivered with
              engineering precision.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-28 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 text-white"
                    style={{ backgroundColor: "#5711C5" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base text-black/50 dark:text-white/50 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "#5711C5" }}
                        />
                        <span className="text-sm text-black/70 dark:text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="aspect-[4/3] w-full flex items-center justify-center border border-black/10 dark:border-white/10"
                    style={{ backgroundColor: "#5711C5" }}
                  >
                    <Icon className="h-24 w-24 text-white/30" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            Ready to Get <span style={{ color: "#5711C5" }}>Started?</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-lg mx-auto mb-8">
            Tell us about your project and we'll put together a custom proposal within 48 hours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-4 text-sm font-semibold text-white transition-opacity"
            style={{ backgroundColor: "#5711C5" }}
          >
            <span>Start a Project</span>
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
