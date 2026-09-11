import Link from "next/link";
import BlogCarousel from "../dynamic/BlogCarousel";
export default function SecurityLabs() {
  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950">
        {/* Header with flex */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">Security Labs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="border border-green-700/30 rounded-lg p-4 bg-gray-900/50 hover:border-green-700 transition">
            {/* Project Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-mono font-bold text-green-700">
                Security Lab
              </h3>
            </div>

            {/* Description - Shortened */}
            <p className="text-sm text-gray-400 font-mono mb-3">
              A space where I document what I'm learning, testing and building
              as I grow in cybersecurity. This includes write-ups, tools,
              scripts and other resources that I find useful in my journey.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-1 text-xs text-gray-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Web Application Security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Secure Programming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Penetration Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Incident Response</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Cybersecurity Write-ups</span>
              </li>
            </ul>
            <Link
              href="/projects"
              className="text-green-300 font-mono text-sm hover:text-green-500 transition"
            >
              Explore Security Lab →
            </Link>
          </div>

          {/* Middle Column */}
          <div className=" p-4 bg-slate-950">
            {" "}
            {/* Project Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-mono font-bold">Latest Write-ups</h3>
            </div>
            {/* Description */}
            <p className="text-sm text-gray-400 font-mono mb-3">
              A practical guide on Cross-Site Scripting, how it works, real
              examples and effective prevention techniques.
            </p>
            {/* Bullet Points */}
            <ul className="space-y-1 text-xs text-gray-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Web Security Fundamentals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>OWASP Top 10</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>JavaScript Security</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className=" p-4 bg-slate-950">
            {" "}
            {/* Project Header */}
            <BlogCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
