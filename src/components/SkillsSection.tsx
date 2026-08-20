"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Wrench, Check } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: Code2,
      skills: [
        { name: "Next.js" },
        { name: "React.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "HTML5 & CSS3" },
        { name: "Framer Motion" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "NestJS" },
        { name: "MongoDB & Mongoose" },
        { name: "PostgreSQL & MySQL" },
        { name: "Firebase" },
        { name: "REST APIs" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter & Dart" },
        { name: "Cross-Platform iOS & Android Apps" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Environments",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code & Cursor" },
        { name: "Antigravity Agent" },
        { name: "Android Studio" },
      ],
    },
  ];

  const categoriesList = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Tools" },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-[#0F0F0F] rounded border border-neutral-800">
          [ 02 // TECH STACK & SKILLS ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Technical Capabilities & Stack
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Core tech stack used across full-stack applications, mobile apps, and databases.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono">
        {categoriesList.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-4 py-2 text-xs rounded border transition-all ${
              activeCategory === tab.id
                ? "bg-white text-black border-white font-bold"
                : "bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid - Clean layout without fake AI levels or descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mono-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                <div className="p-2 rounded bg-[#0F0F0F] text-white border border-neutral-800">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-mono">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded bg-neutral-950 border border-neutral-800 flex items-center gap-2.5"
                  >
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span className="text-xs font-bold text-white font-mono">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
