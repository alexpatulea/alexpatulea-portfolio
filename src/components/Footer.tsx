'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900/50 bg-[#0a0a0a] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Partea Stângă: Copyright & Credite */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-2">
              Designed & Developed by
            </p>
            <p className="text-white font-bold text-lg">
              Alexandru Patulea <span className="text-cyan-500">.</span>
            </p>
            <p className="text-gray-600 text-xs mt-2 font-mono">
              © {currentYear} — Built with Next.js & Tailwind
            </p>
          </div>

          {/* Partea Dreaptă: Social Links (Reutilizăm stilul tău) */}
          <div className="flex gap-6 items-center">
            <a 
              href="https://github.com/alexpatulea" 
              target="_blank" 
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ioan-alexandru-patulea-b0b7573bb/" 
              target="_blank" 
              className="text-gray-500 hover:text-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
           
          </div>

        </div>

        {/* Un mic indicator vizual la final de tot */}
        <div className="mt-12 flex justify-center">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}