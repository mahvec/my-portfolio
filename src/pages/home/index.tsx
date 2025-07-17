import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="bg-primary">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </div>
  );
}
