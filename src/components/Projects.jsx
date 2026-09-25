import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaArrowRight } from "react-icons/fa";

const videoProjectsData = [
  {
    id: "reel-1",
    title: "Viral High-Retention Reel — Pacing & Hook",
    badge: "Social Reel 01",
    category: "Reels & Short-Form",
    type: "Viral Reel",
    duration: "00:59",
    resolution: "720×1280 (9:16)",
    aspect: "9:16 Vertical",
    tools: ["Adobe Premiere Pro", "CapCut Pro", "Sound Foley"],
    colorProfile: "High-Contrast Mobile Pop",
    description: "High-velocity 59-second vertical cut designed for Instagram Reels & TikTok with instant hook delivery, dynamic zooms, sound foley, and kinetic pacing.",
    highlights: [
      "Sub-2-Second Attention Hook Design",
      "Dynamic Beat-Matched Cuts & Whip Transitions",
      "Layered Sound Design (Whooshes, Risers & Drops)",
      "Optimized 9:16 Mobile Engagement Architecture"
    ],
    videoUrl: "/videos/snapsave-app_3824385035966009920_65314690993.mp4"
  },
  {
    id: "reel-2",
    title: "Cinematic Micro-Story — Kinetic Social Cut",
    badge: "Social Reel 02",
    category: "Reels & Short-Form",
    type: "Social Showcase",
    duration: "00:36",
    resolution: "720×1280 (9:16)",
    aspect: "9:16 Vertical",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    colorProfile: "Commercial Clean Rec.709",
    description: "Punchy 36-second vertical reel balancing crisp visual storytelling, micro-transitions, rapid visual rhythm, and sound-designed accents.",
    highlights: [
      "Seamless Story Pacing & Hook Delivery",
      "Impact Sound FX & Spatial Audio Balance",
      "Precision Speed Ramps & Motion Transitions",
      "Color Graded for Mobile OLED Displays"
    ],
    videoUrl: "/videos/snapsave-app_3842492828975533127_65314690993.mp4"
  },
  {
    id: "reel-3",
    title: "Fast-Cut Retention Edit — High-Energy Reel",
    badge: "Social Reel 03",
    category: "Reels & Short-Form",
    type: "TikTok & Shorts",
    duration: "00:29",
    resolution: "720×1280 (9:16)",
    aspect: "9:16 Vertical",
    tools: ["Adobe Premiere Pro", "CapCut Pro", "Adobe Audition"],
    colorProfile: "Punchy Warm Filmic Tone",
    description: "Ultra-fast 29-second vertical cut with aggressive editing eliminating dead air, backed by trending rhythm, punchy sound drops, and tight framing.",
    highlights: [
      "Aggressive Cutting Eliminating Dead Air",
      "Bass-Heavy Foley Drops & Impact Audio",
      "Dynamic Zoom Punches & Angle Shifts",
      "Algorithmic Watch Time Optimization"
    ],
    videoUrl: "/videos/snapsave-app_3986025513281589489_65314690993.mp4"
  },
  {
    id: "reel-4",
    title: "Viral Creator Reel — Retention Hook & Dynamic Typography",
    badge: "Social Reel 04",
    category: "Reels & Short-Form",
    type: "Viral Reel",
    duration: "01:04",
    resolution: "720×1280 (9:16)",
    aspect: "9:16 Vertical",
    tools: ["CapCut Pro", "Adobe Premiere Pro", "Audition"],
    colorProfile: "Vibrant Cinematic Social Look",
    description: "High-engagement 64-second creator reel cut with rapid visual rhythm, animated word-by-word subtitles, sound foley accents, and algorithmic watch-time pacing.",
    highlights: [
      "Immediate 3-Second Hook Retention",
      "Dynamic Word-by-Word Kinetic Subtitles",
      "Micro-Zooms & Sound Effect Accents",
      "Paced for Maximum Engagement"
    ],
    videoUrl: "/videos/snapsave-app_3632221467960134041_54349628532.mp4"
  },
  {
    id: "reel-5",
    title: "Master 2K Vertical Showcase — High-End Commercial Reel",
    badge: "Master Reel 05",
    category: "Reels & Short-Form",
    type: "2K Master Reel",
    duration: "01:54",
    resolution: "1440×2560 (2K UHD)",
    aspect: "9:16 Vertical",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Foley"],
    colorProfile: "S-Log3 to Rec.709 Filmic Master",
    description: "Ultra-sharp 2K vertical master showcase featuring commercial-grade product pacing, dynamic match cuts, spatial Foley layering, and high-impact visual retention hooks.",
    highlights: [
      "2K Ultra-HD Mobile Mastering (1440×2560)",
      "Seamless Kinetic Transitions & Match Cuts",
      "Layered Foley & 3D Audio Spatialization",
      "Commercial-Grade Product Tracking"
    ],
    videoUrl: "/videos/FINAL OP.mp4"
  },
  {
    id: "reel-6",
    title: "Viral Luxury Real Estate Showcase",
    badge: "Motion Graphic 01",
    category: "Reels & Short-Form",
    type: "Viral Reel",
    duration: "00:48",
    resolution: "1080×1920 (9:16)",
    aspect: "9:16 Vertical",
    tools: ["Premiere Pro", "CapCut Pro", "DaVinci Resolve"],
    colorProfile: "Golden Hour Warmth Grade",
    description: "Multi-million dollar architectural penthouse tour cut to a viral trending rhythm with seamless whip transitions, subtle bass drops, and clean modern caption animation.",
    highlights: [
      "Dynamic Beat Syncing on Every Cut",
      "High-Impact Kinetic Subtitles with Highlight Colors",
      "Smooth Whip-Pan & Object Mask Transitions",
      "Vocal De-Reverb & Dialogue Spatialization"
    ],
    videoUrl: "/videos/FINAL VIDEO.mp4"
  },
  {
    id: "comm-1",
    title: "Apex Hyperdrive — Cyberpunk Brand Film",
    badge: "Commercial 01",
    category: "Commercials & Brand Ads",
    type: "Commercial",
    duration: "01:45",
    resolution: "4K 60FPS UHD",
    aspect: "16:9 Widescreen",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Design"],
    colorProfile: "Sony FX3 S-Log3 → Kodak 2383 Film Look",
    description: "High-intensity commercial featuring kinetic match cuts, 3D product tracking, custom cyber soundscapes, and speed ramping synchronized to a heavy bass score.",
    highlights: [
      "Custom 3D HUD & Kinetic Overlays in AE",
      "Visceral Foley & Stereo Sound Spatialization",
      "Precision Speed Ramps on 120fps slow-motion",
      "Dynamic Split-Tone Color Grade"
    ],
    videoUrl: "/videos/4k 60fps.mp4"
  },
  {
    id: "comm-2",
    title: "Inside the AI Economy — Deep Dive Documentary",
    badge: "Documentary 02",
    category: "YouTube & Long-Form",
    type: "YouTube Long-Form",
    duration: "18:24",
    resolution: "4K 24FPS DCI",
    aspect: "16:9 Cinematic",
    tools: ["Adobe Premiere Pro", "After Effects", "Adobe Audition"],
    colorProfile: "Arri Log-C Film Emulation",
    description: "Documentary-style YouTube video packed with custom animated infographics, dynamic chart animations, archival footage restoration, and suspenseful scoring.",
    highlights: [
      "First 3-Second Hook Retention Architecture",
      "Over 40+ Custom Motion Graphic Infographics",
      "Atmospheric Sound Beds & Cinematic Risers",
      "Pattern Interrupts every 4 seconds"
    ],
    videoUrl: "/videos/FINAL OUTPUT.mp4"
  },
  {
    id: "comm-3",
    title: "IronPulse Performance — Athletic Commercial",
    badge: "Brand Film 03",
    category: "Commercials & Brand Ads",
    type: "Brand Film",
    duration: "02:10",
    resolution: "4K 60FPS",
    aspect: "16:9 CinemaScope",
    tools: ["Adobe Premiere Pro", "After Effects", "Sound Foley"],
    colorProfile: "High-Contrast Bleach Bypass Look",
    description: "Gritty, sweat-soaked gym and athletic apparel film featuring hard-hitting sound effects, heartbeat audio tension builds, and aggressive motion tracking.",
    highlights: [
      "Rhythmic Barbell & Footstep Foley Layering",
      "Text Masking Behind Moving Athletes",
      "High-Energy Film Grain & Halation Effects",
      "Color Grade Optimized for Mobile OLED Displays"
    ],
    videoUrl: "/videos/FINAL (2).mp4"
  },
  {
    id: "comm-4",
    title: "Commercial Bumper & Brand Stinger — 11s Teaser",
    badge: "Motion Graphic 02",
    category: "Commercials & Brand Ads",
    type: "Brand Bumper",
    duration: "00:11",
    resolution: "1280×720 (16:9)",
    aspect: "16:9 Landscape",
    tools: ["After Effects", "Premiere Pro", "Sound FX"],
    colorProfile: "Cinematic Commercial High-Contrast",
    description: "Punchy 11-second cinematic bumper cut with aggressive motion graphics, sonic branding, and immediate visual impact engineered for pre-roll and digital ad spots.",
    highlights: [
      "High-Impact 11-Second Hook",
      "Fast Motion Graphics & Sound Stabs",
      "Brand Logo Animation Polish",
      "Multi-Platform Ad Spec Ready"
    ],
    videoUrl: "/videos/snapsave-app_3956417325458150307_51822794386.mp4"
  }
];

function ReelCard({ project, onSelectProject }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex-shrink-0 w-64 sm:w-72 md:w-80 aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer select-none"
    >
      {/* Video Element with Autoplay on Hover */}
      <video
        ref={videoRef}
        src={project.videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-black"
      />

      {/* Subtle Top & Bottom Gradient Shadows */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none"></div>

      {/* Top Details (Duration & Resolution) */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          ⏱ {project.duration}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300">
          {project.resolution.includes("(") ? project.resolution.split("(")[0].trim() : project.resolution}
        </span>
      </div>

      {/* Center Play Button (Fades In on Hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        <div className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <FaPlay className="text-sm ml-0.5 text-black" />
        </div>
      </div>

      {/* Bottom Content: Red Dot Badge (Matching Screenshot) */}
      <div className="absolute bottom-4 inset-x-4 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/15 shadow-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>{project.badge}</span>
          </div>

          <span className="text-[11px] font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Watch <FaArrowRight className="text-[9px]" />
          </span>
        </div>

        <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-1 drop-shadow-md">
          {project.title}
        </h4>
      </div>
    </div>
  );
}

export default function Projects({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState("Reels & Motion");
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    "Reels & Motion",
    "Commercials & Brand Ads",
    "YouTube & Long-Form",
    "All Works"
  ];

  const filteredProjects = activeTab === "All Works"
    ? videoProjectsData
    : activeTab === "Reels & Motion"
    ? videoProjectsData.filter((p) => p.category === "Reels & Short-Form")
    : videoProjectsData.filter((p) => p.category === activeTab);

  // Guarantee minimum items so track is wider than any viewport before duplicating
  const repeatFactor = Math.max(1, Math.ceil(8 / Math.max(1, filteredProjects.length)));
  const baseList = Array(repeatFactor).fill(filteredProjects).flat();
  // Duplicate baseList once to create two exact halves for seamless 0% -> -50% infinite loop
  const marqueeList = [...baseList, ...baseList];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (Matching Screenshot: Reels & Motion + Status Info) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold mb-3">
              <span>// POST-PRODUCTION VAULT</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-slate-950 tracking-tight"
            >
              Reels & Motion
            </motion.h2>
          </div>

          {/* Marquee info indicator with interactive Pause/Play toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50 hover:bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 transition cursor-pointer select-none"
              title="Click to pause or resume continuous loop"
            >
              <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500" : "bg-red-500 animate-pulse"}`}></span>
              <span>{isPaused ? "Loop Paused • Click to Resume" : "Looping Right to Left • Hover to preview"}</span>
              {isPaused ? <FaPlay className="text-[9px] text-slate-600 ml-1" /> : <FaPause className="text-[9px] text-slate-400 ml-1" />}
            </button>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === cat
                      ? "bg-black text-white shadow-md"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Infinite Loop Showcase (Right to Left Continuous Motion) */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0">
          {/* Edge Fade Overlays for seamless entrance and exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

          {/* Continuous Right-to-Left Track */}
          <div
            key={activeTab}
            className="animate-reel-marquee flex items-center gap-6"
            style={{
              animationPlayState: isPaused ? "paused" : undefined,
              animationDuration: `${Math.max(35, baseList.length * 4.2)}s`
            }}
          >
            {marqueeList.map((project, idx) => (
              <ReelCard
                key={`${project.id}-${idx}`}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        </div>

        {/* Bottom Centered "View All Projects" Pill Button (Matching Screenshot) */}
        <div className="mt-10 flex justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-slate-900/10 transition-all duration-300 hover:scale-105 group"
          >
            <span className="text-base leading-none">⊞</span>
            <span>View All Projects</span>
            <span className="text-sm leading-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}