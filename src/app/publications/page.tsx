import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import AwardsSection from "@/components/AwardsSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications, Awards & Hackathon Achievements | Kazi Shofi Ahmed",
  description:
    "Explore national and international hackathon championships, technical recognitions, and publications achieved by Kazi Shofi Ahmed.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/publications`,
  },
};

export default function PublicationsPage() {
  const awardsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    url: `${SITE_CONFIG.url}/publications`,
    name: "Publications and Awards of Kazi Shofi Ahmed",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#person`,
      name: SITE_CONFIG.name,
      award: [
        "National & International Hackathon Champion",
        "Top Software Engineering Innovator",
      ],
    },
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-neutral-100 overflow-x-hidden pt-20">
      <JsonLd data={awardsSchema} />
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-white text-center font-mono mb-4">
          Publications & Hackathon Recognitions
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto text-sm sm:text-base mb-8">
          A showcase of competitive programming victories, national hackathon awards, and engineering honors earned by Kazi Shofi Ahmed.
        </p>
      </div>

      <AwardsSection />
      <Footer />
    </main>
  );
}
