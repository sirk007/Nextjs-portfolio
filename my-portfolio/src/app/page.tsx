import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SecurityLabs from "@/components/sections/SecurityLabs";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProjects />
      <SecurityLabs />
    </div>
  );
}
