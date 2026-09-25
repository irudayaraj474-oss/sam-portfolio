import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-slate-600 px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/90 overflow-hidden">
      {/* Soft Glow Effects */}
      <div className="absolute w-96 h-96 bg-purple-200/20 blur-[160px] top-0 left-10 pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-cyan-200/20 blur-[160px] bottom-0 right-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-950 tracking-tight font-display">
                SAMSON <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">DONALD</span>
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Lead Video Editor & Motion Graphics Designer. Transforming raw footage into viral retention-engineered stories, commercial advertisements, and cinematic color grades.
            </p>

            <div className="pt-2 flex items-center gap-3 text-lg">
              <a
                href="https://wa.me/918940645818"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 text-slate-700 flex items-center justify-center transition shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:samson143.8508975373@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 hover:border-purple-500 hover:text-purple-600 text-slate-700 flex items-center justify-center transition shadow-sm"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://linkedin.com/in/i-samson-donald-7b2743349"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 flex items-center justify-center transition shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/irudayaraj474-oss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 hover:border-purple-500 hover:text-purple-600 text-slate-700 flex items-center justify-center transition shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-900">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#about" className="hover:text-purple-600 transition">About & Philosophy</a></li>
              <li><a href="#timeline" className="hover:text-purple-600 transition">NLE Timeline Engine</a></li>
              <li><a href="#skills" className="hover:text-purple-600 transition">Post-Production Arsenal</a></li>
              <li><a href="#projects" className="hover:text-purple-600 transition">Featured Video Works</a></li>
              <li><a href="#gallery" className="hover:text-purple-600 transition">Thumbnails & Key Art</a></li>
              <li><a href="#workflow" className="hover:text-purple-600 transition">5-Stage Pipeline</a></li>
              <li><a href="#resume" className="hover:text-purple-600 transition">Resume & Experience</a></li>
              <li><a href="#contact" className="hover:text-purple-600 transition">Book a Project</a></li>
            </ul>
          </div>

          {/* Standards & Specs */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-900">
              Master Delivery Specs
            </h3>
            <div className="space-y-1.5 text-xs text-slate-600 font-mono">
              <p>• Apple ProRes 422 HQ / Rec.709</p>
              <p>• 4K UHD 3840×2160 & 1080×1920 9:16</p>
              <p>• -14 LUFS Dialogue Audio Mastering</p>
              <p>• DaVinci Wide Gamut Color Science</p>
              <p>• 24 - 48 Hour Rush Delivery SLA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Samson Donald. All post-production rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-slate-900 transition font-mono cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  );
}