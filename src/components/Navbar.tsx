"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/experience" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "GitHub Repos", href: "/projects#github" },
    { name: "Awards", href: "/publications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 border-b border-neutral-800 py-3 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-white text-black flex items-center justify-center font-mono font-bold text-sm">
            SA
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight">
              Shofi Ahmed
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
              Full-Stack Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0F0F0F] px-4 py-1.5 rounded-full border border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-neutral-400 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-neutral-800 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Kazi_Shofi_Ahmed_CV (1).pdf"
            download
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase font-bold text-black bg-white hover:bg-neutral-200 rounded transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white bg-neutral-900 rounded border border-neutral-800"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#050505] border-b border-neutral-800 px-6 py-5 flex flex-col gap-4 mt-2 font-mono text-xs"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Kazi_Shofi_Ahmed_CV (1).pdf"
            download
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase font-bold text-black bg-white rounded mt-2"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
