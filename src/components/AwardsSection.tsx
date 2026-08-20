"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      title: "Technovation 2025 Hackathon",
      rank: "Champion",
      scope: "National",
      organization: "Technovation National Org",
      icon: Trophy,
      badge: "1st Place Gold",
    },
    {
      title: "Programming Hero Signature Hackathon",
      rank: "Champion",
      scope: "National",
      organization: "Programming Hero Community",
      icon: Trophy,
      badge: "1st Place Gold",
    },
    {
      title: "ARC 2.0 – AUST Rover Challenge",
      rank: "Champion",
      scope: "National",
      organization: "Ahsanullah Univ. of Science & Tech",
      icon: Trophy,
      badge: "1st Place Gold",
    },
    {
      title: "IUT Automech 2025 Hackathon",
      rank: "Runner-Up",
      scope: "International",
      organization: "Islamic University of Technology (IUT)",
      icon: Medal,
      badge: "2nd Place Silver",
    },
    {
      title: "Software Exhibition – AUST CSE Fest",
      rank: "Runner-Up",
      scope: "National",
      organization: "AUST CSE Department",
      icon: Medal,
      badge: "2nd Place Silver",
    },
    {
      title: "6th ECE Day Project Showcase",
      rank: "Runner-Up",
      scope: "National",
      organization: "Institute of Science and Technology (IST)",
      icon: Medal,
      badge: "2nd Place Silver",
    },
    {
      title: "Innovation Sparks",
      rank: "Bronze Winner",
      scope: "International",
      organization: "World Young Scientist Organization",
      icon: Award,
      badge: "3rd Place Bronze",
    },
    {
      title: "International Science & Innovation Fair",
      rank: "Bronze Winner",
      scope: "International",
      organization: "Indonesia Young Scientist Assoc. (IYSA)",
      icon: Award,
      badge: "3rd Place Bronze",
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-neutral-900 rounded border border-neutral-800">
          [ 06 // HONORS & HACKATHONS ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Awards & Competition Podiums
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Track record of winning 8+ major national and international hackathons.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="mono-card p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-neutral-800 uppercase">
                    {item.scope}
                  </span>
                </div>

                <span className="text-xs font-extrabold uppercase font-mono tracking-wider text-white block mb-1">
                  {item.badge}
                </span>

                <h3 className="text-sm font-bold text-white mb-2 font-mono">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  {item.organization}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                <span>COMPETITION</span>
                <span>VERIFIED</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
