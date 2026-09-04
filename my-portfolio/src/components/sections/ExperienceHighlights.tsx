export default function ExperienceHighlights() {
  const experiences = [
    {
      title: "Key Holder & Customer Service Assistant",
      company: "Gala Petrol Station",
      period: "24 August 2015 - 22 January 2017",
      achievements: [
        "Worked flexible 8-hour shifts, including mornings and evenings",
        "Updated daily sales in the database and managed customer credit accounts",
        "Performed cash drops to the safe and handled opening/closing as a key holder"
      ]
    },
    {
      title: "Sales & Fundraising Representative",
      company: "C3 Marketing (Irish Cancer Society)",
      period: "10 January 2015 - 5 April 2015",
      achievements: [
        "Conducted door-to-door sales and fundraising for the Irish Cancer Society",
        "Met daily target of 120+ doors knocked and weekly sales goals",
        "Educated potential donors and handled objections",
        "Participated in team meetings to discuss strategies and share best practices"
      ]
    }
  ];

  return (
    <section>
      <div className="border-l border-r border-b border-gray-700 p-4 bg-slate-950">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">Experience Highlights</h2>
          <a 
            href="/experience" 
            className="text-green-300 font-mono text-sm hover:text-green-500 transition"
          >
            View Full Experience →
          </a>
        </div>
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 hover:border-green-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-700/5 h-full flex flex-col"
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="text-lg font-mono font-bold text-green-700">
                  {exp.title}
                </h3>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded font-mono whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-400 font-mono mb-3">
                {exp.company}
              </p>
              <ul className="space-y-1.5 flex-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300 font-mono">
                    <span className="text-green-700 mt-0.5">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}