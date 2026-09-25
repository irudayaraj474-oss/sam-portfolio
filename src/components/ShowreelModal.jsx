import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaPause, 
  FaTimes, 
  FaVolumeMute, 
  FaVolumeUp, 
  FaExpand, 
  FaCheckCircle,
  FaExternalLinkAlt 
} from "react-icons/fa";

// Helper function to detect YouTube, Vimeo, Drive, or direct MP4 links
function parseVideoSource(url) {
  if (!url) return null;

  // YouTube (standard, share link, shorts, embed)
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return { type: "youtube", embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0` };
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return { type: "vimeo", embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1` };
  }

  // Google Drive
  if (url.includes("drive.google.com")) {
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return { type: "gdrive", embedUrl: `https://drive.google.com/file/d/${driveMatch[1]}/preview` };
    }
  }

  // Direct video file (.mp4, .webm, or local file in /videos/)
  return { type: "direct", embedUrl: encodeURI(url) };
}

export default function ShowreelModal({ isOpen, onClose, project }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) => (prev >= 98 ? 0 : prev + 0.8));
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentProject = project || {
    title: "Official 2026 Cinematic Showreel",
    category: "Master Showreel",
    duration: "02:14",
    resolution: "4K 60FPS UHD",
    colorProfile: "DaVinci Wide Gamut • Rec.709",
    audio: "Mastered 48kHz 24-bit Stereo",
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Design"],
    description: "Curated montage showcasing fast-paced commercial editing, YouTube high-retention pacing, kinetic typography, 3D tracking, and cinematic film emulation.",
    highlights: [
      "Dynamic Hook & Match Cut Transitions",
      "Layered Foley, Risers & Bass Drops",
      "S-Log3 to Film Emulation Color Grade",
      "Custom 2D/3D Kinetic Typography"
    ],
    videoUrl: ""
  };

  const videoSource = parseVideoSource(currentProject.videoUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                {videoSource ? "LIVE PLAYBACK" : "MASTER PREVIEW"}
              </span>
              <span className="text-slate-600 text-xs hidden sm:inline-block font-mono font-medium">
                {currentProject.resolution}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {currentProject.videoUrl && (
                <a
                  href={currentProject.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-mono font-medium transition flex items-center gap-1.5"
                >
                  <span>Open Video</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
          </div>

          {/* Video Player Display Screen */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            {videoSource ? (
              // REAL VIDEO PLAYBACK
              videoSource.type === "direct" ? (
                <video
                  src={videoSource.embedUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <iframe
                  src={videoSource.embedUrl}
                  title={currentProject.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              // CINEMATIC SIMULATED PLAYER SCREEN (Fallback)
              <div className="relative w-full h-full flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-cyan-900/20 to-black"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Center Content */}
                <div className="relative text-center px-6 z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 p-0.5 shadow-2xl shadow-purple-500/30 flex items-center justify-center cursor-pointer mb-4"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <div className="w-full h-full bg-[#0a0c14] rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition">
                      {isPlaying ? (
                        <FaPause className="text-2xl text-purple-400" />
                      ) : (
                        <FaPlay className="text-2xl ml-1 text-cyan-400" />
                      )}
                    </div>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-lg mx-auto">
                    {currentProject.category} • {currentProject.colorProfile}
                  </p>

                  {/* Audio Bars */}
                  {isPlaying && (
                    <div className="flex items-center justify-center gap-1.5 mt-4 h-8">
                      <span className="w-1 bg-cyan-400 rounded-full audio-bar-1"></span>
                      <span className="w-1 bg-purple-400 rounded-full audio-bar-2"></span>
                      <span className="w-1 bg-cyan-300 rounded-full audio-bar-3"></span>
                      <span className="w-1 bg-purple-500 rounded-full audio-bar-4"></span>
                      <span className="w-1 bg-cyan-400 rounded-full audio-bar-5"></span>
                      <span className="w-1 bg-purple-400 rounded-full audio-bar-6"></span>
                    </div>
                  )}
                </div>

                {/* Corner Badges */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gray-700/60 font-mono text-xs text-cyan-400">
                  TC 00:01:{(Math.floor(progress * 0.6)).toString().padStart(2, '0')}:18
                </div>

                <div className="absolute top-4 right-4 z-20 px-2.5 py-0.5 rounded-full bg-purple-600/80 backdrop-blur-md text-[11px] font-bold text-white tracking-widest uppercase">
                  PRORES 422
                </div>

                {/* Bottom Scrub Controls */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col gap-2 z-20">
                  <div 
                    className="w-full bg-gray-800 h-1.5 rounded-full cursor-pointer overflow-hidden group/bar relative"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setProgress((clickX / rect.width) * 100);
                    }}
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 relative transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-purple-400 transition"
                      >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                      </button>

                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-cyan-400 transition"
                      >
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                      </button>

                      <span className="font-mono text-gray-300">
                        00:01:{(Math.floor(progress * 0.6)).toString().padStart(2, '0')} / {currentProject.duration || "02:14"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-purple-300 font-mono text-[11px]">
                        LUT: Kodak_2383_Warm.cube
                      </span>
                      <button className="hover:text-white transition">
                        <FaExpand />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Details Section Below Screen with High-Contrast Text */}
          <div className="p-6 sm:p-7 overflow-y-auto bg-white space-y-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-950 font-display mb-1">
                {currentProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {currentProject.description}
              </p>
            </div>

            {/* Highlights */}
            {currentProject.highlights && (
              <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                {currentProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Software badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {currentProject.tools?.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {currentProject.colorProfile && (
                <span className="text-xs font-mono text-purple-700 font-semibold bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  {currentProject.colorProfile}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
