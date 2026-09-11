import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Kris Ch",
  description: "My professional work experience and career journey.",
};

// Static experience data (can later be fetched from the API)
const experiences = [
  {
    id: "dune-kildare",
    title: "Stock Room Assistant & Sales Associate",
    company: "Dune, Kildare Village",
    period: "November 2024 – June 2025",
    icon: "🛍️",
    achievements: [
      "Worked in a fast-paced retail environment, coordinating with team members to manage stock flow and ensure smooth daily operations",
      "Optimized stockroom organization to improve efficiency, verified deliveries against manifests and resolved discrepancies",
      "Contract repeatedly extended due to strong performance in a high-volume seasonal environment",
      "Developed communication, teamwork and problem-solving skills with a consistent focus on accuracy and process improvement",
    ],
  },
  {
    id: "gala-petrol",
    title: "Key Holder & Customer Service Assistant",
    company: "Gala Petrol Station",
    period: "24 August 2015 – 22 January 2017",
    icon: "⛽",
    achievements: [
      "Worked flexible 8-hour shifts, including mornings and evenings",
      "Updated daily sales in the database and managed customer credit accounts",
      "Performed cash drops to the safe and handled opening/closing as a key holder",
    ],
  },
  {
    id: "c3-marketing",
    title: "Sales & Fundraising Representative",
    company: "C3 Marketing (Irish Cancer Society)",
    period: "10 January 2015 – 5 April 2015",
    icon: "🎗️",
    achievements: [
      "Conducted door-to-door sales and fundraising for the Irish Cancer Society",
      "Met daily target of 120+ doors knocked and weekly sales goals",
      "Educated potential donors and handled objections",
      "Participated in team meetings to discuss strategies and share best practices",
    ],
  },
];

// Summary stats
const stats = [
  { label: "Roles Held", value: "3" },
  { label: "Currently", value: "Studying" },
  { label: "Focus", value: "Cybersecurity" },
  { label: "Open To", value: "Opportunities" },
];

export default function ExperiencePage() {
  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950 min-h-screen">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <h1 className="text-2xl font-mono font-bold text-green-700">
            <span className="text-green-700">$</span> Experience
          </h1>
          <p className="text-sm text-gray-400 font-mono">
            My professional journey
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900/50 rounded-lg border border-green-700/30 p-3 text-center"
            >
              <p className="text-xl font-mono font-bold text-green-700">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-mono">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-green-700/20"></div>
              )}

              <div className="flex gap-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-700 mt-1.5"></div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-gray-900/50 rounded-lg border border-green-700/30 p-5 hover:border-green-700 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-700/10">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{exp.icon}</span>
                      <h3 className="text-lg font-mono font-bold text-green-700">
                        {exp.title}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded font-mono whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 font-mono mb-3">
                    {exp.company}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300 font-mono"
                      >
                        <span className="text-green-700 mt-0.5">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-8 bg-green-700/5 rounded-lg border border-green-700/20 p-4">
          <p className="text-sm text-gray-400 font-mono text-center">
            <span className="text-green-700">💡</span> Open to internship
            opportunities where I can contribute, learn and grow as a
            cybersecurity professional.
          </p>
        </div>
      </div>
    </section>
  );
}
