import { Link } from "react-router-dom"
import { Shield, Scale, Database, Lock, Clock, Link2, Users, RefreshCw, Mail, ArrowLeft } from "lucide-react"

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: "We may collect the following information:",
    items: [
      "Full Name",
      "Email Address",
      "Phone Number",
      "Company Name",
      "Business Address",
      "Project Requirements",
      "Payment Information provided during transactions",
    ],
  },
  {
    icon: Scale,
    title: "How We Use Your Information",
    content: "We use the information collected to:",
    items: [
      "Provide our services",
      "Communicate regarding projects",
      "Prepare quotations and proposals",
      "Process payments",
      "Deliver customer support",
      "Improve our services",
      "Comply with legal obligations",
    ],
  },
  {
    icon: Lock,
    title: "Information Sharing",
    content:
      "We do not sell, rent, or trade personal information. Information may be shared only:",
    items: [
      "When required by law",
      "To protect legal rights",
      "With trusted service providers assisting in business operations",
    ],
  },
  {
    icon: Shield,
    title: "Data Security",
    content:
      "We implement reasonable administrative and technical measures to protect information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic storage or internet transmission is completely secure.",
  },
  {
    icon: Clock,
    title: "Data Retention",
    content:
      "Information will be retained only as long as necessary for business, legal, accounting, and contractual purposes.",
  },
  {
    icon: Link2,
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.",
  },
  {
    icon: Users,
    title: "Children's Privacy",
    content:
      "Our services are intended for individuals who are at least 18 years of age.",
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Updated versions will be posted on our website.",
  },
]

const contactDetails = [
  { icon: Mail, label: "Email", value: "webzcreations@zohomail.in", href: "mailto:webzcreations@zohomail.in" },
]

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="pt-12 pb-28 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: "#5711C5" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Legal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black dark:text-white leading-tight">
            Privacy <span style={{ color: "#5711C5" }}>Policy.</span>
          </h2>
          <p className="mt-4 text-base text-black/50 dark:text-white/50 leading-relaxed max-w-2xl">
            Last Updated: June 2026. WebZ Creations values the privacy of our
            clients, website visitors, and business partners. This Privacy Policy
            explains how we collect, use, store, and protect your information.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10">
          {sections.map((section, i) => {
            const Icon = section.icon
            return (
              <div
                key={i}
                className="bg-white dark:bg-black p-8 space-y-4"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-white"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-black dark:text-white">
                  {section.title}
                </h4>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-black/50 dark:text-white/50 flex items-start space-x-2"
                      >
                        <span
                          className="mt-2 block w-1 h-1 shrink-0 rounded-full"
                          style={{ backgroundColor: "#5711C5" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Section */}
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
              By using our services, you agree to this Privacy Policy.
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
