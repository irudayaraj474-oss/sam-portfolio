import { motion } from "framer-motion";
import { 
  FaClipboardList, 
  FaCut, 
  FaMagic, 
  FaVolumeUp, 
  FaFilm, 
  FaCheckCircle 
} from "react-icons/fa";

export default function Workflow() {
  const steps = [
    {
      step: "01",
      title: "Brief, Hook & Storyboard",
      icon: <FaClipboardList className="text-purple-600 text-lg" />,
      desc: "Analyze your raw footage, identify viral hook opportunities, outline pacing rhythms, and establish the visual tone before touching the timeline.",
      deliverable: "Creative Direction & Retention Strategy"
    },
    {
      step: "02",
      title: "Ingest, Proxies & The Rough Cut",
      icon: <FaCut className="text-cyan-600 text-lg" />,
      desc: "Generate fast ProRes proxies, cull out dead air, sync multi-cam angles, and lock down tight A-roll storytelling using J-cuts and L-cuts.",
      deliverable: "Locked Assembly Cut (Zero Fluff)"
    },
    {
      step: "03",
      title: "Motion Graphics & Kinetic Polish",
      icon: <FaMagic className="text-pink-600 text-lg" />,
      desc: "Animate kinetic typography, 3D camera tracking, lower thirds, UI mockups, and dynamic B-roll cutaways every 3-5 seconds to reset viewer attention.",
      deliverable: "High-Retention Visual Assets"
    },
    {
      step: "04",
      title: "Spatial Sound Design & Foley",
      icon: <FaVolumeUp className="text-amber-600 text-lg" />,
      desc: "The secret to cinematic impact. Layering risers, impacts, atmospheric sub-bass, whooshes, and mastering dialogue to broadcast-standard -14 LUFS.",
      deliverable: "Fully Spatialized 3D Audio Bed"
    },
    {
      step: "05",
      title: "DaVinci Color Science & 4K Export",
      icon: <FaFilm className="text-emerald-600 text-lg" />,
      desc: "Transforming flat LOG into rich, filmic lookbooks with accurate skin tones, Kodak 2383 emulation, and rendering in pristine 4K 10-bit ProRes & Web H.265.",
      deliverable: "4K Master Delivery + Social Cuts"
    }
  ];

  return (
    <section id="workflow" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute w-96 h-96 bg-purple-200/30 blur-[160px] top-1/2 left-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-mono mb-4"
          >
            <span>// POST-PRODUCTION PIPELINE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-950 tracking-tight"
          >
            How We Turn Raw Rushes Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              High-Converting Visual Films
            </span>
          </motion.h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            A seamless, stress-free 5-stage editing pipeline crafted for creators and brands who demand perfection and rapid delivery.
          </p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="relative">
          {/* Central connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-emerald-400 -translate-x-1/2 opacity-40"></div>

          <div className="space-y-8">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-[46%] p-6 sm:p-7 rounded-2xl bg-slate-50/90 border border-slate-200 hover:border-purple-400 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition shadow-sm">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-cyan-700 font-semibold">
                      <FaCheckCircle className="text-[10px] text-cyan-600" />
                      <span>{item.deliverable}</span>
                    </div>
                  </div>

                  {/* Center Node on Timeline */}
                  <div className="hidden lg:flex w-[8%] justify-center">
                    <div className="w-7 h-7 rounded-full bg-white border-2 border-purple-600 flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
                    </div>
                  </div>

                  {/* Empty spacer for opposite side on desktop */}
                  <div className="hidden lg:block w-[46%]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
