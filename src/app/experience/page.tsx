import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience & Skills | Kazi Shofi Ahmed",
  description:
    "Detailed engineering roles and technical competencies of Kazi Shofi Ahmed: CTO of Jantra Soft, Full-Stack Developer at ScholarPass (US), proficient in NestJS, Next.js, Flutter, and PostgreSQL.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/experience`,
  },
};

export default function ExperiencePage() {
  const expSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    url: `${SITE_CONFIG.url}/experience`,
    name: "Professional Experience of Kazi Shofi Ahmed",
    mainEntity: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      jobTitle: "CTO & Full-Stack Software Engineer",
      worksFor: [
        { "@type": "Organization", name: "Jantra Soft" },
        { "@type": "Organization", name: "ScholarPass" },
      ],
    },
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-neutral-100 overflow-x-hidden pt-20">
      <JsonLd data={expSchema} />
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-white text-center font-mono mb-4">
          Professional Work & Skill Matrix
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto text-sm sm:text-base mb-8">
          Career history as CTO at Jantra Soft and Full Stack Developer at US-based ScholarPass, alongside mastery in web and mobile engineering technologies.
        </p>
      </div>

      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}
