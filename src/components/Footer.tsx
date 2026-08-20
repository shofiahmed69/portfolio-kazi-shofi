"use client";

import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-neutral-900 bg-black py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white text-black font-bold flex items-center justify-center text-xs">
            SA
          </div>
          <div>
            <span className="font-bold text-xs text-white block">Kazi Shofi Ahmed</span>
            <span className="text-[11px] text-neutral-500 block">
              © {new Date().getFullYear()} Minimalist Portfolio.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shofiahmed69"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-neutral-400 hover:text-white bg-neutral-950 rounded border border-neutral-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/shofi-ahmed-sh351"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-neutral-400 hover:text-white bg-neutral-950 rounded border border-neutral-800 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-950 rounded border border-neutral-800 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
