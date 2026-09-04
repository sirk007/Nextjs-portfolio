export default function Journey() {
  const education = [
    {
      title: "Postgraduate Diploma in Cybersecurity",
      institution: "CCT College Dublin",
      period: "2026 - Present",
      badge: "Current",
      badgeColor: "bg-blue-700/20 text-blue-400 animate-pulse",
      status: "Current"
    },
    {
      title: "BSc in Software Design with AI for Cloud Computing",
      institution: "Technological University of the Shannon, Athlone",
      period: "2020 - 2024",
      badge: "Degree",
      badgeColor: "bg-green-700/20 text-green-700"
    },
    {
      title: "FETAC Level 5 in Business and IT",
      institution: "St. Conleth's Community College, Newbridge",
      period: "2015 - 2016",
      badge: "Certificate",
      badgeColor: "bg-green-700/20 text-green-700"
    },
    {
      title: "Secondary School",
      institution: "St. Attracta's Community School, Co. Sligo",
      period: "2007 - 2013",
      badge: "Secondary",
      badgeColor: "bg-gray-700/20 text-gray-400"
    }
  ];

  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">Journey</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-green-700/20"></div>
              )}
              
              <div className="flex gap-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-700 mt-1.5"></div>
                </div>
                
                {/* Content - Card style */}
                <div className="flex-1 bg-gray-900/50 rounded-lg border border-green-700/30 p-4 hover:border-green-700 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-700/5">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-lg font-mono font-bold text-green-700">
                      {item.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded font-mono ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-mono mt-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-gray-500 font-mono mt-2">
                    📅 {item.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}