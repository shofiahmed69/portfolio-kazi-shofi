import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Kazi Shofi Ahmed | Full-Stack Software Engineer",
  description:
    "Portfolio of Kazi Shofi Ahmed - Full-Stack Software Engineer at ScholarPASS and multi-time National & International Hackathon Champion specializing in Next.js, NestJS, React, Node.js, and Flutter.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-neutral-100 overflow-x-hidden">
      {/* Animated Black-Themed Cursor */}
      <CustomCursor />

      {/* Interactive Dark Grid Canvas Background */}
      <BackgroundCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Tech Stack & Skills */}
      <SkillsSection />

      {/* Work Experience */}
      <ExperienceSection />

      {/* Featured Projects */}
      <ProjectsSection />

      {/* Dynamic GitHub Repos */}
      <GitHubSection />

      {/* Awards & Hackathons */}
      <AwardsSection />

      {/* Contact & Socials */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
