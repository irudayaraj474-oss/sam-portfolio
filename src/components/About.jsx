import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaVolumeUp 
} from "react-icons/fa";

export default function About() {
  const pillars = [
    {
      icon: <FaBolt className="text-amber-500 text-xl" />,
      title: "Retention & Hook Engineering",
      desc: "First 3-second hook optimization, kinetic pattern interrupts, dynamic zooms, and strategic pacing designed to keep audience watch time above 70%.",
    },
    {
      icon: <FaVolumeUp className="text-emerald-600 text-xl" />,
      title: "Spatial Sound Design & Foley",
      desc: "Audio accounts for 50% of your video's impact. Layered whooshes, impacts, cinematic risers, sub-bass drops, and pristine vocal isolation.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 overflow-hidden"
    >
      {/* Background subtle ambient glows */}
      <div className="absolute w-96 h-96 bg-purple-200/40 blur-[160px] -left-20 top-1/4 pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-cyan-200/40 blur-[160px] -right-20 bottom-1/4 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-purple-800 text-xs font-mono font-semibold mb-4"
          >
            <span>// POST-PRODUCTION PHILOSOPHY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair text-slate-950 tracking-tight"
          >
            Editing Isn't Just Cutting Clips. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              It's Directing Human Attention.
            </span>
          </motion.h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative Story & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-slate-950">
              Hey, I'm <span className="text-purple-600">Samson Donald</span>.
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal font-montserrat">
              I'm a <strong className="text-slate-950 font-semibold">Video Editor</strong> passionate about creating clean, cinematic, and engaging videos. I work with <strong className="text-slate-950 font-semibold">Adobe Premiere Pro</strong>, <strong className="text-slate-950 font-semibold">After Effects</strong>, and <strong className="text-slate-950 font-semibold">DaVinci Resolve</strong> to turn raw footage into polished content with smooth pacing, refined visuals, and attention to detail. I also use <strong className="text-slate-950 font-semibold">Adobe Photoshop</strong> to create premium graphics that complement my video projects.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-montserrat">
              I enjoy creating <strong className="text-slate-900 font-semibold">luxury brand commercials, social media Reels, promotional videos, and cinematic short-form content</strong>. My focus is on elegant storytelling, premium aesthetics, and edits that capture attention from the very first second.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-montserrat">
              As I continue growing as an editor, I'm constantly learning new techniques to make every project more professional, impactful, and memorable.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-black hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition duration-300 hover:scale-105 cursor-pointer"
              >
                Inspect Portfolio
              </a>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillars of Post-Production */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-slate-950 mb-2 font-display">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}