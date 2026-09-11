const intro = `I'm Kris, a software developer with a background in full-stack engineering and a growing focus on cybersecurity.
I like building things that solve real problems and I'm currently deepening my skills through a Postgraduate Diploma in Cybersecurity.`;

const currentFocus = [
  {
    icon: "🔭",
    label: "Building",
    text: "Full-stack apps with React, Node and TypeScript.",
  },
  {
    icon: "🌱",
    label: "Learning",
    text: "Web3, smart contracts, machine learning and cybersecurity.",
  },
  {
    icon: "🎯",
    label: "Goal",
    text: "Grow into a well-rounded engineer with a security-first mindset",
  },
];

const statement = `I've always been drawn to building things that solve problems. 
DogoHome came from noticing how fragmented Ireland's animal shelter landscape was online — I wanted to fix that. 
That same mindset is what pulls me toward security work: 
understanding how systems break so I can build ones that don't.`;

const offTheClock = [
  {
    icon: "🎮",
    title: "Gaming",
    text: "Casual Gamer - Wow classic, Magic the Gathering, League of Legends.",
  },
  {
    icon: "🃏",
    title: "Trading",
    text: "Setting up a Cardmarket storefront for Magic: The Gathering — inventory, pricing, shipping logistics.",
  },
  {
    icon: "📚",
    title: "Reading",
    text: "Web3 protocol whitepapers, crypto research and market analysis.",
  },
  {
    icon: "🛠️",
    title: "Tinkering",
    text: "Side projects, home labs and breaking things to understand them.",
  },
];

// ======================================================================
// COMPONENT
// ======================================================================
export default function About() {
  return (
    <section>
      <div className=" border-gray-700 p-4 bg-slate-950">
        <div className="space-y-6">
          {/* SECTION 1: INTRO */}

          <div className="bg-gray-900/50 border-t border-r border-l border-green-700/30 p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <h2 className="text-xl font-mono font-bold">About Me</h2>
            </div>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              {/** HEADER */}
              {intro}
            </p>
          </div>

          {/* SECTION 2: CURRENTLY */}
          <div className="bg-gray-900/50 border-r border-l border-green-700/30 p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <h2 className="text-xl font-mono font-bold">Currently</h2>
            </div>
            {/**
             * LOOP: Renders each focus item.
             * Each item has an emoji icon, a label and a description.
             */}
            <ul className="space-y-2">
              {currentFocus.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm font-mono text-gray-300"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>
                    <span className="text-green-700 font-bold">
                      {item.label}:
                    </span>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 3: WHY I BUILD */}
          {/** Personal Statement */}
          <div className="bg-gray-900/50 border-r border-l border-green-700/30 p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <h2 className="text-xl font-mono font-bold">Why I build</h2>
            </div>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              {statement}
            </p>
          </div>

          {/* SECTION 4: OFF THE CLOCK */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <h2 className="text-xl font-mono font-bold">Off the clock</h2>
          </div>
          {/**
           * LOOP: Renders each hobby card.
           * Grid collapses to a single column on mobile
           * and expands to 3 columns on medium+ screens.
           */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {offTheClock.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 border-r border-l border-green-700/50 p-4 hover:border-green-700 transition"
              >
                <span className="text-2xl text-center block mb-2">
                  {item.icon}
                </span>
                <h3 className="text-sm text-center font-mono font-bold text-green-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-center text-gray-400 font-mono leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-green-700/5  border-r border-l border-b border-green-700/50 p-4 text-center">
            <p className="text-gray-300 font-mono text-sm mb-3">
              Interested in working together or just want to connect?
            </p>
            <a
              href="/contact"
              className="inline-block font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-6 py-2 rounded hover:border-green-500 hover:bg-green-700/10"
            >
              Let's connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
