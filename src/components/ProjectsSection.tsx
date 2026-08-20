"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/BrandIcons";
import { ExternalLink, ShoppingBag, Pill, Utensils, Laptop, GraduationCap } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SuperApp — EdTech & Scholarship Platform",
      category: "EdTech & AI Superapp",
      icon: GraduationCap,
      description: "An all-in-one superapp connecting EdTech and scholarship discovery — offering interactive tutoring, test prep modules, coding programs, and intelligent scholarship matching in a unified dashboard.",
      tags: ["Next.js", "Node.js", "AI Matching", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://scholarpass.org",
      githubUrl: "https://github.com/shofiahmed69",
      featured: true,
    },
    {
      title: "Pharmacy Management System",
      category: "Full-Stack Enterprise",
      icon: Pill,
      description: "Comprehensive pharmacy operation platform handling real-time inventory tracking, digital prescription processing, automated billing, and detailed analytics reporting.",
      tags: ["React.js", "Express.js", "MongoDB", "Chart.js", "Node.js"],
      demoUrl: "https://frontend-xi-three-35.vercel.app/login",
      githubUrl: "https://github.com/shofiahmed69",
      featured: false,
    },
    {
      title: "Restaurant POS System",
      category: "Point-of-Sale Platform",
      icon: Utensils,
      description: "High-speed restaurant management software featuring live order management, table tracking, instant receipt generation, sales reporting, and staff access roles.",
      tags: ["React.js", "Node.js", "WebSockets", "MySQL", "Tailwind"],
      demoUrl: "https://pos-management-web.vercel.app/",
      githubUrl: "https://github.com/shofiahmed69",
      featured: false,
    },
    {
      title: "Al-Libas BD E-Commerce Platform",
      category: "E-Commerce Solution",
      icon: ShoppingBag,
      description: "Full-featured online apparel & fashion e-commerce platform with real-time product filtering, secure payment processing, shopping cart, and order management.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://al-libasbd.com/",
      githubUrl: "https://github.com/shofiahmed69",
      featured: false,
    },
    {
      title: "PC Master BD — Online Gadget Shop",
      category: "Tech & Electronics Store",
      icon: Laptop,
      description: "High-performance online gadget and PC component store featuring dynamic tech catalog search, interactive cart management, and seamless checkout flow.",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://www.pcmasterbd.com/",
      githubUrl: "https://github.com/shofiahmed69",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-neutral-900 rounded border border-neutral-800">
          [ 04 // FEATURED PROJECTS ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Featured Applications
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Production systems engineered across EdTech, Enterprise POS, E-Commerce, and Management Systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="mono-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden"
            >
              {project.featured && (
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-white text-black text-[10px] font-mono font-bold uppercase">
                  Flagship
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 font-mono">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-black bg-white hover:bg-neutral-200 px-3 py-1.5 rounded transition-all"
                  >
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
