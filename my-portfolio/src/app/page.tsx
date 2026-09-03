import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import SecurityLabs from "./components/SecurityLab";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProjects />
      <SecurityLabs />
    </div>
  );
}
