"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "frex19shofi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-3 py-1 bg-[#0F0F0F] rounded border border-neutral-800">
          [ 07 // CONTACT ]
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Get In Touch
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light">
          Open for full-stack software engineering opportunities, collaborations, and projects.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mono-card p-8 rounded-xl flex flex-col items-center text-center space-y-6"
        >
          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold">
            <Mail className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Let&apos;s Connect</h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-md mx-auto">
              Feel free to send an email or connect with me directly through GitHub or LinkedIn.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="w-full p-4 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-between font-mono max-w-md">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white">{email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded bg-[#0F0F0F] hover:bg-neutral-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 border border-neutral-800"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <MapPin className="w-4 h-4 text-white" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Direct Social Links */}
          <div className="pt-6 border-t border-neutral-800 w-full flex items-center justify-center gap-4 font-mono">
            <a
              href="https://github.com/shofiahmed69"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-white hover:bg-neutral-200 rounded transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shofi-ahmed-sh351"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0F0F0F] hover:bg-neutral-800 rounded border border-neutral-800 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-white" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
