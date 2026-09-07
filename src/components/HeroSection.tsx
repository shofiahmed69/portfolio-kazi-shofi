"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Mail, ArrowRight, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-14 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-12 items-center z-10 w-full my-auto">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:col-span-7 flex flex-col gap-2 sm:gap-3.5 lg:gap-4 text-left"
        >
          {/* Minimal Monospaced Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 rounded border border-neutral-800 bg-[#0F0F0F] text-neutral-300 text-[10px] sm:text-xs font-mono w-fit">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse" />
            <span>Full-Stack Developer @ ScholarPASS</span>
          </div>

          {/* Heading */}
          <div className="space-y-0.5 sm:space-y-1.5">
            <h2 className="text-neutral-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
              Full-Stack Software Engineer
            </h2>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight break-words">
              Kazi Shofi Ahmed
            </h1>
            <p className="text-[11px] sm:text-base lg:text-xl font-light text-neutral-300 flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 shrink-0 inline" />
              <span>Frontend, Backend & Mobile Application Engineering</span>
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-neutral-400 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed max-w-2xl font-normal">
            Full-Stack Software Engineer with hands-on experience in frontend, backend, and mobile development. Multi-time national & international hackathon champion focused on building scalable, high-performance software products.
          </p>

          {/* Quick Stats Pill */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 py-1 sm:py-1.5 max-w-lg border-y border-neutral-800 my-0.5 sm:my-1">
            <div className="py-0.5 sm:py-1">
              <span className="block text-sm sm:text-lg lg:text-xl font-extrabold text-white font-mono">8+</span>
              <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono uppercase">Awards & Podiums</span>
            </div>
            <div className="py-0.5 sm:py-1 border-l border-neutral-800 pl-2 sm:pl-3">
              <span className="block text-sm sm:text-lg lg:text-xl font-extrabold text-white font-mono">40+</span>
              <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono uppercase">Full-Stack Repos</span>
            </div>
            <div className="py-0.5 sm:py-1 border-l border-neutral-800 pl-2 sm:pl-3">
              <span className="block text-sm sm:text-lg lg:text-xl font-extrabold text-white font-mono">BSc</span>
              <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono uppercase">Software Eng.</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
            <a
              href="#projects"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-mono uppercase font-bold text-black bg-white hover:bg-neutral-200 rounded transition-all active:scale-95 w-full xs:w-auto text-center"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href="#github"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-mono uppercase font-semibold text-white bg-[#0F0F0F] hover:bg-neutral-800 border border-neutral-800 rounded transition-all w-full xs:w-auto text-center"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span>GitHub Repos</span>
            </a>

            <div className="flex items-center gap-2 pt-0.5 xs:pt-0">
              <a
                href="https://github.com/shofiahmed69"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-2.5 text-neutral-400 hover:text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shofi-ahmed-sh351/"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-2.5 text-neutral-400 hover:text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="mailto:frex19shofi@gmail.com"
                className="p-2 sm:p-2.5 text-neutral-400 hover:text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
                title="Email Contact"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-[150px] xs:max-w-[180px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[320px] xl:max-w-[360px] aspect-[4/5] rounded-xl p-1 bg-[#0F0F0F] border border-neutral-800 shadow-2xl group overflow-hidden">
            {/* Natural Original Color Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
              <Image
                src="/shofi_formal.png"
                alt="Kazi Shofi Ahmed Formal Photo"
                fill
                priority
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 250px, 360px"
                className="object-cover object-top transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
