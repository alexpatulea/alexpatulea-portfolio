'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'; 
import Image from 'next/image';

const projectsData = {
  "tracknity": {
    title: "Tracknity",
    subtitle: "Real-time Fleet Intelligence",
    description: "Developed a comprehensive fleet management system that leverages real-time GPS data and AI.",
    tech: ["Laravel", "MySQL", "Google Maps API", "OpenAI"],
    role: "Full Stack Developer",
    duration: "8 Months",
    github: "https://github.com/alexpatulea/Tracknity", 
    features: [
      { title: "Live Tracking", desc: "Sub-second latency GPS updates using WebSockets." },
      { title: "AI Chat Assistant", desc: "Intelligent chatbot for automated user support." },
      { title: "Analytics", desc: "Comprehensive reporting and data visualization." }
    ],
    images: ["/projects/tracknity/1.png", "/projects/tracknity/2.png", "/projects/tracknity/3.png", "/projects/tracknity/4.png", "/projects/tracknity/5.png", "/projects/tracknity/7.png"] 
  },
  "prediction-market": {
    title: "MarketPulse",
    subtitle: "High-Frequency Prediction Engine",
    description: "A decentralized prediction market built for performance and real-time engagement.",
    tech: ["Laravel", "PHP", "Docker", "PostgreSQL"],
    role: "Full Stack Developer",
    duration: "1 Month",
    github: "https://github.com/alexpatulea/Polymarket---Themeisle-project",
    features: [
      { title: "Real-time Odds", desc: "Dynamic pricing that reacts instantly to every bet." },
      { title: "Docker Ready", desc: "One-command deployment for the entire stack." },
      { title: "Public API", desc: "Full developer access for betting bots." }
    ],
    images: ["/projects/prediction-market/1.png", "/projects/prediction-market/2.png", "/projects/prediction-market/3.png", "/projects/prediction-market/4.png", "/projects/prediction-market/5.png"]
  },
  "techify": {
    title: "TechiFy",
    subtitle: "Next-Gen Inventory Management",
    description: "End-to-end solution for hardware resellers to track stock and calculate margins.",
    tech: ["PHP", "JavaScript", "MySQL", "Chart.js"],
    role: "Full Stack Developer",
    duration: "2 Months",
    github: "https://github.com/alexpatulea/TechiFy",
    features: [
      { title: "Profit Analytics", desc: "Real-time margin calculation for every component." },
      { title: "Auto-Reporting", desc: "One-click generation of financial statements." },
      { title: "Real-time updates", desc: "Instantaneous synchronization of inventory data." }
    ],
    images: ["/projects/techify/6.png", "/projects/techify/2.png", "/projects/techify/3.png", "/projects/techify/4.png", "/projects/techify/5.png"]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const project = projectsData[params.slug as keyof typeof projectsData];
  const [currentImg, setCurrentImg] = useState(0);

  // Slideshow automat - Schimbă poza la 5 secunde
  useEffect(() => {
    if (!project) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [project]);

  if (!project) return <div className="bg-black text-white h-screen flex items-center justify-center">Project not found</div>;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a2e_0%,#0a0a0a_100%)] z-0" />
        <div className="relative z-10 text-center px-6">
          <button 
            onClick={() => router.back()} 
            className="mb-12 text-cyan-500 font-mono flex items-center gap-2 mx-auto hover:gap-6 hover:text-white transition-all duration-300"
          >
            <span>←</span> 
            <span>Back to Portfolio</span>
          </button>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-bold mb-4">
            {project.title}
          </motion.h1>
          <p className="text-cyan-400 font-mono uppercase tracking-[0.3em]">{project.subtitle}</p>
        </div>
      </section>

      {/* 2. INFO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-slate-900 items-center">
          <div>
            <p className="text-gray-500 text-xs uppercase font-mono mb-2">Role</p>
            <p className="text-xl font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase font-mono mb-2">Duration</p>
            <p className="text-xl font-semibold">{project.duration}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase font-mono mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-x-4">
              {project.tech.map(t => <span key={t} className="text-cyan-400 font-medium">#{t}</span>)}
            </div>
          </div>
          <div className="flex justify-end">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl transition-all"
            >
              <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">View on GitHub</span>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-cyan-400 transition-colors">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
      </section>

      {/* 3. SLIDESHOW (Zoomed Out / object-contain) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative aspect-[16/10] bg-black/40 rounded-3xl overflow-hidden group border border-slate-800 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentImg} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.6 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image 
                src={project.images[currentImg]} 
                alt="Showcase" 
                fill 
                className="object-contain p-4" // object-contain oprește tăierea pozei
                priority 
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => setCurrentImg(prev => (prev === 0 ? project.images.length - 1 : prev - 1))} className="bg-black/60 p-4 rounded-full hover:bg-cyan-600 z-10"> ← </button>
            <button onClick={() => setCurrentImg(prev => (prev === project.images.length - 1 ? 0 : prev + 1))} className="bg-black/60 p-4 rounded-full hover:bg-cyan-600 z-10"> → </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImg ? 'w-6 bg-cyan-500' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHARACTERISTICS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold mb-16">Key Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.features.map((f, i) => (
            <div key={i} className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="text-cyan-500 mb-8 font-mono text-xl">0{i + 1}</div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}