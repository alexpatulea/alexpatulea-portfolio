'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-20 bg-[#0a0a0a] text-white px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan-500 font-mono text-xl">02.</span> Experience
        </h2>

        <div className="border-l-2 border-slate-800 pl-8 ml-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Bulina de pe timeline */}
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
            
            <h3 className="text-xl font-bold">Software Development Engineering Intern</h3>
            <p className="text-cyan-400 font-mono text-sm mb-2">Soft Tehnica | June 2025 - Aug 2025</p>
            
            <ul className="text-gray-400 space-y-3 max-w-3xl">
              <li>• Built and deployed full-stack web features using Laravel and MVC architecture.</li>
              <li>• Developed secure authentication flows and role-based access control.</li>
              <li>• Optimized SQL queries and designed database schemas to improve performance.</li>
              <li>• Refactored legacy code to enhance maintainability and scalability.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}