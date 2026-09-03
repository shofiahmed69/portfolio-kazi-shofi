import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kazi Shofi Ahmed | CTO & Full Stack Software Engineer",
  description:
    "Get in touch with Kazi Shofi Ahmed for software engineering collaborations, technical leadership inquiries, system architecture, or full-stack software development.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_CONFIG.url}/contact`,
    name: "Contact Kazi Shofi Ahmed",
    mainEntity: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.author.email,
      contactType: "Professional Inquiry",
      areaServed: ["Global", "USA", "Bangladesh"],
      availableLanguage: ["English", "Bengali"],
    },
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-neutral-100 overflow-x-hidden pt-20">
      <JsonLd data={contactSchema} />
      <CustomCursor />
      <BackgroundCanvas />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-white text-center font-mono mb-4">
          Contact Kazi Shofi Ahmed
        </h1>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto text-sm sm:text-base mb-8">
          Available for technical consultations, software consulting, speaking engagements, and high-impact engineering projects.
        </p>
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
