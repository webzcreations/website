import { motion } from "framer-motion"
import { ShieldCheck, Zap, Users, Heart } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Vanguard Innovation",
    description: "We skip stale templates to construct bleeding-edge websites. We track the latest React and CSS advancements to keep your site fresh.",
  },
  {
    icon: ShieldCheck,
    title: "Unyielding Reliability",
    description: "We build secure databases, clean types, and run rigorous build tests to guarantee 100% operational safety and uptime.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We pair closely with your product teams, aligning designs with your core marketing goals to maximize conversions.",
  },
]

const team = [
  {
    name: "Ethan Vance",
    role: "Founder & Creative Director",
    initials: "EV",
    bio: "Ex-agency director specializing in high-performance web systems and digital branding.",
  },
  {
    name: "Maya Lin",
    role: "Lead Full-Stack Architect",
    initials: "ML",
    bio: "React and Python specialist focused on custom CRM setups and lightning-fast APIs.",
  },
  {
    name: "Damon Cole",
    role: "Head of UI/UX Design",
    initials: "DC",
    bio: "Visual designer dedicated to minimalist UI systems and micro-interactions.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px" style={{ backgroundColor: "#5711C5" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Empowering Brands <br />
              Through Elite <br />
              <span style={{ color: "#5711C5" }}>Engineering.</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-md">
              At webZ Creations, we construct digital spaces that combine premium aesthetic design with top-tier performance. We transform complex user flows into simple, engaging, and high-converting journeys.
            </p>
          </div>

          {/* Mission Card */}
          <div className="border border-white/10 p-8 space-y-5">
            <div
              className="w-10 h-10 flex items-center justify-center text-white"
              style={{ backgroundColor: "#5711C5" }}
            >
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-base text-white/50 leading-relaxed">
              To build modern, ultra-responsive, and optimized systems for ambitious companies. We believe every pixel must contribute to brand authority, loading speeds, and operational success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-10">Core Values</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-black p-8 space-y-4"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center text-white"
                    style={{ backgroundColor: "#5711C5" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{v.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{v.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-10">The Team</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-black p-8 space-y-4"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center text-xl font-black text-white"
                  style={{ backgroundColor: "#5711C5" }}
                >
                  {member.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{member.name}</h4>
                  <p className="text-xs font-semibold text-white/40 mt-0.5">{member.role}</p>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
