import AboutHeroSection from "./components/AboutHeroSection";
import BioSection from "./components/BioSection";
import SkillsGridSection from "./components/SkillsGridSection";
import ExperienceTimelineSection from "./components/ExperienceTimelineSection";
import SoftSkillsSection from "./components/SoftSkillsSection";
import ResumeContactSection from "./components/ResumeContactSection";

export default function About() {
  return (
    <div className="bg-primary">
      <AboutHeroSection />
      <BioSection />
      <SkillsGridSection />
      <ExperienceTimelineSection />
      <SoftSkillsSection />
      <ResumeContactSection />
    </div>
  );
}
