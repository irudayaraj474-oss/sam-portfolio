import { motion } from "framer-motion";
import { FaFileAlt, FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden flex flex-col justify-center items-center text-center"
    >
      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Status Pill Badge (Matching Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-300/80 text-emerald-800 text-xs font-mono font-semibold tracking-wide shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>OPEN TO OPPORTUNITIES • FULL-TIME & PROJECTS</span>
        </motion.div>

        {/* Headline (Matching Screenshot: Let's Discuss Opportunities in red) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-slate-900 tracking-tight"
        >
          Let's Discuss <span className="text-[#c5221f]">Opportunities</span>
        </motion.h2>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
        >
          I am actively seeking full-time Video Editor & Motion Graphics roles. <br className="hidden sm:inline" />
          Whether you represent a creative agency, tech firm, or brand, let’s connect!
        </motion.p>

        {/* Red Pill Download Button (Matching Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/Samson_Donald_Resume.pdf"
            download="Samson_Donald_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c5221f] hover:bg-[#a71a17] text-white font-semibold text-sm sm:text-base shadow-lg shadow-red-600/25 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <FaFileAlt className="text-base text-white/90 group-hover:scale-110 transition-transform" />
            <span>Download Full Resume (PDF)</span>
            <FaDownload className="text-xs text-white/80 group-hover:translate-y-0.5 transition-transform ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
