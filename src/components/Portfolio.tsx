import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X } from "lucide-react"

import cryptoProjectImg from "../assets/portfolio_crypto.png"
import crmProjectImg from "../assets/portfolio_crm.png"
import saasProjectImg from "../assets/hero_dashboard.png"

const categories = ["All", "Web App", "CRM Systems", "Branding"]

const projects = [
  {
    id: 1,
    title: "Apex Crypto Wallet",
    category: "Web App",
    image: cryptoProjectImg,
    description: "A secure Web3 asset management dashboard with real-time price trackers and instant swap utilities.",
    longDescription: "Apex Crypto Wallet is an enterprise-grade digital asset tracker. It synchronizes across major EVM blockchain networks to deliver instant portfolio valuations, swap suggestions, and low-latency line graphs.",
    client: "Apex Blockchain Labs",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Ethers.js", "Chart.js"],
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Zeta CRM & Analytics",
    category: "CRM Systems",
    image: crmProjectImg,
    description: "Custom corporate operations dashboard built to automate lead management and log marketing analytics.",
    longDescription: "Zeta CRM integrates marketing metrics, lead pipelines, and service logs into a cohesive administrative interface. It reduces operations lookup latency by 45% and includes drag-and-drop workflow automations.",
    client: "Zeta Logistics Inc.",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Recharts"],
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Aether SaaS Portal",
    category: "Branding",
    image: saasProjectImg,
    description: "Full brand layout and interface system for a collaborative engineering platform.",
    longDescription: "Aether is a visual-first project tracking space designed for architects. We built their global design system, including responsive interactive mockups, custom icons, typography hierarchy, and a dark-mode-first collaborative portal.",
    client: "Aether Systems",
    year: "2026",
    techStack: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Radix UI"],
    liveUrl: "#",
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Our Work
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Selected <span style={{ color: "#5711C5" }}>Projects.</span>
            </h2>
            <p className="text-base text-white/40 leading-relaxed max-w-md">
              A curated selection of our digital builds — from custom applications to workflow integrations.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="text-xs font-semibold px-4 py-2 transition-all"
                style={
                  selectedCategory === cat
                    ? { backgroundColor: "#5711C5", color: "#fff" }
                    : { backgroundColor: "transparent", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.15)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-black group cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold border border-white px-4 py-2">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5711C5" }}>
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-black border border-black/20 dark:border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#5711C5" }}>
                    {activeProject.category}
                  </p>
                  <h3 className="text-2xl font-black text-black dark:text-white">{activeProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-black/40 dark:text-white/40 p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image */}
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-auto max-h-72 object-cover object-top mb-8"
              />

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-black/40 dark:text-white/40">Overview</h4>
                  <p className="text-base text-black/80 dark:text-white/80 leading-relaxed">{activeProject.longDescription}</p>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-1">Client</p>
                    <p className="text-sm font-bold text-black dark:text-white">{activeProject.client}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-1">Year</p>
                    <p className="text-sm font-bold text-black dark:text-white">{activeProject.year}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold px-2 py-0.5 border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={activeProject.liveUrl}
                    className="flex items-center space-x-2 text-sm font-semibold text-white px-4 py-2 w-full justify-center"
                    style={{ backgroundColor: "#5711C5" }}
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
