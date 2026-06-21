import { Link } from "react-router-dom"
import { FileText, CheckCircle, AlertTriangle, CreditCard, RefreshCw, Shield, Lock, Scale, Clock, Briefcase, Terminal, Ban, Globe, Edit, Mail, ArrowLeft } from "lucide-react"

const sections = [
  {
    icon: CheckCircle,
    title: "1. Acceptance of Terms",
    content: "By purchasing products, engaging services, or accessing materials provided by WebZ Creations, you agree to these Terms and Conditions.",
  },
  {
    icon: FileText,
    title: "2. Services and Digital Products",
    content: "WebZ Creations provides:",
    items: [
      "Website Development",
      "Search Engine Optimization (SEO)",
      "CRM Development",
      "Digital Marketing Services",
      "Website Templates",
      "CRM Templates",
      "Landing Page Templates",
      "Source Code Solutions",
      "Digital Products",
      "Other Technology-Related Products and Services",
    ],
    extra: "Certain products may be sold as ready-made digital products and are subject to additional licensing terms outlined below.",
  },
  {
    icon: CheckCircle,
    title: "3. Client Responsibilities",
    content: "Clients agree to:",
    items: [
      "Provide accurate information.",
      "Supply required content, materials, and approvals.",
      "Cooperate during project execution.",
      "Make payments according to agreed timelines.",
      "Use purchased products and services in compliance with applicable laws.",
    ],
  },
  {
    icon: Clock,
    title: "4. Project Timelines",
    content: "Project timelines are estimates and may vary depending on client responsiveness, scope changes, technical requirements, or unforeseen circumstances.",
  },
  {
    icon: CreditCard,
    title: "5. Payments",
    items: [
      "Payments are accepted through UPI and any additional payment methods approved by WebZ Creations in the future.",
      "Work may commence only after agreed payment milestones are completed.",
      "Delayed payments may result in project suspension or cancellation.",
      "Full ownership of deliverables is transferred only after complete payment is received.",
    ],
  },
  {
    icon: RefreshCw,
    title: "6. Refunds",
    content: "Service-related refund requests are reviewed on a case-by-case basis. Refund approval depends on:",
    items: [
      "Project stage",
      "Work completed",
      "Resources utilized",
      "Contractual commitments",
    ],
    extra: "Refunds are not guaranteed and remain at the sole discretion of WebZ Creations.",
  },
  {
    icon: Shield,
    title: "7. Digital Product License",
    content: "All templates, digital products, downloadable files, source code, designs, frameworks, and related materials sold by WebZ Creations are protected by copyright and intellectual property laws. Unless explicitly stated otherwise:",
    items: [
      "Customers receive a non-exclusive, non-transferable license to use the purchased product.",
      "Customers may customize or modify the product for their own business use.",
      "Customers may not resell, redistribute, sublicense, rent, share, copy for commercial resale, or publicly distribute purchased products without prior written permission from WebZ Creations.",
      "Intellectual property ownership remains with WebZ Creations unless ownership is expressly transferred through a written agreement.",
    ],
    extra: "Violation of these terms may result in license termination and legal action.",
  },
  {
    icon: Ban,
    title: "8. Digital Product Refunds",
    content: "Due to the nature of digital products, refunds are generally not available once:",
    items: [
      "The product has been delivered.",
      "Access has been granted.",
      "Download links have been provided.",
    ],
    extra: "Refunds may be considered only in the following situations: duplicate payment, failure to deliver the purchased product, or verified technical defects that cannot be reasonably resolved. Refund decisions remain at the sole discretion of WebZ Creations.",
  },
  {
    icon: Lock,
    title: "9. Intellectual Property",
    content: "For custom development projects, ownership of the completed deliverables will be transferred to the client upon full payment unless otherwise agreed in writing. WebZ Creations retains ownership of:",
    items: [
      "Proprietary frameworks",
      "Internal tools",
      "Templates",
      "Methodologies",
      "Reusable code libraries",
      "Pre-existing intellectual property",
    ],
  },
  {
    icon: Briefcase,
    title: "10. Portfolio Rights",
    content: "WebZ Creations reserves the right to display completed projects, designs, templates, and work samples in its portfolio, presentations, marketing materials, social media channels, and case studies unless otherwise agreed in writing.",
  },
  {
    icon: Globe,
    title: "11. Third-Party Services",
    content: "WebZ Creations shall not be responsible for issues arising from:",
    items: [
      "Hosting providers",
      "Domain registrars",
      "Payment providers",
      "Search engines",
      "Social media platforms",
      "Third-party software vendors",
      "External integrations",
    ],
  },
  {
    icon: AlertTriangle,
    title: "12. Limitation of Liability",
    content: "WebZ Creations shall not be liable for:",
    items: [
      "Loss of profits",
      "Business interruption",
      "Data loss",
      "Revenue loss",
      "Indirect, incidental, special, or consequential damages",
    ],
    extra: "The maximum liability of WebZ Creations shall not exceed the amount paid by the client for the specific service or product giving rise to the claim.",
  },
  {
    icon: Terminal,
    title: "13. Termination",
    content: "Either party may terminate a project or service through written notice. The client remains responsible for payment of all work completed up to the termination date. WebZ Creations reserves the right to terminate services for misuse, abuse, unlawful activity, or breach of these Terms.",
  },
  {
    icon: Scale,
    title: "14. Force Majeure",
    content: "WebZ Creations shall not be liable for delays or failure to perform obligations caused by events beyond reasonable control, including:",
    items: [
      "Natural disasters",
      "Government restrictions",
      "Internet outages",
      "Cyber incidents",
      "Power failures",
      "Pandemics",
      "Other unforeseen events",
    ],
  },
  {
    icon: Edit,
    title: "15. Changes to Terms",
    content: "WebZ Creations reserves the right to modify these Terms and Conditions at any time. Updated versions shall become effective upon publication on the official website.",
  },
]

const contactDetails = [
  { icon: Mail, label: "Email", value: "webzcreations@zohomail.in", href: "mailto:webzcreations@zohomail.in" },
]

export default function TermsConditions() {
  return (
    <section id="terms" className="pt-12 pb-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: "#5711C5" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Legal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black dark:text-white leading-tight">
            Terms <span style={{ color: "#5711C5" }}>and Conditions.</span>
          </h2>
          <p className="mt-4 text-base text-black/50 dark:text-white/50 leading-relaxed max-w-2xl">
            Last Updated: June 2026. These Terms and Conditions govern the use of services and products provided by WebZ Creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10">
          {sections.map((section, i) => {
            const Icon = section.icon
            return (
              <div key={i} className="bg-white dark:bg-black p-8 space-y-4">
                <div
                  className="w-10 h-10 flex items-center justify-center text-white"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-black dark:text-white">
                  {section.title}
                </h4>
                {section.content && (
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-sm text-black/50 dark:text-white/50 flex items-start space-x-2">
                        <span
                          className="mt-2 block w-1 h-1 shrink-0 rounded-full"
                          style={{ backgroundColor: "#5711C5" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.extra && (
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                    {section.extra}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 border border-black/10 dark:border-white/10 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: "#5711C5" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Contact Us
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-1">
                Company
              </p>
              <p className="text-sm font-semibold text-black dark:text-white">
                WebZ Creations
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-1">
                Location
              </p>
              <p className="text-sm font-semibold text-black dark:text-white">
                Erode, Tamil Nadu, India
              </p>
            </div>
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <p className="text-xs font-bold uppercase tracking-widest text-black/30 dark:text-white/30 mb-1">
                  {label}
                </p>
                <a
                  href={href}
                  className="text-sm font-semibold text-black dark:text-white hover:opacity-70 transition-opacity"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10">
            <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed">
              By purchasing products or engaging services from WebZ Creations, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 rounded-md"
            style={{ backgroundColor: "#5711C5" }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
