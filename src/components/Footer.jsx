import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaArrowUp 
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About & Philosophy", href: "#about" },
    { label: "NLE Timeline Engine", href: "#timeline" },
    { label: "Post-Production Arsenal", href: "#skills" },
    { label: "Featured Video Works", href: "#projects" },
    { label: "Thumbnails & Key Art", href: "#gallery" },
    { label: "5-Stage Pipeline", href: "#workflow" },
    { label: "Resume & Experience", href: "#resume" },
    { label: "Book a Project", href: "#contact" }
  ];

  const workflowSpecs = [
    "Apple ProRes 422 HQ",
    "4K & Vertical Reel Delivery",
    "-14 LUFS Audio Mastering",
    "DaVinci Color Workflow",
    "24–48 Hour Delivery"
  ];

  const socials = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-lg" />,
      href: "https://wa.me/918940645818",
      hoverClass: "hover:border-emerald-400/50 hover:text-emerald-400 hover:shadow-[0_0_16px_rgba(52,211,153,0.35)]"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-base" />,
      href: "mailto:samson143.8508975373@gmail.com",
      hoverClass: "hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-base" />,
      href: "https://linkedin.com/in/i-samson-donald-7b2743349",
      hoverClass: "hover:border-sky-400/50 hover:text-sky-400 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-base" />,
      href: "https://github.com/irudayaraj474-oss",
      hoverClass: "hover:border-purple-400/50 hover:text-purple-300 hover:shadow-[0_0_16px_rgba(168,85,247,0.35)]"
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: "#050816" }}
      className="relative text-[#94A3B8] px-4 sm:px-6 lg:px-8 py-20 border-t border-[rgba(56,189,248,0.12)] overflow-hidden font-sans select-none"
    >
      {/* Subtle Grid Texture (3% Opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      ></div>

      {/* Ambient Lighting Accents: Cyan Tech & Warm Luxury Gold */}
      <div className="absolute top-0 left-12 w-96 h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-12 w-96 h-96 bg-amber-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto z-10">
        {/* Main Three-Column Layout */}
        <div className="grid md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[rgba(56,189,248,0.12)]">
          {/* Column 1: Personal Branding (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-[26px] sm:text-[30px] font-bold text-[#F8FAFC] tracking-tight font-display leading-tight">
              SAMSON <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">DONALD</span>
            </h2>

            <div className="space-y-2">
              <p className="text-[13px] font-mono font-semibold tracking-wide text-cyan-400">
                Lead Video Editor • Motion Graphics Designer
              </p>
              <p className="text-[15px] text-[#94A3B8] leading-relaxed max-w-md font-normal">
                Transforming raw footage into premium commercials, viral short-form content, luxury jewellery campaigns, and cinematic brand stories.
              </p>
            </div>

            {/* Social Glassmorphism Buttons (44×44px, Rounded 14px, Cyan Glow) */}
            <div className="pt-2 flex items-center gap-3">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-[44px] h-[44px] rounded-[14px] bg-slate-900/60 border border-[rgba(56,189,248,0.15)] backdrop-blur-md text-slate-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-[3px] ${s.hoverClass}`}
                  aria-label={s.name}
                  title={s.name}
                >
                  <span className="transform transition-transform duration-300 group-hover:scale-[1.08]">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: EXPLORE Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-[12px] font-mono font-bold tracking-widest uppercase text-slate-400">
              EXPLORE
            </h3>

            <ul className="space-y-2.5 text-[14px] sm:text-[15px]">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-[#94A3B8] hover:text-cyan-400 transition-all duration-300 hover:translate-x-[4px] relative"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-sky-300 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CREATIVE WORKFLOW (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-[12px] font-mono font-bold tracking-widest uppercase text-slate-400">
              CREATIVE WORKFLOW
            </h3>

            <ul className="space-y-3 text-[14px] sm:text-[15px] font-mono text-[#94A3B8]">
              {workflowSpecs.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] shrink-0"></span>
                  <span className="hover:text-[#F8FAFC] transition-colors">{spec}</span>
                </li>
              ))}
            </ul>

            {/* Recruiter-ready signature banner */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-300/90 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>OPEN FOR SELECT COMMISSIONS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Recruiter Signature */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-[13px] font-mono text-[#94A3B8]">
          {/* Copyright Statement */}
          <p className="text-center md:text-left">
            © 2026 <span className="text-[#F8FAFC] font-semibold">Samson Donald</span> — Crafted with precision for modern brands.
          </p>

          {/* Personal Signature */}
          <p className="text-xs text-slate-400/80 italic font-sans tracking-wide text-center">
            Crafted frame by frame. Designed to be remembered.
          </p>

          {/* Back to Top with Rotating Arrow Interaction */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors font-mono cursor-pointer"
            aria-label="Back to Top"
          >
            <span className="tracking-wider text-[12px] font-semibold">BACK TO TOP</span>
            <span className="w-7 h-7 rounded-full bg-slate-900/80 border border-[rgba(56,189,248,0.18)] flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all">
              <FaArrowUp className="text-[10px] text-cyan-400 transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}