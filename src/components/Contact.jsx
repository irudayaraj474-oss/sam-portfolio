import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp, 
  FaCopy, 
  FaCheck
} from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const emailAddress = "samson143.8508975373@gmail.com";
  const phoneNumber = "+918940645818";
  const formattedPhone = "+91 89406 45818";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 overflow-hidden cinema-grid"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-mono font-medium mb-4"
          >
            <span>// DIRECT COMMUNICATION</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair text-slate-950 tracking-tight"
          >
            Let's Make Your Footage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              Unskippable & Cinematic
            </span>
          </motion.h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-xl mx-auto font-montserrat">
            Ready to scale your YouTube watch time, launch an ad campaign, or produce viral shorts? Reach out directly below.
          </p>
        </div>

        {/* Centered Direct Contact Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-2xl mx-auto"
        >

          {/* Email Card with Copy Button */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 text-lg flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-slate-500 font-medium block">DIRECT EMAIL</span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="block text-sm sm:text-base font-semibold text-slate-900 hover:text-purple-600 transition truncate"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="self-start sm:self-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition flex items-center gap-2 font-medium border border-slate-200 cursor-pointer"
              title="Copy email"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/918940645818?text=${encodeURIComponent("Hi Samson Donald I, I'm interested in working with you on video editing!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xl flex-shrink-0">
                <FaWhatsapp />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 font-medium block">WHATSAPP CHAT</span>
                <p className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition">
                  {formattedPhone}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">
              Chat Now →
            </span>
          </a>

          {/* Phone Call Card */}
          <a
            href={`tel:${phoneNumber}`}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 text-base flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 font-medium block">PHONE CALL</span>
                <p className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-cyan-600 transition">
                  {formattedPhone}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-600 font-semibold group-hover:translate-x-1 transition-transform">
              Call Now →
            </span>
          </a>

          {/* Social Channels Row */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href="https://linkedin.com/in/i-samson-donald-7b2743349"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition flex items-center justify-center gap-3 group shadow-sm"
            >
              <FaLinkedin className="text-blue-600 text-xl group-hover:scale-110 transition" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                LinkedIn Profile
              </span>
            </a>

            <a
              href="https://github.com/irudayaraj474-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-500 transition flex items-center justify-center gap-3 group shadow-sm"
            >
              <FaGithub className="text-slate-800 text-xl group-hover:scale-110 transition" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-purple-600">
                GitHub Portfolio
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}