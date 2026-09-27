import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ onOpenShowreel }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tools", href: "#skills" },
    { name: "Works", href: "#projects" },
    { name: "Posters", href: "#gallery" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Island Navbar as shown in reference design */}
      <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl shadow-gray-200/50 rounded-full px-3 sm:px-5 py-2 flex items-center justify-between pointer-events-auto">
          {/* Logo Badge (✦ Samson Donald I EDITOR) */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-semibold shadow-sm">
              <span className="text-yellow-400 text-xs">✦</span>
              <span className="tracking-tight whitespace-nowrap">Samson Donald I</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-500 border border-red-200 text-[10px] font-bold tracking-wider uppercase font-mono">
              EDITOR
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-black transition-colors duration-200 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenShowreel}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200/60 text-xs font-semibold transition"
            >
              <FaPlay className="text-[9px]" />
              <span>Showreel</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black hover:bg-gray-800 text-white text-xs font-semibold shadow-md transition group"
            >
              <span>Let's Talk</span>
              <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-200 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/98 border border-gray-200 rounded-3xl p-6 md:hidden shadow-2xl backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-800">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block hover:text-purple-600 transition py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShowreel();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold"
              >
                <FaPlay className="text-[10px]" /> Watch 2026 Showreel
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-black text-white text-xs font-semibold"
              >
                Let's Talk ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}