'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    slug: "tracknity",
    title: "Tracknity",
    description: "A high-performance fleet tracking system featuring real-time GPS monitoring and an integrated AI-powered assistant for automated user support.",
    tech: ["Laravel", "JavaScript", "MySQL", "AI Integration"],
    image: "/projects/tracknity/1.png",
  },
  {
    slug: "prediction-market",
    title: "MarketPulse",
    description: "A full-stack prediction market platform built for high-performance using Laravel. Features real-time odds calculation, automated payout logic, and a secure role-based admin system.",
    tech: ["Laravel", "JavaScript", "MySQL", "Real-time Updates", "REST API"],
    image: "/projects/prediction-market/1.png", 
  },
  {
    slug: "techify",
    title: "TechiFy",
    description: "Comprehensive inventory and financial management platform tailored for PC hardware reselling, focusing on profit margins and real-time stock analytics.",
    tech: ["PHP", "JavaScript", "MySQL", "Financial Reporting"],
    image: "/projects/techify/1.png",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-20 flex items-center gap-4">
          <span className="text-cyan-500 font-mono text-xl">01.</span> Featured Projects
        </h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              
              className="relative flex flex-col md:flex-row items-center bg-transparent rounded-3xl overflow-hidden group"
            >
              
              <div className="w-full md:w-1/2 p-8 md:p-12 z-20">
                <h3 className="text-sm font-mono text-cyan-500 mb-2 uppercase tracking-widest">
                  Featured Project
                </h3>
                <h4 className="text-4xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                {/* AM SCOS 'border border-slate-700' de aici */}
                <div className="bg-[#0f172a]/60 backdrop-blur-md p-6 rounded-xl shadow-2xl mb-6 md:-mr-20 relative z-30">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-400">
                  {project.tech.map(t => (
                    /* AM SCOS 'border border-slate-700' și de la skill-uri */
                    <span key={t} className="bg-slate-800/50 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Partea Dreaptă: Imagine + Fade + Buton */}
              <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
                {/* Gradientul de Fade */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent hidden md:block" />
                
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute bottom-8 right-8 z-20">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-110 shadow-xl"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}