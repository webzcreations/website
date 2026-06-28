import { Link } from "react-router-dom"
import { ArrowLeft, Settings } from "lucide-react"
import SEOHead from "../components/SEOHead"
import Footer from "../components/Footer"

export default function CRMAutomationsPage() {
  return (
    <>
      <SEOHead
        title="CRM Automations"
        description="WebZ Creations builds custom CRM systems with workflow automation, sales pipeline tracking, analytics dashboards, and third-party integrations to streamline your operations."
        keywords="CRM development, CRM automation, custom CRM, sales pipeline, workflow automation, lead tracking, CRM software"
      />
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/services" className="flex items-center space-x-2 text-sm font-semibold text-black/60 dark:text-white/60 hover:text-[#5711C5] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
          <Link to="/"><img src="/logoWithBackground.svg" alt="webZ Creations" className="h-10 w-auto" /></Link>
        </div>
      </div>

      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Service</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              CRM <span style={{ color: "#5711C5" }}>Automations.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-white" style={{ backgroundColor: "#5711C5" }}>
                <Settings className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white leading-tight mb-4">
                Automate Workflows. Close More Deals.
              </h2>
              <p className="text-base text-black/50 dark:text-white/50 leading-relaxed mb-8">
                We design and build custom CRM systems that align with your exact workflows, automate
                repetitive tasks, and give your team full visibility into leads, customers, and operations.
              </p>
              <ul className="space-y-3">
                {[
                  "Bespoke CRM architecture",
                  "Sales pipeline & lead tracking",
                  "Workflow automation & triggers",
                  "Analytics dashboards & reports",
                  "Third-party integrations (email, Slack, etc.)",
                ].map((f) => (
                  <li key={f} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#5711C5" }} />
                    <span className="text-sm text-black/70 dark:text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] w-full flex items-center justify-center border border-black/10 dark:border-white/10" style={{ backgroundColor: "#5711C5" }}>
              <Settings className="h-24 w-24 text-white/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            Streamline Your Ops. <span style={{ color: "#5711C5" }}>Automate Now.</span>
          </h2>
          <Link to="/" className="inline-flex px-8 py-4 text-sm font-semibold text-white" style={{ backgroundColor: "#5711C5" }}>
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
