import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SecurityLabs from "@/components/sections/SecurityLabs";
import TechStack from "@/components/sections/TechStack";
import Journey from "@/components/sections/Journey";
import ExperienceHighlights from "@/components/sections/ExperienceHighlights";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProjects />
      <SecurityLabs />
      <TechStack />
      <Journey />
      <ExperienceHighlights />
    </div>
  );
}
