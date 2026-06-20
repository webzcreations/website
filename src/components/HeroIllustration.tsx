export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="white" fillOpacity="0.06" />
        </pattern>
        <linearGradient id="glow-bg" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#5711C5" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#5711C5" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="520" height="480" fill="url(#dot-grid)" />

      {/* Glow */}
      <ellipse cx="260" cy="220" rx="200" ry="180" fill="url(#glow-bg)" />

      {/* Decorative rings */}
      <circle cx="260" cy="220" r="150" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
      <circle cx="260" cy="220" r="120" stroke="#5711C5" strokeOpacity="0.1" strokeWidth="1.5" />
      <circle cx="260" cy="220" r="90" stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />

      {/* Main browser card */}
      <g transform="translate(40, 60)">
        <rect x="0" y="0" width="280" height="200" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="0" y="0" width="280" height="34" rx="6" fill="white" fillOpacity="0.03" />
        <rect x="0" y="17" width="280" height="17" fill="white" fillOpacity="0.03" />
        <circle cx="16" cy="17" r="3.5" fill="white" fillOpacity="0.12" />
        <circle cx="30" cy="17" r="3.5" fill="white" fillOpacity="0.12" />
        <circle cx="44" cy="17" r="3.5" fill="white" fillOpacity="0.12" />
        <rect x="120" y="13" width="60" height="8" rx="4" fill="white" fillOpacity="0.06" />

        {/* Sidebar */}
        <rect x="12" y="48" width="44" height="140" rx="4" fill="white" fillOpacity="0.03" />
        <rect x="20" y="58" width="28" height="5" rx="2" fill="white" fillOpacity="0.08" />
        <rect x="20" y="70" width="22" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
        <rect x="20" y="82" width="26" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
        <rect x="20" y="102" width="28" height="5" rx="2" fill="white" fillOpacity="0.08" />
        <rect x="20" y="114" width="22" height="3" rx="1.5" fill="white" fillOpacity="0.04" />
        <rect x="20" y="126" width="26" height="3" rx="1.5" fill="white" fillOpacity="0.04" />

        {/* Main panel */}
        <rect x="64" y="48" width="204" height="14" rx="3" fill="#5711C5" fillOpacity="0.35" />
        <rect x="64" y="68" width="180" height="4" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="64" y="78" width="150" height="4" rx="2" fill="white" fillOpacity="0.06" />

        {/* Chart area */}
        <rect x="64" y="92" width="204" height="96" rx="4" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />

        {/* Bar chart bars */}
        <rect x="76" y="160" width="14" height="20" rx="2" fill="#5711C5" fillOpacity="0.5" />
        <rect x="96" y="144" width="14" height="36" rx="2" fill="#5711C5" fillOpacity="0.35" />
        <rect x="116" y="152" width="14" height="28" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="136" y="136" width="14" height="44" rx="2" fill="#5711C5" fillOpacity="0.5" />
        <rect x="156" y="148" width="14" height="32" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="176" y="120" width="14" height="60" rx="2" fill="#5711C5" fillOpacity="0.35" />
        <rect x="196" y="155" width="14" height="25" rx="2" fill="white" fillOpacity="0.08" />
        <rect x="216" y="140" width="14" height="40" rx="2" fill="#5711C5" fillOpacity="0.5" />
        <rect x="236" y="158" width="14" height="22" rx="2" fill="white" fillOpacity="0.08" />
        <rect x="256" y="130" width="12" height="50" rx="2" fill="#5711C5" fillOpacity="0.35" />

        {/* X-axis line */}
        <line x1="72" y1="178" x2="272" y2="178" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" />
      </g>

      {/* Floating card - top right */}
      <g transform="translate(330, 100) rotate(3)">
        <rect x="0" y="0" width="160" height="110" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="20" cy="20" r="10" fill="#5711C5" fillOpacity="0.3" />
        <rect x="38" y="14" width="70" height="5" rx="2" fill="white" fillOpacity="0.12" />
        <rect x="38" y="24" width="45" height="3" rx="1.5" fill="white" fillOpacity="0.06" />
        <rect x="14" y="44" width="132" height="4" rx="2" fill="white" fillOpacity="0.07" />
        <rect x="14" y="54" width="110" height="4" rx="2" fill="white" fillOpacity="0.05" />
        <rect x="14" y="64" width="90" height="4" rx="2" fill="white" fillOpacity="0.05" />
        <rect x="14" y="82" width="60" height="18" rx="3" fill="#5711C5" fillOpacity="0.2" />
      </g>

      {/* Floating badge - bottom left */}
      <g transform="translate(60, 340)">
        <rect x="0" y="0" width="130" height="38" rx="4" fill="#5711C5" fillOpacity="0.15" stroke="#5711C5" strokeOpacity="0.25" strokeWidth="0.5" />
        <circle cx="19" cy="19" r="7" fill="#5711C5" />
        <rect x="32" y="14" width="55" height="4" rx="2" fill="white" fillOpacity="0.35" />
        <rect x="32" y="22" width="40" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
      </g>

      {/* Mini card - right side */}
      <g transform="translate(330, 310) rotate(-2)">
        <rect x="0" y="0" width="130" height="80" rx="6" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
        <rect x="14" y="14" width="50" height="8" rx="2" fill="#5711C5" fillOpacity="0.25" />
        <rect x="14" y="30" width="102" height="3" rx="1.5" fill="white" fillOpacity="0.07" />
        <rect x="14" y="38" width="80" height="3" rx="1.5" fill="white" fillOpacity="0.05" />
        <rect x="14" y="54" width="36" height="16" rx="2" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" />
        <rect x="56" y="54" width="36" height="16" rx="2" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" />
      </g>

      {/* Connection curves */}
      <path d="M 280 200 C 310 200, 320 180, 330 160" stroke="#5711C5" strokeOpacity="0.12" strokeWidth="1" fill="none" strokeDasharray="4 3" />
      <path d="M 280 240 C 300 280, 310 300, 320 330" stroke="white" strokeOpacity="0.05" strokeWidth="1" fill="none" strokeDasharray="4 3" />
      <path d="M 220 250 C 240 270, 250 290, 250 340" stroke="#5711C5" strokeOpacity="0.08" strokeWidth="1" fill="none" strokeDasharray="4 3" />

      {/* Decorative dots */}
      <circle cx="460" cy="60" r="3" fill="#5711C5" fillOpacity="0.35" />
      <circle cx="475" cy="75" r="1.5" fill="white" fillOpacity="0.12" />
      <circle cx="470" cy="370" r="4" fill="white" fillOpacity="0.04" />
      <circle cx="30" cy="50" r="2" fill="white" fillOpacity="0.08" />
      <circle cx="480" cy="240" r="2" fill="#5711C5" fillOpacity="0.25" />
      <circle cx="30" cy="420" r="3" fill="white" fillOpacity="0.05" />
      <circle cx="490" cy="440" r="2" fill="#5711C5" fillOpacity="0.2" />

      {/* Code bracket decoration */}
      <text x="460" y="440" fill="white" fillOpacity="0.04" fontFamily="monospace" fontSize="28" fontWeight="bold">&lt;/&gt;</text>
    </svg>
  )
}
