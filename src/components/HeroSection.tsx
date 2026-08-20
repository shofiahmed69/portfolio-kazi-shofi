"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Mail, ArrowRight, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-28 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 w-full">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left"
        >
          {/* Minimal Monospaced Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded border border-neutral-800 bg-[#0F0F0F] text-neutral-300 text-xs font-mono w-fit">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Full-Stack Developer @ ScholarPASS</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-neutral-400 text-xs sm:text-sm font-mono uppercase tracking-widest">
              Full-Stack Software Engineer
            </h2>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight lg:leading-none">
              Kazi Shofi Ahmed
            </h1>
            <p className="text-base sm:text-2xl font-light text-neutral-300 pt-1 flex items-center gap-2">
              <Code className="w-5 h-5 text-neutral-400 shrink-0 inline" />
              <span>Frontend, Backend & Mobile Application Engineering</span>
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed max-w-2xl font-normal">
            Full-Stack Software Engineer with hands-on experience in frontend, backend, and mobile development. Multi-time national & international hackathon champion focused on building scalable, high-performance software products.
          </p>

          {/* Quick Stats Pill */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 py-2 max-w-lg border-y border-neutral-800 my-1 sm:my-2">
            <div className="py-1 sm:py-2">
              <span className="block text-xl sm:text-2xl font-extrabold text-white font-mono">8+</span>
              <span className="text-[10px] sm:text-xs text-neutral-400 font-mono uppercase">Awards & Podiums</span>
            </div>
            <div className="py-1 sm:py-2 border-l border-neutral-800 pl-3 sm:pl-4">
              <span className="block text-xl sm:text-2xl font-extrabold text-white font-mono">40+</span>
              <span className="text-[10px] sm:text-xs text-neutral-400 font-mono uppercase">Full-Stack Repos</span>
            </div>
            <div className="py-1 sm:py-2 border-l border-neutral-800 pl-3 sm:pl-4">
              <span className="block text-xl sm:text-2xl font-extrabold text-white font-mono">BSc</span>
              <span className="text-[10px] sm:text-xs text-neutral-400 font-mono uppercase">Software Eng.</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 sm:px-6 py-3 text-xs font-mono uppercase font-bold text-black bg-white hover:bg-neutral-200 rounded transition-all active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#github"
              className="flex items-center gap-2 px-5 sm:px-6 py-3 text-xs font-mono uppercase font-semibold text-white bg-[#0F0F0F] hover:bg-neutral-800 border border-neutral-800 rounded transition-all"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>GitHub Repos</span>
            </a>

            <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2">
              <a
                href="https://github.com/shofiahmed69"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 text-neutral-400 hover:text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/shofi-ahmed-sh351"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 text-neutral-400 hover:text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:frex19shofi@gmail.com"
                className="p-2.5 sm:p-3 text-neutral-400 hover:text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
                title="Email Contact"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image Column - Positioned first on mobile so whole formal photo appears in first viewport view */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-[4/5] rounded-xl p-1 bg-[#0F0F0F] border border-neutral-800 shadow-2xl group overflow-hidden">
            {/* Natural Original Color Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
              <Image
                src="/shofi_formal.png"
                alt="Kazi Shofi Ahmed Formal Photo"
                fill
                priority
                className="object-cover object-top transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
