import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import AntigravityDots from "./AntigravityDots";

export default function Hero({ onOpenShowreel }) {
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden flex flex-col justify-center items-center">
      {/* Google Antigravity Interactive Dot Particle Field */}
      <AntigravityDots />

      {/* Ambient Soft Glow Elements */}
      <div className="absolute w-[600px] h-[600px] bg-purple-200/20 blur-[180px] rounded-full -top-20 -left-20 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-200/20 blur-[180px] rounded-full top-1/3 -right-20 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center w-full z-10">
        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display text-slate-950 uppercase leading-[1.05]"
        >
          Turning Ideas Into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
            Clean, Professional Videos
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
        >
          I'm a video editor building <strong className="text-slate-900 font-semibold">cinematic edits</strong>,{" "}
          <strong className="text-slate-900 font-semibold">luxury brand content</strong>, and{" "}
          <strong className="text-slate-900 font-semibold">engaging social media videos</strong> while continuously improving my creative skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-9 flex flex-wrap justify-center items-center gap-4"
        >
          {/* Watch Showreel Button */}
          <button
            onClick={onOpenShowreel}
            className="group relative px-8 py-4 rounded-full bg-black hover:bg-slate-800 text-white font-semibold text-sm sm:text-base shadow-xl shadow-slate-900/15 transition-all duration-300 hover:scale-105 flex items-center gap-3 cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition">
              <FaPlay className="text-[10px] text-white ml-0.5" />
            </span>
            <span>Watch 2026 Showreel</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}