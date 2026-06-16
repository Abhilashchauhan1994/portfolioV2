import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ScrollProgress } from "../components/layout/ScrollProgress";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ProfessionalProjectsSection } from "@/components/sections/ProfessionalProjectSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProfessionalProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
