/**
 * ======================================================================
 * HOMEPAGE - Main Entry Point
 * ======================================================================
 *
 * This is the main landing page of the portfolio. It acts as a
 * container that imports and arranges all the major sections of
 * the site in a logical order.
 *
 * Each section is a separate component, making the code:
 * - Modular: Each piece can be developed independently
 * - Maintainable: Changes to one section don't affect others.
 * - Reusable: Sections can be moved or used elsewhere
 *
 * The sections are displayed vertically with consistent spacing
 * using Tailwind's `space-y-20` utility.
 *
 * @component Home
 * @returns {JSX.Element} The complete homepage with all sections
 */

import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SecurityLabs from "@/components/sections/SecurityLabs";
import TechStack from "@/components/sections/TechStack";
import Journey from "@/components/sections/Journey";
import ExperienceHighlights from "@/components/sections/ExperienceHighlights";

export default function Home() {
  return (
    /**
     * Container div with vertical spacing
     *
     * `space-y-20` applies a consistent 5rem (80px) gap
     * between each direct child element (the sections).
     * This creates a clean scrollable flow through the page.
     */
    <div className="space-y-20">
      {/**SECTION 1: Hero */}
      <Hero />
      {/**SECTION 2: Featured Projects */}
      <FeaturedProjects />
      {/**SECTION 3: Security Labs */}
      <SecurityLabs />
      {/**SECTION 4: Tech Stack */}
      <TechStack />
      {/**SECTION 5: Journey */}
      <Journey />
      {/**SECTION 6: Experience Highlights */}
      <ExperienceHighlights />
    </div>
  );
}
