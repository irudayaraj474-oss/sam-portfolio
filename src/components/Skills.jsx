import { motion } from "framer-motion";
import { 
  FaSlidersH, 
  FaCheckCircle 
} from "react-icons/fa";

export default function Skills() {
  const softwares = [
    {
      id: "premiere",
      name: "Adobe Premiere Pro",
      category: "VIDEO EDITING",
      level: "Expert",
      levelBadgeClass: "bg-cyan-950/80 border-cyan-400/40 text-cyan-300 shadow-[0_0_14px_rgba(56,189,248,0.25)]",
      barGradient: "from-cyan-400 via-sky-400 to-blue-600",
      barWidth: "98%",
      dotColor: "bg-cyan-400 shadow-[0_0_8px_#38bdf8]",
      hoverBorder: "hover:border-cyan-400/35 hover:shadow-[0_0_32px_rgba(56,189,248,0.24)]",
      isHero: true,
      features: [
        "Multi-Cam Editing",
        "Speed Ramping & Time Remapping",
        "Dynamic Link Workflow",
        "Proxy Editing (4K)"
      ],
      bottomLabel: "INDUSTRY READY",
      proofText: "Watch Demo",
      proofIcon: "▶",
      proofLink: "#projects"
    },
    {
      id: "after-effects",
      name: "Adobe After Effects",
      category: "MOTION GRAPHICS",
      level: "Advanced",
      levelBadgeClass: "bg-blue-950/80 border-blue-400/40 text-blue-300 shadow-[0_0_14px_rgba(96,165,250,0.2)]",
      barGradient: "from-blue-500 via-indigo-500 to-cyan-400",
      barWidth: "94%",
      dotColor: "bg-blue-400 shadow-[0_0_8px_#60a5fa]",
      hoverBorder: "hover:border-blue-400/35 hover:shadow-[0_0_32px_rgba(96,165,250,0.22)]",
      isHero: false,
      features: [
        "Kinetic Typography",
        "Motion Graphics",
        "Camera Tracking",
        "Logo Animations"
      ],
      bottomLabel: "INDUSTRY READY",
      proofText: "View Motion",
      proofIcon: "▶",
      proofLink: "#projects"
    },
    {
      id: "davinci",
      name: "DaVinci Resolve Studio",
      category: "COLOR GRADING",
      level: "Advanced",
      levelBadgeClass: "bg-amber-950/80 border-orange-400/40 text-amber-300 shadow-[0_0_14px_rgba(251,146,60,0.2)]",
      barGradient: "from-amber-400 via-orange-500 to-rose-600",
      barWidth: "95%",
      dotColor: "bg-orange-400 shadow-[0_0_8px_#fb923c]",
      hoverBorder: "hover:border-orange-400/35 hover:shadow-[0_0_32px_rgba(251,146,60,0.22)]",
      isHero: false,
      features: [
        "Node-Based Color Grading",
        "Color Space Transform",
        "Film Print Look",
        "Skin Tone Balancing"
      ],
      bottomLabel: "INDUSTRY READY",
      proofText: "Before / After",
      proofIcon: "◐",
      proofLink: "#projects"
    },
    {
      id: "capcut",
      name: "CapCut Pro & Short-Form",
      category: "SHORT-FORM EDITING",
      level: "Professional",
      levelBadgeClass: "bg-sky-950/80 border-sky-400/40 text-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.2)]",
      barGradient: "from-cyan-400 via-sky-500 to-blue-600",
      barWidth: "96%",
      dotColor: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
      hoverBorder: "hover:border-sky-400/35 hover:shadow-[0_0_32px_rgba(56,189,248,0.22)]",
      isHero: false,
      features: [
        "Viral Hook Editing",
        "Animated Captions",
        "Beat-Synced Editing",
        "Reels Optimization"
      ],
      bottomLabel: "INDUSTRY READY",
      proofText: "Watch Reel",
      proofIcon: "▶",
      proofLink: "#projects"
    },
    {
      id: "audio",
      name: "Adobe Audition & Fairlight",
      category: "AUDIO EDITING",
      level: "Professional",
      levelBadgeClass: "bg-emerald-950/80 border-emerald-400/40 text-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.2)]",
      barGradient: "from-emerald-400 via-teal-400 to-cyan-500",
      barWidth: "92%",
      dotColor: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
      hoverBorder: "hover:border-emerald-400/35 hover:shadow-[0_0_32px_rgba(52,211,153,0.22)]",
      isHero: false,
      features: [
        "Noise Reduction",
        "Vocal Enhancement",
        "Dialogue Mixing",
        "Stereo Balancing"
      ],
      bottomLabel: "INDUSTRY READY",
      proofText: "Listen Mix",
      proofIcon: "♫",
      proofLink: "#timeline"
    },
    {
      id: "photoshop",
      name: "Photoshop & Illustrator",
      category: "CREATIVE DESIGN",
      level: "Advanced",
      levelBadgeClass: "bg-amber-950/70 border-amber-400/50 text-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.25)]",
      barGradient: "from-sky-400 via-blue-500 to-amber-400",
      barWidth: "93%",
      dotColor: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
      hoverBorder: "hover:border-amber-400/40 hover:shadow-[0_0_32px_rgba(251,191,36,0.25)]",
      isHero: false,
      isLuxury: true,
      features: [
        "Premium Brand Posters",
        "Luxury Jewellery Campaigns",
        "Social Media Creatives",
        "Thumbnail Design"
      ],
      bottomLabel: "INDUSTRY READY",
      proofText: "View Posters",
      proofIcon: "⊞",
      proofLink: "#gallery"
    }
  ];

  const competencies = [
    "J-Cut & L-Cut Narrative Pacing",
    "First 3-Second Hook Retention",
    "Pattern Interrupts & Zoom Pulses",
    "Sound FX Layering & Ducking",
    "Aspect Ratio Adaptation (16:9 ⇄ 9:16)",
    "Sony S-Log3 / Canon C-Log Grading",
    "Proxy 4K High-Speed Offline Editing",
    "YouTube Click-Through Thumbnail Design"
  ];

  return (
    <section
      id="skills"
      style={{ backgroundColor: "#050816" }}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-100 font-sans"
    >
      {/* Ambient Glows: Cyan Tech & Soft Luxury Gold for SRM Gold aesthetic */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-sky-400/25 text-sky-300 text-xs font-mono font-semibold mb-4 shadow-[0_0_16px_rgba(56,189,248,0.15)] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>// TECHNICAL STACK & ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight"
          >
            Mastered Software & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Technical Capabilities
            </span>
          </motion.h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            From industry-standard non-linear suites to surgical color science, luxury brand art direction, and high-retention audio engineering.
          </p>
        </div>

        {/* 3×2 Custom Glassmorphism Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwares.map((sw, idx) => (
            <motion.div
              key={sw.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              style={{
                backgroundColor: "rgba(15, 23, 42, 0.45)",
                boxShadow: "0 0 24px rgba(56, 189, 248, 0.12)"
              }}
              className={`group relative p-6 sm:p-7 rounded-[24px] border border-[rgba(56,189,248,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${sw.hoverBorder}`}
            >
              {/* Subtle Luxury Gold/Cyan Corner Accent Glow for Hero or Luxury Cards */}
              {sw.isHero && (
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-400/10 via-transparent to-transparent rounded-tr-[24px] pointer-events-none"></div>
              )}
              {sw.isLuxury && (
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-amber-400/15 via-transparent to-transparent rounded-tr-[24px] pointer-events-none"></div>
              )}

              <div>
                {/* Header: Category & Skill Level Pill */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-mono tracking-wider uppercase text-slate-400 font-semibold">
                      {sw.category}
                    </span>
                    <h3 className="text-xl sm:text-[28px] font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {sw.name}
                    </h3>
                  </div>

                  {/* Level Pill */}
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide border backdrop-blur-md shrink-0 transition-transform group-hover:scale-105 ${sw.levelBadgeClass}`}>
                    {sw.level}
                  </span>
                </div>

                {/* Shimmering Progress Bar */}
                <div className="relative w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mb-6">
                  <div
                    className={`h-full bg-gradient-to-r ${sw.barGradient} rounded-full relative overflow-hidden`}
                    style={{ width: sw.barWidth }}
                  >
                    {/* Hover Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Bullets List (15px font hierarchy) */}
                <ul className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-300 font-normal">
                  {sw.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${sw.dotColor}`}></span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Industry Ready Label & Clickable Proof Button */}
              <div className="mt-7 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                {/* Bottom Label */}
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold tracking-wide text-slate-300">{sw.bottomLabel}</span>
                </div>

                {/* Interactive Proof Button */}
                <a
                  href={sw.proofLink}
                  className="group/btn inline-flex items-center gap-1.5 text-[12px] font-mono font-semibold text-cyan-400 hover:text-cyan-200 transition-colors py-1 relative"
                >
                  <span className="relative">
                    {sw.proofText}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-sky-300 group-hover/btn:w-full transition-all duration-300"></span>
                  </span>
                  <span className="text-[10px] transform group-hover/btn:translate-x-1 transition-transform duration-300 text-cyan-400 group-hover/btn:text-cyan-200">
                    {sw.proofIcon}
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EDITING WORKFLOW Disciplines & Competencies Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.45)",
            boxShadow: "0 0 24px rgba(56, 189, 248, 0.12)"
          }}
          className="mt-14 p-6 sm:p-8 rounded-[24px] border border-[rgba(56,189,248,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-5 text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase">
            <FaSlidersH className="text-cyan-400" />
            <span>EDITING WORKFLOW</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/90 animate-pulse ml-1" title="Luxury Grade Pipeline"></span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {competencies.map((comp, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-slate-950/70 border border-slate-700/60 hover:border-cyan-400/50 text-xs sm:text-[13px] text-slate-200 font-medium shadow-sm hover:shadow-[0_0_16px_rgba(56,189,248,0.18)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 cursor-default"
              >
                <FaCheckCircle className="text-cyan-400 text-[10px]" />
                {comp}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}