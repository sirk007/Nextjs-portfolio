import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kris Ch",
  description: "My software engineering and cybersecurity projects.",
};

// Static project data (this can later be fetched from the API)
const projects = [
  {
    id: "dogohome",
    title: "DogoHome Platform",
    badge: "Final Year",
    tech: ["Node.js", "Express 4", "React 18", "MySQL", "Bootstrap", "JWT"],
    description:
      "Cloud-based MERN-stack platform replacing Facebook shelter listings with a centralized, searchable solution across Ireland. Built as my final year project.",
    achievements: [
      "3 user roles · JWT auth · 30+ RESTful APIs",
      "Agile · Scrum · Git version control",
      "Achieved 70% on 15-credit module",
    ],
    link: "/projects/dogohome",
    icon: "🐕",
  },
  {
    id: "dogohome-v2",
    title: "DogoHome v2 — TypeScript Rewrite",
    badge: "Rewrite",
    tech: [
      "TypeScript",
      "Node.js",
      "Express 5",
      "React 19",
      "Vite",
      "MUI",
      "Leaflet",
    ],
    description:
      "Full TypeScript rewrite of DogoHome with modern tooling: Vite build, MUI v7 components, and an interactive Leaflet map for shelter locations.",
    achievements: [
      "Full migration from JS → TS across client & server",
      "Express 5 + typed middleware",
      "Interactive shelter map with react-leaflet",
      "Seed scripts for Irish counties dataset",
    ],
    link: "/projects/dogohome-v2",
    icon: "🔄",
  },
  {
    id: "hdd-destruction",
    title: "HDD Destruction Website",
    badge: "Team Project",
    tech: ["PHP", "Slim Framework", "MySQL", "Jira"],
    description:
      "Full-stack web application for an HDD destruction service with secure authentication and relational database design.",
    achievements: [
      "Secure authentication · RESTful APIs",
      "Led team as Scrum Master using Jira",
      "Postman tested · Relational database design",
    ],
    link: "/projects/hdd-destruction",
    icon: "💾",
  },
  {
    id: "btc-regression",
    title: "BTC-USD Regression Analysis",
    badge: "Data Science",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    description:
      "Linear Regression model predicting Bitcoin's daily close price using Open, High, Low and Volume features from 2 years of historical data.",
    achievements: [
      "RMSE: 488.82 · Deviation: 0.85%",
      "80/20 train-test split · Random state: 800",
      "731 instances · 2 years of daily BTC-USD data",
    ],
    link: "/projects/btc-regression",
    icon: "📊",
  },
  {
    id: "pokemon-scraper",
    title: "Pokémon Data Pipeline",
    badge: "Data Science",
    tech: ["Python", "BeautifulSoup", "Pandas", "Plotly", "Jupyter"],
    description:
      "Python scraper and analysis pipeline that collects Pokémon data from pokemondb.net, cleans it with Pandas, and visualizes type distributions across generations with Plotly.",
    achievements: [
      "Scraped 1,195 entries across 9 generations",
      "Parsed stats, abilities, evolutions, and sprites",
      "Cleaned and structured 52 columns with Pandas",
      "Built 6+ interactive Plotly visualizations",
    ],
    link: "/projects/pokemon-scraper",
    icon: "🐍",
  },
  {
    id: "sonic-dapp-learning",
    title: "Sonic dApp — Wallet Dashboard",
    badge: "Learning",
    tech: ["React", "Vite", "Ethers.js v6", "MetaMask", "Sonic Blaze Testnet"],
    description:
      "A Web3 learning project demonstrating clean dApp architecture: a custom wallet hook, service layer abstraction over ethers.js, and MetaMask integration with the Sonic Blaze testnet.",
    achievements: [
      "Custom useWallet hook with connect + network handling",
      "Service layer abstracts all blockchain calls via ethers.js",
      "wallet_addEthereumChain flow for Sonic Blaze testnet",
      "Handles loading, errors, and address formatting",
    ],
    link: "https://github.com/sirk007/sonic-dapp-learning",
    icon: "🔗",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <h1 className="text-2xl font-mono font-bold text-green-700">
            <span className="text-green-700">$</span> Projects
          </h1>
          <p className="text-sm text-gray-400 font-mono">
            A showcase of my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 rounded-lg border border-green-700/30 p-5 hover:border-green-700 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-700/10 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-lg font-mono font-bold text-green-700">
                    {project.title}
                  </h3>
                </div>
                {project.badge && (
                  <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono whitespace-nowrap">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 font-mono mb-3 flex-1">
                {project.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-1 text-xs text-gray-400 font-mono mb-4">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-700 mt-0.5">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Footer Link */}
              <div className="mt-auto pt-3 border-t border-gray-800">
                <a
                  href={project.link}
                  className="text-green-700 font-mono text-sm hover:text-green-500 transition inline-flex items-center gap-1"
                >
                  View details
                  <span className="text-xs">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 font-mono">
              No projects yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
