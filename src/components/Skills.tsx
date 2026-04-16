'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "PHP (Laravel)", "MySQL"]
  },
  {
    title: "Programming Languages",
    skills: ["C/C++", "Python", "C#", "JavaScript", "Java"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "Linux", "Postman",]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container aliniat la dreapta */}
        <div className="flex flex-col items-end text-right">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2">
              My Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Technical Skills
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h4 className="text-white text-xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h4>
                
                {/* Aliniem tag-urile de skills tot spre dreapta */}
                <div className="flex flex-wrap justify-end gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-900 border border-slate-800 text-gray-300 rounded-lg text-sm font-mono hover:border-cyan-500 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}