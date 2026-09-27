import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaEye, FaTag } from "react-icons/fa";

// Existing designs
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";

// New SRM Gold & Diamonds and Digi Gold posters
import srmSavingScheme from "../assets/images/srm_saving_scheme.jpg";
import srmAppRed from "../assets/images/srm_app_red.jpg";
import srmDigiGoldFirefly from "../assets/images/srm_digi_gold_firefly.jpg";
import srmNecklaceRate from "../assets/images/srm_necklace_rate.jpg";
import srmRateSep from "../assets/images/srm_rate_sep.jpg";
import srmRingRate from "../assets/images/srm_ring_rate.jpg";
import srmElephantWealth from "../assets/images/srm_elephant_wealth.jpg";
import srmFamilySchemes from "../assets/images/srm_family_schemes.jpg";

const graphicDesignWorks = [
  { 
    id: "srm-elephant-wealth",
    img: srmElephantWealth, 
    title: "The SRM Gold & Diamonds — 'Great Wealth Starts Small'", 
    client: "The SRM Gold & Diamonds",
    tag: "Metaphorical Fintech Poster",
    sector: "Fintech & Mobile Apps",
    ctr: "+8.4% Scheme Awareness",
    category: "Campaign Poster & Digi Gold Key Art",
    description: "Symbolic brand campaign illustrating that wealth is built one step, one day, one savings at a time. Features a majestic elephant leaving golden footprints leading to a physical SRM coin alongside the SRM Digi Gold mobile app."
  },
  { 
    id: "srm-family-schemes",
    img: srmFamilySchemes, 
    title: "SRM Digi Gold — 'Atchaya Gold & Family Savings Scheme'", 
    client: "The SRM Gold & Diamonds",
    tag: "Retail Family Scheme Ad",
    sector: "Fintech & Mobile Apps",
    ctr: "+9.5% In-Store Footfall",
    category: "Retail Launch & Multi-Scheme Art",
    description: "High-impact retail promotional creative highlighting multiple gold schemes (Atchaya Gold, Digi Gold, Gold Bond) with a cheerful family, real-time gold rates, store address in Manapparai, and app store download links."
  },
  { 
    id: "srm-saving-scheme",
    img: srmSavingScheme, 
    title: "SRM Digi Gold — '11 Months Regular Saving Scheme'", 
    client: "The SRM Gold & Diamonds",
    tag: "Gold Savings Campaign",
    sector: "Fintech & Mobile Apps",
    ctr: "+9.1% Scheme Signups",
    category: "Campaign Poster & Mobile App Marketing",
    description: "High-converting marketing poster combining nature motifs with digital fintech savings. Featuring a golden weaver bird, woven nest, smartphone app UI, scattered gold coins, and QR app store download callout."
  },
  { 
    id: "srm-app-red",
    img: srmAppRed, 
    title: "SRM Digi Gold — 'Just One Tap' Launch Ad", 
    client: "The SRM Gold & Diamonds",
    tag: "Fintech App Campaign",
    sector: "Fintech & Mobile Apps",
    ctr: "+8.6% App Installs",
    category: "Digital Ad & App UI Showcase",
    description: "High-converting digital ad creative engineered for the SRM Digi Gold App launch. Featuring 3D gold coins, glowing piggy bank, smartphone UI mockup, and high-impact CTA hierarchy."
  },
  { 
    id: "srm-digi-gold-firefly",
    img: srmDigiGoldFirefly, 
    title: "SRM Digi Gold — 'One Light Leads to Gold'", 
    client: "The SRM Gold & Diamonds",
    tag: "Conceptual Brand Ad",
    sector: "Fintech & Mobile Apps",
    ctr: "+7.2% Lead Signups",
    category: "Brand Storytelling & Mobile UX",
    description: "Conceptual brand campaign blending metaphorical fantasy lighting with mobile fintech savings. Features a luminous firefly trail leading directly into the SRM Digi Gold app interface."
  },
  { 
    id: "srm-necklace-rate",
    img: srmNecklaceRate, 
    title: "The SRM Gold & Diamonds — 'Minimal. Elegant. Timeless.'", 
    client: "The SRM Gold & Diamonds",
    tag: "Luxury Jewelry Campaign",
    sector: "Jewelry & Luxury Brands",
    ctr: "+5.4% Store Footfall",
    category: "Daily Rate Card & Luxury Social Art",
    description: "Premium editorial rate card featuring high-end model retouching, geometric diamond necklace details, delicate botanical line art, and luxury typography for daily gold & silver rates."
  },
  { 
    id: "srm-rate-sep",
    img: srmRateSep, 
    title: "The SRM Gold & Diamonds — 'Timeless Elegance' Series", 
    client: "The SRM Gold & Diamonds",
    tag: "Editorial Rate Card",
    sector: "Jewelry & Luxury Brands",
    ctr: "+4.9% Social Engagement",
    category: "High-End Retail Print & Social",
    description: "Clean split-column layout balancing modern typography on warm ivory stock with deep obsidian jewelry photography highlights (model, intricate gemstone necklace, and sapphire ring)."
  },
  { 
    id: "srm-ring-rate",
    img: srmRingRate, 
    title: "The SRM Gold & Diamonds — 'Treasure Forever' Edition", 
    client: "The SRM Gold & Diamonds",
    tag: "Jewelry Art Direction",
    sector: "Jewelry & Luxury Brands",
    ctr: "+5.8% In-Store Inquiries",
    category: "Luxury Daily Social Creative",
    description: "Sophisticated social media rate announcement highlighting handcrafted gold rings with soft daylight hand modeling, botanical line accents, and rich aubergine accents."
  },
  { 
    id: "ak-gold",
    img: p3, 
    title: "AK Gold — Festival & Retail Promotion", 
    client: "AK Gold",
    tag: "Jewelry Commercial",
    sector: "Jewelry & Luxury Brands",
    ctr: "+5.1% Walk-in Leads",
    category: "Retail Brand Packaging",
    description: "Luxury commercial advertisement for festival jewelry offers focusing on warm gold tones, rich shadows, and premium typographic hierarchy."
  },
  { 
    id: "ideal-ias-1",
    img: p1, 
    title: "Ideal IAS Academy — Admission Campaign", 
    client: "Ideal IAS Academy",
    tag: "Statewide Campaign",
    sector: "Retail & Education",
    ctr: "+4.2% CTR Boost",
    category: "Educational Poster & Key Visual",
    description: "High-visibility admission poster and social creative engineered with bold typography, high-contrast palette, and authoritative layout to drive student conversions."
  },
  { 
    id: "ideal-ias-2",
    img: p2, 
    title: "Ideal IAS Academy — Brand Outreach", 
    client: "Ideal IAS Academy",
    tag: "Brand Campaign",
    sector: "Retail & Education",
    ctr: "+3.8% Engagement",
    category: "Statewide Campaign Creative",
    description: "Multi-channel recruitment visual designed for print and digital advertising campaigns across Tamil Nadu with strategic information hierarchy."
  },
  { 
    id: "sri-murugan",
    img: p4, 
    title: "Sri Murugan — Commercial Launch", 
    client: "Sri Murugan Stores",
    tag: "Retail Launch",
    sector: "Retail & Education",
    ctr: "High Recall Rate",
    category: "Commercial Key Art",
    description: "High-contrast retail launch artwork designed for print circulation, digital display hoardings, and promotional marketing collateral."
  },
  { 
    id: "navi-mobiles",
    img: p5, 
    title: "Navi Mobiles — Festive Smartphone Mega-Sale", 
    client: "Navi Mobiles",
    tag: "Tech & Retail Ad",
    sector: "Retail & Education",
    ctr: "+6.4% Footfall Surge",
    category: "Electronics Marketing Creative",
    description: "Dynamic product packaging and offer poster designed to convert mobile buyers during peak festival season with punchy discount badges."
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeSector, setActiveSector] = useState("All Graphic Works");

  const sectors = [
    "All Graphic Works",
    "Jewelry & Luxury Brands",
    "Fintech & Mobile Apps",
    "Retail & Education"
  ];

  const filteredItems = activeSector === "All Graphic Works"
    ? graphicDesignWorks
    : graphicDesignWorks.filter(item => item.sector === activeSector);

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-purple-800 text-xs font-mono font-semibold mb-4"
          >
            <FaTag className="text-[10px]" />
            <span>// COMMERCIAL POSTERS & GRAPHIC DESIGN WORKS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-playfair text-slate-950 tracking-tight"
          >
            Commercial Posters, Key Art & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600">
              High-CTR Campaign Graphics
            </span>
          </motion.h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal font-montserrat">
            From luxury jewelry branding and fintech app launches to high-converting social key art. Click any poster to inspect in full resolution.
          </p>

          {/* Quick Metrics Ticker */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <span className="text-xl font-bold text-purple-600 font-display">13+</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Commercial Campaigns</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <span className="text-xl font-bold text-cyan-600 font-display">+9.1%</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Peak CTR Uplift</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <span className="text-xl font-bold text-amber-600 font-display">300 DPI</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Print & 4K Digital</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <span className="text-xl font-bold text-emerald-600 font-display">100%</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Brand Identity Focus</p>
            </div>
          </div>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeSector === sector
                  ? "bg-black text-white shadow-md"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between"
                onClick={() => setSelectedItem(item)}
              >
                <div>
                  {/* Image Container with Framing */}
                  <div className="relative overflow-hidden bg-slate-100 h-88 flex items-center justify-center p-3 pt-12">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-mono font-semibold truncate max-w-[170px]">
                        {item.tag}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold">
                        {item.ctr}
                      </span>
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                        <FaExpand className="text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-purple-600 font-semibold mb-1">
                      <span>{item.category}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-purple-600 transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] text-slate-600 font-medium">{item.client}</span>
                  <span className="text-purple-600 group-hover:text-black flex items-center gap-1 text-[11px] font-semibold transition">
                    Inspect Art <FaEye className="text-[10px]" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FULLSCREEN IMAGE INSPECTION MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedItem(null)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-gray-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-purple-600 font-mono font-medium">
                    {selectedItem.client} • {selectedItem.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-full text-gray-500 hover:text-black hover:bg-gray-200 transition"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* High-res Image Preview */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-900">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="max-h-[64vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Description Footer */}
              <div className="p-5 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-700 max-w-xl font-normal">
                  {selectedItem.description}
                </p>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-semibold">
                    {selectedItem.ctr}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                    {selectedItem.sector}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}