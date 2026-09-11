import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Kris Ch",
  description:
    "Technical skills and current studies — full-stack development, databases, and cybersecurity.",
};

// ======================================================================
// SKILLS DATA
// ======================================================================
//
// Note: This is currently static. Later it will be fetched from API

const skillCategories = [
  {
    name: "Languages",
    icon: "💻",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "PHP"],
  },
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "MUI"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Sequelize",
      "Bcrypt",
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB"],
  },
  {
    name: "Security",
    icon: "🔒",
    skills: [
      "Web App Security",
      "Penetration Testing",
      "Secure Coding",
      "OWASP",
      "Incident Response",
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "🔧",
    skills: ["Git", "GitHub", "Linux", "Postman", "Jira", "Vite"],
  },
];

// ======================================================================
// CURRENTLY LEARNING — Postgraduate modules
// ======================================================================
//
// These are the four modules for the current semester of the
// Postgraduate Diploma in Cybersecurity at CCT College Dublin.

const currentSemester = {
  programme: "Postgraduate Diploma in Cybersecurity",
  institution: "CCT College Dublin",
  modules: [
    { name: "Cryptography Theory & Practice" },
    { name: "Security Frameworks & Compliance" },
    { name: "Forensic Principles & Analysis" },
    { name: "Secure Programming & Scripting" },
  ],
};

// ======================================================================
// COMPONENT
// ======================================================================

export default function SkillsPage() {
  // Total skill count across all categories
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );

  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950 min-h-screen">
        {/* ============================================================
            HEADER
            ============================================================ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <h1 className="text-2xl font-mono font-bold text-green-700">
            <span className="text-green-700">$</span> Skills
          </h1>
          <p className="text-sm text-gray-400 font-mono">
            Technologies & expertise I work with
          </p>
        </div>

        {/* ============================================================
            SKILLS GRID
            ============================================================
            LOOP: One card per category.
            Inside each card, LOOP again over the skills array.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 hover:border-green-700 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-700/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-sm font-mono font-bold text-green-700 uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded font-mono border border-gray-700 hover:border-green-700/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            CURRENTLY LEARNING
            ============================================================
            Shows the current semester's modules with context —
            which programme and institution they belong to.
        */}
        <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">📚</span>
            <h3 className="text-sm font-mono font-bold text-green-700 uppercase tracking-wider">
              Currently Learning
            </h3>
            <span className="text-xs px-2 py-0.5 bg-green-700/20 text-green-700 rounded font-mono animate-pulse ml-auto">
              ● Active
            </span>
          </div>

          {/* Context line — programme + institution */}
          <p className="text-xs text-gray-500 font-mono mb-4">
            {currentSemester.programme} · {currentSemester.institution}
          </p>

          {/* Module grid — 1 col mobile, 2 tablet, 4 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentSemester.modules.map((module) => (
              <div
                key={module.name}
                className="bg-gray-800/50 rounded-lg border border-green-700/20 p-3 hover:border-green-700 transition"
              >
                <p className="font-mono text-sm text-gray-300">{module.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            SUMMARY BAR
            ============================================================
            Compact stats at the bottom. Uses the same data used to
            render the grids above — derived, not duplicated.
        */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-500 font-mono">
          <span>
            <span className="text-green-700">▸</span> {totalSkills} skills
          </span>
          <span className="text-gray-700">·</span>
          <span>
            <span className="text-green-700">▸</span>{" "}
            {currentSemester.modules.length} modules this semester
          </span>
          <span className="text-gray-700">·</span>
          <span className="text-green-700">🔒 Cybersecurity focus</span>
        </div>
      </div>
    </section>
  );
}
