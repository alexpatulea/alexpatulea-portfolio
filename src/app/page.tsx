'use client';
import { useState } from 'react'; // Importăm pentru a gestiona mesajul "Copied"
import { motion, AnimatePresence } from 'framer-motion';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience'; 
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copiem adresa în clipboard
    navigator.clipboard.writeText("alexpatulea21@gmail.com");
    setCopied(true);
    
    // Mesajul dispare după 2 secunde
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a2e_0%,#0a0a0a_100%)] z-0" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-cyan-500 font-mono mb-4 text-sm tracking-widest uppercase">
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Alexandru Patulea
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              I am an <span className="text-white">Automation & Applied Informatics</span> student 
              focused on building scalable full-stack applications and intelligent systems.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8 justify-center relative z-20">
            <a 
              href="#projects" 
              className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(8,145,178,0.3)]"
            >
              View My Work
            </a>
            <a 
              href="/Alexandru_Patulea_CV.pdf" // Numele fișierului tău din folderul public
              download="Alexandru_Patulea_CV.pdf" // Forțează descărcarea
              className="px-10 py-4 border border-cyan-600 text-cyan-500 hover:bg-cyan-600/10 rounded-full font-bold transition-all transform hover:scale-105 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </a>


            <div className="flex gap-8 items-center">
              {/* GitHub */}
              <a href="https://github.com/alexpatulea" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ioan-alexandru-patulea-b0b7573bb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5] transition-all transform hover:scale-110">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>

              {/* Mail - Cu funcție de Copy și feedback vizual */}
              <div className="relative">
                <a 
                  href="mailto:alexpatulea21@gmail.com" 
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110 block"
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                
                <AnimatePresence>
                  {copied && (
                    <motion.span 
                      
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: -10 }}
                      exit={{ opacity: 0 }}
                      
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-400 text-xs font-mono whitespace-nowrap px-2 py-1 bg-slate-900/80 rounded"
                    >
                      Email copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 z-10">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        </div>
      </main>

      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}