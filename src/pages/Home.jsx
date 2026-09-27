import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Workflow from "../components/Workflow";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ShowreelModal from "../components/ShowreelModal";

function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [activeProjectForModal, setActiveProjectForModal] = useState(null);

  const masterShowreel = {
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
    // Connected to your authentic 4K 60FPS video on Firebase Storage
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/manavai-2adb5.firebasestorage.app/o/Samson-Portfolio%2F4k%2060fps.mp4?alt=media&token=9e025596-d262-401f-8f47-9c433b44505f",
    thumbnail: "/thumbnails/4k_60fps.jpg"
  };

  const handleOpenShowreel = () => {
    setActiveProjectForModal(masterShowreel);
    setShowreelOpen(true);
  };

  const handleSelectProject = (project) => {
    setActiveProjectForModal(project);
    setShowreelOpen(true);
  };

  const handleCloseModal = () => {
    setShowreelOpen(false);
    setActiveProjectForModal(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenShowreel={handleOpenShowreel} />

      {/* Hero Section with interactive timeline */}
      <Hero onOpenShowreel={handleOpenShowreel} />

      {/* Post-Production Philosophy & About */}
      <About />

      {/* Software Arsenal & Technical Stack */}
      <Skills />

      {/* Featured Video Works & Showcase with Filter Tabs */}
      <Projects onSelectProject={handleSelectProject} />

      {/* Commercial Posters, Thumbnails & Key Visuals */}
      <Gallery />

      {/* 5-Stage Post-Production Pipeline */}
      <Workflow />

      {/* Professional Resume, Experience & Qualifications */}
      <Resume />

      {/* Client Booking & Inquiries */}
      <Contact />

      {/* Studio Footer */}
      <Footer />

      {/* Interactive 4K Video Preview Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={handleCloseModal}
        project={activeProjectForModal}
      />
    </div>
  );
}

export default Home;