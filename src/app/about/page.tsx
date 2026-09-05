import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import AboutSection from "@/components/AboutSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kazi Shofi Ahmed | CTO at Jantra Software & Software Engineer",
  description:
    "Learn about Kazi Shofi Ahmed — CTO of Jantra Software, Full-Stack Software Engineer at ScholarPass, and BSc student at Noakhali Science & Technology University (NSTU).",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_CONFIG.url}/about`,
    name: "About Kazi Shofi Ahmed",
    mainEntity: {
      "@id": `${SITE_CONFIG.url}/#person`,
    },
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-neutral-100 overflow-x-hidden pt-20">
      <JsonLd data={aboutSchema} />
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-white text-center font-mono mb-4">
          About Kazi Shofi Ahmed
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto text-sm sm:text-base mb-8">
          Chief Technology Officer (CTO) at Jantra Software, Full-Stack Developer at ScholarPass, and Software Engineering student specializing in scalable systems, NestJS, Next.js, and cloud databases.
        </p>
      </div>

      <AboutSection />
      <Footer />
    </main>
  );
}
