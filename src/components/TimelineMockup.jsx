import { useState, useEffect } from "react";
import { 
  FaPlay, 
  FaPause, 
  FaCut, 
  FaSlidersH, 
  FaVolumeUp, 
  FaEye, 
  FaLock, 
  FaMicrophone 
} from "react-icons/fa";

export default function TimelineMockup({ onOpenShowreel }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playheadPos, setPlayheadPos] = useState(42);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setPlayheadPos((prev) => (prev >= 96 ? 4 : prev + 0.6));
    }, 80);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#090b13]/90 border border-gray-800/90 shadow-2xl shadow-purple-950/20 backdrop-blur-xl overflow-hidden font-mono text-xs">
      {/* Top NLE Window Header */}
      <div className="bg-[#0e111c] px-4 py-2.5 border-b border-gray-800 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Window dots + Project Name */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-gray-300 font-semibold text-xs tracking-wide">
            Sequence: <span className="text-purple-400">HERO_COMMERCIAL_MASTER_v4.prproj</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40 text-[10px] text-purple-300">
            PRORES 422 HQ • 3840×2160 • 59.94 fps
          </span>
        </div>

        {/* Right: Timecode Display */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-black/80 rounded border border-gray-800 text-cyan-400 font-mono tracking-widest text-xs">
            TC 00:02:{(Math.floor(playheadPos * 0.6)).toString().padStart(2, '0')}:{(Math.floor(playheadPos * 1.4) % 60).toString().padStart(2, '0')}
          </div>
          <button
            onClick={onOpenShowreel}
            className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs font-medium transition flex items-center gap-1.5"
          >
            <FaPlay className="text-[10px]" /> Expand Reel
          </button>
        </div>
      </div>

      {/* Toolbar & Playback Controls */}
      <div className="bg-[#0b0e18] px-4 py-2 border-b border-gray-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-7 h-7 rounded bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/40 text-purple-300 flex items-center justify-center transition"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause className="text-[10px]" /> : <FaPlay className="text-[10px] ml-0.5" />}
          </button>

          <div className="h-4 w-px bg-gray-800"></div>

          {/* Editing Tools */}
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <span className="p-1 rounded bg-gray-800/80 text-cyan-400" title="Selection Tool (V)">V</span>
            <span className="p-1 rounded hover:bg-gray-800 text-gray-400 cursor-pointer" title="Razor Cut Tool (C)"><FaCut className="inline" /></span>
            <span className="p-1 rounded hover:bg-gray-800 text-gray-400 cursor-pointer" title="Rate Stretch (R)">R</span>
            <span className="p-1 rounded hover:bg-gray-800 text-gray-400 cursor-pointer" title="Color Scopes"><FaSlidersH className="inline" /></span>
          </div>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>GPU RENDER ACCELERATED • 0 DROPPED FRAMES</span>
        </div>
      </div>

      {/* Timeline Workspace Tracks */}
      <div className="relative p-3 bg-[#070910] select-none overflow-x-auto min-w-[620px]">
        {/* Animated Playhead Vertical Line */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none transition-all duration-75 flex flex-col items-center"
          style={{ left: `${playheadPos}%` }}
        >
          {/* Playhead Head Marker */}
          <div className="w-3 h-3 bg-red-500 rotate-45 -mt-1 shadow-md shadow-red-500/50"></div>
          {/* Playhead Laser Line */}
          <div className="w-0.5 h-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
        </div>

        {/* Timeline Ruler */}
        <div className="relative h-6 border-b border-gray-800 flex items-center text-[10px] text-gray-500 font-mono pl-24">
          <div className="absolute left-24">00:00</div>
          <div className="absolute left-[35%]">00:01:15</div>
          <div className="absolute left-[60%]">00:02:30</div>
          <div className="absolute left-[85%]">00:03:45</div>
        </div>

        {/* TRACK V3 - Motion Graphics & Kinetic Typography */}
        <div className="flex items-center gap-2 py-1.5 border-b border-gray-800/40">
          <div className="w-24 flex items-center justify-between text-gray-400 pr-2">
            <span className="font-semibold text-purple-400">V3</span>
            <div className="flex gap-1.5 text-[10px]">
              <FaEye className="text-gray-500 hover:text-white cursor-pointer" />
              <FaLock className="text-gray-600" />
            </div>
          </div>
          <div className="flex-1 relative h-9 bg-gray-900/60 rounded border border-gray-800 flex items-center px-1 overflow-hidden">
            <div className="absolute left-[8%] w-[22%] h-7 rounded bg-purple-900/70 border border-purple-500/60 px-2 flex items-center justify-between text-purple-200">
              <span className="truncate">Title_Kinetic_Hook.aep</span>
              <span className="text-[9px] text-purple-400">◆ Keyframes</span>
            </div>
            <div className="absolute left-[45%] w-[18%] h-7 rounded bg-purple-900/70 border border-purple-500/60 px-2 flex items-center text-purple-200">
              <span className="truncate">Callout_Pointer_3D</span>
            </div>
            <div className="absolute left-[70%] w-[24%] h-7 rounded bg-purple-900/70 border border-purple-500/60 px-2 flex items-center text-purple-200">
              <span className="truncate">Endscreen_CTA_Anim</span>
            </div>
          </div>
        </div>

        {/* TRACK V2 - B-Roll & Dynamic Cutaways */}
        <div className="flex items-center gap-2 py-1.5 border-b border-gray-800/40">
          <div className="w-24 flex items-center justify-between text-gray-400 pr-2">
            <span className="font-semibold text-cyan-400">V2</span>
            <div className="flex gap-1.5 text-[10px]">
              <FaEye className="text-gray-500 hover:text-white cursor-pointer" />
              <FaLock className="text-gray-600" />
            </div>
          </div>
          <div className="flex-1 relative h-9 bg-gray-900/60 rounded border border-gray-800 flex items-center px-1 overflow-hidden">
            <div className="absolute left-[4%] w-[15%] h-7 rounded bg-cyan-950/80 border border-cyan-500/60 px-2 flex items-center text-cyan-200">
              <span className="truncate">Drone_4K_City_01.mov</span>
            </div>
            <div className="absolute left-[24%] w-[19%] h-7 rounded bg-cyan-950/80 border border-cyan-500/60 px-2 flex items-center text-cyan-200">
              <span className="truncate">SpeedRamp_Gym_Macro</span>
            </div>
            <div className="absolute left-[52%] w-[16%] h-7 rounded bg-cyan-950/80 border border-cyan-500/60 px-2 flex items-center text-cyan-200">
              <span className="truncate">Product_Spin_SlowMo</span>
            </div>
            <div className="absolute left-[72%] w-[20%] h-7 rounded bg-cyan-950/80 border border-cyan-500/60 px-2 flex items-center text-cyan-200">
              <span className="truncate">Studio_Lighting_Shift</span>
            </div>
          </div>
        </div>

        {/* TRACK V1 - Main A-Roll Footage */}
        <div className="flex items-center gap-2 py-1.5 border-b border-gray-800/80">
          <div className="w-24 flex items-center justify-between text-gray-400 pr-2">
            <span className="font-semibold text-blue-400">V1</span>
            <div className="flex gap-1.5 text-[10px]">
              <FaEye className="text-gray-500 hover:text-white cursor-pointer" />
              <FaLock className="text-gray-600" />
            </div>
          </div>
          <div className="flex-1 relative h-9 bg-gray-900/60 rounded border border-gray-800 flex items-center px-1 overflow-hidden">
            <div className="absolute left-0 w-[30%] h-7 rounded bg-blue-950/90 border border-blue-500/60 px-2 flex items-center text-blue-200">
              <span className="truncate">A_Roll_Interview_CamA_SLog3</span>
            </div>
            <div className="absolute left-[31%] w-[33%] h-7 rounded bg-blue-950/90 border border-blue-500/60 px-2 flex items-center text-blue-200">
              <span className="truncate">A_Roll_Pt2_Narrative_Cut</span>
            </div>
            <div className="absolute left-[65%] w-[32%] h-7 rounded bg-blue-950/90 border border-blue-500/60 px-2 flex items-center text-blue-200">
              <span className="truncate">A_Roll_Final_Call_To_Action</span>
            </div>
          </div>
        </div>

        {/* TRACK A1 - Voiceover & Dialogue EQ */}
        <div className="flex items-center gap-2 py-1.5 border-b border-gray-800/40">
          <div className="w-24 flex items-center justify-between text-gray-400 pr-2">
            <span className="font-semibold text-emerald-400">A1</span>
            <div className="flex gap-1.5 text-[10px]">
              <FaVolumeUp className="text-emerald-400 cursor-pointer" />
              <FaMicrophone className="text-gray-600" />
            </div>
          </div>
          <div className="flex-1 relative h-8 bg-gray-900/60 rounded border border-gray-800 flex items-center px-1 overflow-hidden">
            <div className="absolute inset-0 bg-emerald-950/40 flex items-center px-3 justify-between">
              {/* Audio Waveform visualization */}
              <div className="w-full flex items-center gap-1 opacity-70">
                {Array.from({ length: 48 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1 bg-emerald-400/80 rounded-full"
                    style={{ height: `${(Math.sin(i * 0.7) * 8 + 12)}px` }}
                  ></span>
                ))}
              </div>
            </div>
            <span className="absolute left-3 text-[10px] text-emerald-200 font-semibold z-10">
              Clean_Dialogue_Master_EQ (-14 LUFS)
            </span>
          </div>
        </div>

        {/* TRACK A2 - Sound FX & Foley Hits */}
        <div className="flex items-center gap-2 py-1.5 border-b border-gray-800/40">
          <div className="w-24 flex items-center justify-between text-gray-400 pr-2">
            <span className="font-semibold text-amber-400">A2</span>
            <div className="flex gap-1.5 text-[10px]">
              <FaVolumeUp className="text-amber-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex-1 relative h-8 bg-gray-900/60 rounded border border-gray-800 flex items-center px-1 overflow-hidden">
            <div className="absolute left-[3%] w-[8%] h-6 rounded bg-amber-950/80 border border-amber-500/50 px-1 text-[9px] text-amber-200 truncate flex items-center">
              Whoosh_Hit
            </div>
            <div className="absolute left-[24%] w-[7%] h-6 rounded bg-amber-950/80 border border-amber-500/50 px-1 text-[9px] text-amber-200 truncate flex items-center">
              Bass_Drop
            </div>
            <div className="absolute left-[44%] w-[10%] h-6 rounded bg-amber-950/80 border border-amber-500/50 px-1 text-[9px] text-amber-200 truncate flex items-center">
              Riser_Atmosphere
            </div>
            <div className="absolute left-[70%] w-[8%] h-6 rounded bg-amber-950/80 border border-amber-500/50 px-1 text-[9px] text-amber-200 truncate flex items-center">
              Vinyl_Scratch
            </div>
          </div>
        </div>

        {/* TRACK A3 - Cinematic Music Bed */}
        <div className="flex items-center gap-2 py-1.5">
          <div className="w-24 flex items-center justify-between text-gray-400 pr-2">
            <span className="font-semibold text-rose-400">A3</span>
            <div className="flex gap-1.5 text-[10px]">
              <FaVolumeUp className="text-rose-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex-1 relative h-8 bg-gray-900/60 rounded border border-gray-800 flex items-center px-1 overflow-hidden">
            <div className="absolute inset-0 bg-rose-950/50 border border-rose-500/40 rounded flex items-center px-3">
              <span className="text-[10px] text-rose-200">
                Cinematic_Electronic_Build_140BPM (Ducked under dialogue)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
