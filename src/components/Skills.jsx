import { motion } from "framer-motion";
import { 
  FaSlidersH, 
  FaCheckCircle 
} from "react-icons/fa";

export default function Skills() {
  const softwares = [
    {
      name: "Adobe Premiere Pro",
      tag: "Primary NLE",
      level: "98%",
      color: "from-purple-600 to-indigo-600",
      accent: "text-purple-600",
      dot: "bg-purple-600",
      features: [
        "Advanced Multi-Cam Sync",
        "Dynamic Link with AE",
        "Speed Ramps & Time Remapping",
        "ProRes 4K Proxy Workflows"
      ]
    },
    {
      name: "Adobe After Effects",
      tag: "Motion Graphics & VFX",
      level: "94%",
      color: "from-blue-600 to-indigo-700",
      accent: "text-blue-600",
      dot: "bg-blue-600",
      features: [
        "Kinetic Typography & Titles",
        "3D Camera Tracking & Nulls",
        "Rotoscoping & Green Screen",
        "Custom Logo & HUD Animations"
      ]
    },
    {
      name: "DaVinci Resolve Studio",
      tag: "Color Science & Fairlight",
      level: "95%",
      color: "from-amber-500 to-rose-600",
      accent: "text-amber-600",
      dot: "bg-amber-600",
      features: [
        "Node-Based Color Pipeline",
        "CST (Color Space Transforms)",
        "Film Print Emulation (Kodak 2383)",
        "Skin Tone Vector Balancing"
      ]
    },
    {
      name: "CapCut Pro & Short-Form",
      tag: "Viral Reels & Shorts",
      level: "96%",
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-600",
      dot: "bg-cyan-600",
      features: [
        "Viral Hook Pacing & Cuts",
        "Animated Kinetic Subtitles",
        "Audio Beat-Matching",
        "TikTok/Instagram Algorithm Formats"
      ]
    },
    {
      name: "Adobe Audition & Fairlight",
      tag: "Sound Design & Master",
      level: "91%",
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-600",
      dot: "bg-emerald-600",
      features: [
        "Dialogue De-noise & Vocal EQ",
        "-14 LUFS Broadcast Standard",
        "Sub-Bass & Spatial Risers",
        "Foley Layering & Stereo Image"
      ]
    },
    {
      name: "Photoshop & Illustrator",
      tag: "Packaging & High-CTR Assets",
      level: "92%",
      color: "from-sky-500 to-blue-700",
      accent: "text-sky-600",
      dot: "bg-sky-600",
      features: [
        "High-CTR YouTube Thumbnails",
        "Matte Textures & Film Grains",
        "Vector Overlays & Icons",
        "Commercial Poster Key Visuals"
      ]
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
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-purple-800 text-xs font-mono font-semibold mb-4"
          >
            <span>// POST-PRODUCTION ARSENAL</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight"
          >
            Mastered Software & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              Technical Capabilities
            </span>
          </motion.h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal">
            From industry-standard non-linear suites to surgical color science and high-retention audio design.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwares.map((sw, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 group hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold">
                      {sw.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-purple-600 transition">
                      {sw.name}
                    </h3>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 ${sw.accent}`}>
                    {sw.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-5">
                  <div
                    className={`h-full bg-gradient-to-r ${sw.color} rounded-full`}
                    style={{ width: sw.level }}
                  ></div>
                </div>

                {/* Bullet Features */}
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {sw.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${sw.dot}`}></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>INDUSTRY BENCHMARK</span>
                <span className="text-emerald-600 font-bold">READY</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editing Disciplines & Competencies Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-purple-700 font-bold">
            <FaSlidersH />
            <span>EDITING WORKFLOW</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {competencies.map((comp, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-800 font-medium shadow-xs hover:border-purple-300 transition-colors flex items-center gap-2"
              >
                <FaCheckCircle className="text-purple-600 text-[10px]" />
                {comp}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}