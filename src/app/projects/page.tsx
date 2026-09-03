import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Engineering Portfolio | Kazi Shofi Ahmed",
  description:
    "Explore full-stack web applications, open-source repositories, and software engineering projects built by Kazi Shofi Ahmed using Next.js, NestJS, Flutter, PostgreSQL, and Node.js.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/projects`,
  },
};

export default function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${SITE_CONFIG.url}/projects`,
    name: "Projects & Open Source Repositories by Kazi Shofi Ahmed",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareSourceCode",
          name: "SkillSync - AI Job Matching Platform",
          programmingLanguage: "TypeScript, NestJS, Next.js",
          author: { "@id": `${SITE_CONFIG.url}/#person` },
        },
        {
          "@type": "SoftwareSourceCode",
          name: "ScholarPass Platform Features",
          programmingLanguage: "React, Node.js, PostgreSQL",
          author: { "@id": `${SITE_CONFIG.url}/#person` },
        },
      ],
    },
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-neutral-100 overflow-x-hidden pt-20">
      <JsonLd data={projectsSchema} />
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-white text-center font-mono mb-4">
          Software Projects & Open Source
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto text-sm sm:text-base mb-8">
          Featured engineering work, AI-driven platforms, cross-platform apps, and open-source GitHub repositories built by Kazi Shofi Ahmed.
        </p>
      </div>

      <ProjectsSection />
      <GitHubSection />
      <Footer />
    </main>
  );
}
