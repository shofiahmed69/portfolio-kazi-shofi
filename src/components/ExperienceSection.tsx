"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, Check } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "ScholarPASS",
      companyUrl: "https://scholarpass.org",
      role: "Full-Stack Developer",
      location: "US-based EdTech Company | Hybrid",
      period: "Current Role",
      bullets: [
        "Architecting full-stack features for an educational platform serving students with tutoring, test prep modules, coding programs, and scholarship discovery engines.",
        "Engineering high-performance REST & NestJS microservices and optimizing MongoDB/PostgreSQL database indexing for fast query response.",
        "Designing polished, responsive web interfaces in Next.js and React with a focus on web performance, modern UX, and smooth user onboarding.",
        "Developing cross-platform mobile functionality with Flutter to sync student progress seamlessly.",
      ],
      tags: ["Next.js", "NestJS", "Node.js", "MongoDB", "PostgreSQL", "Flutter", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-[#0F0F0F] rounded border border-neutral-800">
          [ 03 // WORK EXPERIENCE ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Professional Experience
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Hands-on software development experience building real-world enterprise EdTech applications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono-card p-8 rounded-xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white font-mono">{exp.role}</h3>
                  <span className="px-2.5 py-0.5 rounded bg-white text-black text-xs font-mono font-bold uppercase">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-2">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-bold text-white hover:underline"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="flex items-center gap-1 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 mb-6">
              {exp.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">{bullet}</p>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#0F0F0F] text-neutral-300 border border-neutral-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
