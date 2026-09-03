import { techCategories } from "@/lib/data/techStack";

export default function TechStack() {
  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {techCategories.map((category) => (
            <div
              key={category.name}
              className="border border-green-700/30 rounded-lg p-4 bg-gray-900/50 hover:border-green-700 transition"
            >
              <h3 className="text-green-700 font-mono font-bold text-sm mb-3">
                {category.name}
              </h3>
              <ul className="space-y-1.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-gray-300 font-mono"
                  >
                    <span className="text-green-700">▸</span>
                    {skill}
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
