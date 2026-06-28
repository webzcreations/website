import { Link } from "react-router-dom"
import { ArrowLeft, Globe } from "lucide-react"
import SEOHead from "../components/SEOHead"
import Footer from "../components/Footer"

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <SEOHead
        title="Website Development"
        description="WebZ Creations builds stunning, high-performance websites using React and Next.js. Custom development, responsive design, SEO optimization, and CMS integration."
        keywords="website development, React development, Next.js agency, custom website, responsive web design, CMS integration, web development company"
      />
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/services"
            className="flex items-center space-x-2 text-sm font-semibold text-black/60 dark:text-white/60 hover:text-[#5711C5] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
          <Link to="/">
            <img src="/logoWithBackground.svg" alt="webZ Creations" className="h-10 w-auto" />
          </Link>
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
              Website <span style={{ color: "#5711C5" }}>Development.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-white" style={{ backgroundColor: "#5711C5" }}>
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white leading-tight mb-4">
                High-Performance Websites Built for Impact
              </h2>
              <p className="text-base text-black/50 dark:text-white/50 leading-relaxed mb-8">
                We build stunning, high-performance websites using modern frameworks like React and Next.js.
                Every site is engineered for speed, SEO, and visual impact — ensuring your brand stands out
                and loads in an instant.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom React / Next.js development",
                  "Responsive & mobile-first design",
                  "Performance optimization & Core Web Vitals",
                  "CMS integration (Sanity, Strapi, Contentful)",
                  "Ongoing maintenance & hosting",
                ].map((f) => (
                  <li key={f} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#5711C5" }} />
                    <span className="text-sm text-black/70 dark:text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] w-full flex items-center justify-center border border-black/10 dark:border-white/10" style={{ backgroundColor: "#5711C5" }}>
              <Globe className="h-24 w-24 text-white/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            Need a Website? <span style={{ color: "#5711C5" }}>Let's Talk.</span>
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
