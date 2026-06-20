import { motion } from "framer-motion"

const stars = Array.from({ length: 60 }, () => ({
  x: Math.random() * 600,
  y: Math.random() * 600,
  r: Math.random() * 1.2 + 0.3,
  d: Math.random() * 4,
}))

export default function HeroOrbit() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 600 600" className="w-full h-full">
        <defs>
          <radialGradient id="planet-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5711C5" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#5711C5" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#5711C5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planet-grad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#7B3FEA" />
            <stop offset="50%" stopColor="#5711C5" />
            <stop offset="100%" stopColor="#2D0A66" />
          </radialGradient>
          <radialGradient id="planet-highlight" cx="35%" cy="30%" r="30%">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Stars */}
        {stars.map((s, i) => (
          <motion.circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="white"
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 2 + s.d, repeat: Infinity, ease: "easeInOut", delay: s.d * 0.5 }}
          />
        ))}

        {/* Planet glow */}
        <circle cx="300" cy="300" r="130" fill="url(#planet-glow)" />

        {/* Orbit ring 1 - horizontal tilt */}
        <ellipse cx="300" cy="300" rx="180" ry="55" transform="rotate(-25 300 300)" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="5 5" />

        {/* Orbit ring 2 - vertical tilt */}
        <ellipse cx="300" cy="300" rx="155" ry="48" transform="rotate(30 300 300)" fill="none" stroke="#5711C5" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 6" />

        {/* Infinity path */}
        <path
          d="M 210 300 C 210 240, 260 240, 300 300 C 340 360, 390 360, 390 300 C 390 240, 340 240, 300 300 C 260 360, 210 360, 210 300"
          fill="none"
          stroke="#5711C5"
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        {/* Orbital ring 3 - outer */}
        <ellipse cx="300" cy="300" rx="220" ry="65" transform="rotate(-10 300 300)" fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="0.5" />

        {/* Planet base */}
        <circle cx="300" cy="300" r="50" fill="url(#planet-grad)" />
        <circle cx="300" cy="300" r="50" fill="url(#planet-highlight)" />

        {/* Continents */}
        <g fill="#2D0A66" opacity="0.5">
          <path d="M 275 275 Q 285 265 295 272 Q 300 280 290 290 Q 278 288 275 275 Z" />
          <path d="M 310 285 Q 325 275 330 290 Q 332 310 320 315 Q 308 312 310 285 Z" />
          <path d="M 280 315 Q 295 305 305 318 Q 300 335 285 330 Q 275 325 280 315 Z" />
        </g>
        <g fill="#7B3FEA" opacity="0.3">
          <path d="M 295 270 Q 305 262 315 270 Q 312 280 300 278 Q 292 278 295 270 Z" />
          <path d="M 270 295 Q 280 288 288 298 Q 282 308 270 305 Q 265 300 270 295 Z" />
          <path d="M 318 305 Q 330 298 335 310 Q 328 322 316 318 Q 312 310 318 305 Z" />
        </g>

        {/* Planet surface dots (cities) */}
        <circle cx="280" cy="282" r="1.5" fill="white" opacity="0.4" />
        <circle cx="320" cy="298" r="1.5" fill="white" opacity="0.3" />
        <circle cx="295" cy="325" r="1" fill="white" opacity="0.35" />
        <circle cx="312" cy="280" r="1" fill="white" opacity="0.25" />

        {/* Orbiting particle 1 - ring 1 clockwise */}
        <motion.g
          style={{ transformOrigin: "300px 300px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <g transform="rotate(-25 300 300)">
            <circle cx="480" cy="300" r="3" fill="#5711C5" opacity="0.8" />
            <circle cx="480" cy="300" r="7" fill="#5711C5" opacity="0.15" />
          </g>
        </motion.g>

        {/* Orbiting particle 2 - ring 1 counter-clockwise */}
        <motion.g
          style={{ transformOrigin: "300px 300px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <g transform="rotate(-25 300 300)">
            <circle cx="120" cy="300" r="2" fill="white" opacity="0.6" />
            <circle cx="120" cy="300" r="5" fill="white" opacity="0.08" />
          </g>
        </motion.g>

        {/* Orbiting particle 3 - ring 2 */}
        <motion.g
          style={{ transformOrigin: "300px 300px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <g transform="rotate(30 300 300)">
            <circle cx="455" cy="300" r="2.5" fill="#5711C5" opacity="0.6" />
            <circle cx="455" cy="300" r="6" fill="#5711C5" opacity="0.1" />
          </g>
        </motion.g>

        {/* Orbiting particle 4 - outer ring */}
        <motion.g
          style={{ transformOrigin: "300px 300px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <g transform="rotate(-10 300 300)">
            <circle cx="520" cy="300" r="1.5" fill="white" opacity="0.35" />
          </g>
        </motion.g>

        {/* Infinity orbit - particle following figure-8 */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle cx="300" cy="230" r="3" fill="#5711C5" opacity="0.9" />
          <circle cx="300" cy="230" r="8" fill="#5711C5" opacity="0.12" />
        </motion.g>

        {/* Shooting star */}
        <motion.g
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 0.8, 0], x: [-100, 200], y: [-50, 100] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 7, ease: "easeOut" }}
        >
          <line x1="0" y1="0" x2="-40" y2="20" stroke="white" strokeOpacity="0.005" strokeWidth="1" />
          <line x1="0" y1="0" x2="-20" y2="10" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.5" fill="white" opacity="0.8" />
        </motion.g>
      </svg>
    </div>
  )
}
