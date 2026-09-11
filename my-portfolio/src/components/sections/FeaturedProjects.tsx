import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section>
      <div className="border-t border-l border-r border-gray-700 p-4 bg-slate-950">
        {/* Header with flex */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-green-300 font-mono text-sm hover:text-green-500 transition"
          >
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="border border-green-700/30 rounded-lg p-4 bg-gray-900/50 hover:border-green-700 transition">
            {/* Project Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-mono font-bold text-green-700">
                DogoHome Platform
              </h3>
              <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
                Final Year
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Node.js
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Express.js
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                React
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                MySQL
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                JWT
              </span>
            </div>

            {/* Description - Shortened */}
            <p className="text-sm text-gray-400 font-mono mb-3">
              Cloud-based MERN-stack platform replacing Facebook shelter
              listings with a centralized, searchable solution across Ireland.
            </p>

            {/* Key Achievements - Bullet Points */}
            <ul className="space-y-1 text-xs text-gray-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>3 user roles · JWT auth · 30+ RESTful APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Agile · Scrum · Git version control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>
                  Achieved <span className="text-green-700">70%</span> on
                  15-credit module
                </span>
              </li>
            </ul>
          </div>

          {/* Middle Column */}
          <div className="border border-green-700/30 rounded-lg p-4 bg-gray-900/50 hover:border-green-700 transition">
            {" "}
            {/* Project Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-mono font-bold text-green-700">
                HDD Destruction Website
              </h3>
              <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
                Team Project
              </span>
            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                PHP
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Slim Framework
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                MySQL
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Jira
              </span>
            </div>
            {/* Description */}
            <p className="text-sm text-gray-400 font-mono mb-3">
              Full-stack web application for an HDD destruction service with
              secure authentication and relational database design.
            </p>
            {/* Key Achievements - Bullet Points */}
            <ul className="space-y-1 text-xs text-gray-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Secure authentication · RESTful APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>
                  Led team as{" "}
                  <span className="text-green-700">Scrum Master</span> using
                  Jira
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>Postman tested · Relational database design</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="border border-green-700/30 rounded-lg p-4 bg-gray-900/50 hover:border-green-700 transition">
            {" "}
            {/* Project Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-mono font-bold text-green-700">
                BTC-USD Regression Analysis
              </h3>
              <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
                Data Science
              </span>
            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Python
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Scikit-learn
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Pandas
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                NumPy
              </span>
              <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono">
                Matplotlib
              </span>
            </div>
            {/* Description */}
            <p className="text-sm text-gray-400 font-mono mb-3">
              Linear Regression model predicting Bitcoin's daily close price
              using Open, High, Low and Volume features from 2 years of
              historical data.
            </p>
            {/* Key Achievements - Bullet Points */}
            <ul className="space-y-1 text-xs text-gray-400 font-mono">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>
                  RMSE: <span className="text-green-700">488.82</span> ·
                  Deviation: <span className="text-green-700">0.85%</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>80/20 train-test split · Random state: 800</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                <span>731 instances · 2 years of daily BTC-USD data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
