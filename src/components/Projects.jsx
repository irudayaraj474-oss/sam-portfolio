import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaArrowRight, FaThLarge, FaTimes } from "react-icons/fa";

// All 10 Unique Master Productions (Duplicate Removed)
export const videoProjectsData = [
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FSURIYAS.mp4?alt=media&token=f19a516c-0467-4187-9105-cdca19111a48",
    thumbnail: "/thumbnails/SURIYAS.jpg"
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FS1.mp4?alt=media&token=82286d7a-a110-4b50-90b9-e34dacd20d07",
    thumbnail: "/thumbnails/S1.jpg"
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FS3.mp4?alt=media&token=00afbe0a-984a-475b-8f27-6ab6d486278f",
    thumbnail: "/thumbnails/S3.jpg"
  },
  {
    id: "reel-4",
    title: "Viral Creator Reel — Retention Hook & Typography",
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FACAS.mp4?alt=media&token=33030c32-2de6-4d87-85d6-654a2f2d0cb3",
    thumbnail: "/thumbnails/ACAS.jpg"
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FFINAL%20OP.mp4?alt=media&token=6f1b6cbe-4325-414c-9091-aeee49469ef9",
    thumbnail: "/thumbnails/FINAL_OP.jpg"
  },
  {
    id: "reel-6",
    title: "Viral Luxury Real Estate Showcase",
    badge: "Social Reel 06",
    category: "Reels & Short-Form",
    type: "Viral Reel",
    duration: "00:43",
    resolution: "1080×1920 (9:16)",
    aspect: "9:16 Vertical",
    tools: ["Premiere Pro", "CapCut Pro", "DaVinci Resolve"],
    colorProfile: "Golden Hour Warmth Grade",
    description: "Multi-million dollar architectural tour cut to a viral trending rhythm with seamless whip transitions, subtle bass drops, and clean modern caption animation.",
    highlights: [
      "Dynamic Beat Syncing on Every Cut",
      "High-Impact Kinetic Subtitles with Highlight Colors",
      "Smooth Whip-Pan & Object Mask Transitions",
      "Vocal De-Reverb & Dialogue Spatialization"
    ],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FFINAL%20VIDEO.mp4?alt=media&token=a09fcc0c-9afe-4103-9105-112d79d163a1",
    thumbnail: "/thumbnails/FINAL_VIDEO.jpg"
  },
  {
    id: "comm-1",
    title: "Apex Hyperdrive — Cyberpunk Brand Film",
    badge: "Commercial 07",
    category: "Commercials & Brand Ads",
    type: "Commercial",
    duration: "00:22",
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2F4k%2060fps.mp4?alt=media&token=9e025596-d262-401f-8f47-9c433b44505f",
    thumbnail: "/thumbnails/4k_60fps.jpg"
  },
  {
    id: "comm-2",
    title: "Inside the AI Economy — Deep Dive Documentary",
    badge: "Documentary 08",
    category: "YouTube & Long-Form",
    type: "YouTube Long-Form",
    duration: "01:21",
    resolution: "4K 24FPS DCI",
    aspect: "16:9 Cinematic",
    tools: ["Adobe Premiere Pro", "After Effects", "Adobe Audition"],
    colorProfile: "Arri Log-C Film Emulation",
    description: "Documentary-style video packed with custom animated infographics, dynamic chart animations, archival footage restoration, and suspenseful scoring.",
    highlights: [
      "First 3-Second Hook Retention Architecture",
      "Over 40+ Custom Motion Graphic Infographics",
      "Atmospheric Sound Beds & Cinematic Risers",
      "Pattern Interrupts every 4 seconds"
    ],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FFINAL%20OUTPUT.mp4?alt=media&token=606057f3-22c2-473e-8981-6a3a382cf9f2",
    thumbnail: "/thumbnails/FINAL_OUTPUT.jpg"
  },
  {
    id: "comm-3",
    title: "IronPulse Performance — Athletic Commercial",
    badge: "Brand Film 09",
    category: "Commercials & Brand Ads",
    type: "Brand Film",
    duration: "00:42",
    resolution: "1080×1920 (9:16)",
    aspect: "9:16 CinemaScope",
    tools: ["Adobe Premiere Pro", "After Effects", "Sound Foley"],
    colorProfile: "High-Contrast Bleach Bypass Look",
    description: "Gritty, athletic apparel film featuring hard-hitting sound effects, heartbeat audio tension builds, and aggressive motion tracking.",
    highlights: [
      "Rhythmic Barbell & Footstep Foley Layering",
      "Text Masking Behind Moving Athletes",
      "High-Energy Film Grain & Halation Effects",
      "Color Grade Optimized for Mobile OLED Displays"
    ],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FFINAL%20(2).mp4?alt=media&token=01da8ae3-b585-430e-a86d-4731334b4a05",
    thumbnail: "/thumbnails/FINAL__2_.jpg"
  },
  {
    id: "comm-4",
    title: "Dynamic Motion Identity & Title Sequence",
    badge: "Motion Graphic 10",
    category: "Commercials & Brand Ads",
    type: "Motion Branding",
    duration: "00:11",
    resolution: "1280×720 (16:9)",
    aspect: "16:9 Landscape",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    colorProfile: "Vibrant Broadcast Rec.709",
    description: "High-energy brand identity animation featuring kinetic particle dispersion, glowing typography, and custom rhythmic sound stabs.",
    highlights: [
      "Dynamic Particle & Light Streak Effects",
      "Synchronized Impact Sound Design",
      "Broadcast-Ready Color & Gamma",
      "Fast-Turnaround Motion Polish"
    ],
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2FMG.mp4?alt=media&token=19644480-a823-4f6f-aec7-c606dbb3aaa3",
    thumbnail: "/thumbnails/MG.jpg"
  }
];

function ReelCard({ project, onSelectProject, isGrid = false }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative ${
        isGrid ? "w-full" : "flex-shrink-0 w-64 sm:w-72 md:w-80"
      } aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer select-none`}
    >
      {/* High-Quality Thumbnail Poster Image */}
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          loading="lazy"
        />
      )}

      {/* Video Element with Autoplay on Hover */}
      <video
        ref={videoRef}
        src={project.videoUrl}
        poster={project.thumbnail}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-transparent"
      />

      {/* Subtle Top & Bottom Gradient Shadows */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none"></div>

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

      {/* Bottom Content: Red Dot Badge & Title */}
      <div className="absolute bottom-4 inset-x-4 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/15 shadow-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>{project.badge}</span>
          </div>

          <span className="text-[11px] font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Watch <FaArrowRight className="text-[9px]" />
          </span>
        </div>

        <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 drop-shadow-md">
          {project.title}
        </h4>
      </div>
    </div>
  );
}

export default function Projects({ onSelectProject }) {
  const [isAllVideosPanelOpen, setIsAllVideosPanelOpen] = useState(false);
  const [panelActiveTab, setPanelActiveTab] = useState("All 10 Videos");
  const sectionRef = useRef(null);

  const categories = [
    { label: "All 10 Videos", filterKey: "all", count: videoProjectsData.length },
    { label: "Reels & Short-Form", filterKey: "Reels & Short-Form", count: 6 },
    { label: "Commercials & Ads", filterKey: "Commercials & Brand Ads", count: 3 },
    { label: "Documentary", filterKey: "YouTube & Long-Form", count: 1 }
  ];

  const panelFilteredProjects = panelActiveTab === "All 10 Videos"
    ? videoProjectsData
    : videoProjectsData.filter((p) => {
        const matchingCat = categories.find((c) => c.label === panelActiveTab);
        return matchingCat ? p.category === matchingCat.filterKey : true;
      });

  // Guarantee minimum items so track is wider than any viewport before duplicating
  const repeatFactor = Math.max(1, Math.ceil(8 / Math.max(1, videoProjectsData.length)));
  const baseList = Array(repeatFactor).fill(videoProjectsData).flat();
  // Duplicate baseList once to create two exact halves for seamless 0% -> -50% infinite loop
  const marqueeList = [...baseList, ...baseList];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsAllVideosPanelOpen(false);
      }
    };
    if (isAllVideosPanelOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isAllVideosPanelOpen]);

  const openAllVideosPanel = (initialFilter = "All 10 Videos") => {
    setPanelActiveTab(initialFilter);
    setIsAllVideosPanelOpen(true);
  };

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold mb-3">
            <span>// POST-PRODUCTION VAULT • CONTINUOUS INFINITE LOOP</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black font-playfair text-slate-950 tracking-tight"
          >
            Reels & Motion Vault
          </motion.h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl font-montserrat">
            All 10 master productions aligned in a continuous row, looping right to left. Hover over any video to pause and preview, or click View All Videos below to open the full interactive panel.
          </p>
        </div>

        {/* VIDEOS DISPLAY: CONTINUOUS MARQUEE ROW */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0">
          {/* Left Edge Fade Overlay */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
          {/* Right Edge Fade Overlay */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

          {/* Continuous Right-to-Left Infinite Row */}
          <div
            className="animate-reel-marquee flex items-center gap-6 hover:[animation-play-state:paused]"
            style={{
              animationDuration: `${Math.max(40, baseList.length * 4.2)}s`
            }}
          >
            {marqueeList.map((project, idx) => (
              <ReelCard
                key={`${project.id}-${idx}`}
                project={project}
                onSelectProject={onSelectProject}
                isGrid={false}
              />
            ))}
          </div>
        </div>

        {/* Bottom Status Banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-700">
              <span className="font-bold text-slate-900">All 10 unique video projects</span> are running in one seamless row. Hover over any card to preview, or click View All Videos to open the full interactive panel.
            </p>
          </div>

          <button
            onClick={() => openAllVideosPanel()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black hover:bg-slate-800 text-white font-semibold text-xs transition shadow-sm hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <FaThLarge className="text-xs" />
            <span>View All Videos (10)</span>
            <span className="text-sm">↗</span>
          </button>
        </div>

      </div>

      {/* ALL VIDEOS DEDICATED MODAL PANEL */}
      <AnimatePresence>
        {isAllVideosPanelOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAllVideosPanelOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-7xl max-h-[92vh] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 bg-slate-50/90 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-mono font-semibold mb-1">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                    <span>// ALL 10 MASTER PRODUCTIONS VAULT</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-playfair text-slate-950 tracking-tight">
                    Complete Video Productions & Live Previews
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5 font-montserrat">
                    Hover over any video to preview live with autoplay. Click to launch the 4K Cinema Player.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsAllVideosPanelOpen(false)}
                    className="px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-black border border-slate-200 text-xs font-semibold shadow-xs transition cursor-pointer flex items-center gap-2"
                    aria-label="Close panel"
                  >
                    <FaTimes className="text-sm" />
                    <span>Close Vault (Esc)</span>
                  </button>
                </div>
              </div>

              {/* Filter Tabs Inside Panel */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-white border-b border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => setPanelActiveTab(cat.label)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        panelActiveTab === cat.label
                          ? "bg-black text-white shadow-sm scale-105"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                          panelActiveTab === cat.label
                            ? "bg-white/20 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>

                <span className="text-xs font-mono text-slate-500 hidden md:inline">
                  Showing {panelFilteredProjects.length} of {videoProjectsData.length} Master Videos
                </span>
              </div>

              {/* Scrollable Video Grid */}
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 bg-slate-50/40">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
                  {panelFilteredProjects.map((project) => (
                    <ReelCard
                      key={project.id}
                      project={project}
                      onSelectProject={onSelectProject}
                      isGrid={true}
                    />
                  ))}
                </div>
              </div>

              {/* Footer of Modal */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>💡 Tip: Hover any video card for live preview • Click to play in 4K</span>
                <button
                  onClick={() => setIsAllVideosPanelOpen(false)}
                  className="text-slate-700 hover:text-black font-semibold underline underline-offset-2 cursor-pointer"
                >
                  Back to Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}