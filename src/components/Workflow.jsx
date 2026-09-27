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
      title: "Strategy & Concept",
      icon: <FaClipboardList className="text-purple-600 text-lg" />,
      desc: "Understand the brand, define the visual direction, and create a high-impact concept before designing.",
      deliverable: "Creative Direction & Brand Mood"
    },
    {
      step: "02",
      title: "Story & Structure",
      icon: <FaCut className="text-cyan-600 text-lg" />,
      desc: "Build engaging pacing with clean edits, smooth transitions, and attention-grabbing openings.",
      deliverable: "Hook-Driven Editing"
    },
    {
      step: "03",
      title: "Premium Design Polish",
      icon: <FaMagic className="text-pink-600 text-lg" />,
      desc: "Add cinematic motion graphics, luxury typography, and elegant visual details that elevate the brand.",
      deliverable: "Luxury Visual Identity"
    },
    {
      step: "04",
      title: "Sound & Motion",
      icon: <FaVolumeUp className="text-amber-600 text-lg" />,
      desc: "Enhance every edit with impactful sound effects, music, and smooth motion for a cinematic feel.",
      deliverable: "Cinematic Audio Experience"
    },
    {
      step: "05",
      title: "Final Delivery",
      icon: <FaFilm className="text-emerald-600 text-lg" />,
      desc: "Deliver polished 4K content optimized for Instagram, YouTube, and commercial campaigns.",
      deliverable: "Ready for Every Platform"
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
            <span>// CREATIVE WORKFLOW</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair text-slate-950 tracking-tight"
          >
            How I Turn Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              Premium Visual Campaigns
            </span>
          </motion.h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-montserrat">
            A fast, strategy-first workflow that transforms a simple brief into scroll-stopping visuals for brands, social media, and advertising.
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
