"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, MapPin } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Jantra Software",
      subtitle: "Chief Technology Officer (CTO)",
      desc: "Directing software engineering for SaaS platforms, AI agent pipelines, mobile applications, and workflow automation.",
    },
    {
      icon: Briefcase,
      title: "ScholarPASS (US EdTech)",
      subtitle: "Full-Stack Developer (Hybrid)",
      desc: "Building adaptive learning modules, tutoring tools, API services, and relational/document database optimizations.",
    },
    {
      icon: GraduationCap,
      title: "BSc in Software Engineering",
      subtitle: "Noakhali Science & Tech Univ.",
      desc: "Degree candidate (2023 - 2027) studying Data Structures, Algorithms, Software Architecture, and Database Systems.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-[#0F0F0F] rounded border border-neutral-800">
          [ 01 // ABOUT ME ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          About Kazi Shofi Ahmed
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Software Engineering student at NSTU, CTO at Jantra Software, and Full-Stack Developer at ScholarPass based in Dhaka, Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="mono-card p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-[#0F0F0F] border border-neutral-700 flex items-center justify-center mb-5 text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 font-mono">{item.title}</h3>
                <span className="text-xs font-mono text-neutral-400 block mb-3">{item.subtitle}</span>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>ROLE</span>
                <span>VERIFIED RECORD</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Details Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 mono-card rounded-xl p-6 overflow-hidden font-mono text-xs sm:text-sm"
      >
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
            <span className="text-neutral-400 ml-2 text-xs">kazi_shofi_ahmed_entity.json</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-300">
          <div>
            <p className="text-white font-bold mb-1">// Factual Professional Background</p>
            <p className="text-neutral-400 leading-relaxed font-sans text-xs sm:text-sm">
              Kazi Shofi Ahmed is an active Software Engineering student at Noakhali Science and Technology University (NSTU). He serves as Chief Technology Officer (CTO) at Jantra Software (jantrasoft.online) and works as a Full-Stack Developer at US-based EdTech company ScholarPass (scholarpass.org).
            </p>
          </div>
          <div>
            <p className="text-white font-bold mb-1">// Engineering Focus</p>
            <p className="text-neutral-400 leading-relaxed font-sans text-xs sm:text-sm">
              Hands-on engineering across NestJS, Node.js, Next.js, React.js, PostgreSQL, MongoDB, Firebase, Flutter, and Python with a strong background in competitive programming and collegiate hackathons.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
