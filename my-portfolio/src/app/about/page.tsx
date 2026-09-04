export default function About() {
  return (
    <section>
      <div className=" border-gray-700 p-4 bg-slate-950">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-mono font-bold">About Me</h2>
        </div>
        
        <div className="space-y-6">
          {/* Brief Intro */}
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              I'm a <span className="text-green-700">Software Engineer</span> with a passion for 
              <span className="text-green-700"> Cybersecurity</span>. I build secure, reliable, 
              and user-focused applications while continuously expanding my expertise in 
              cybersecurity through hands-on projects and learning.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
              <h3 className="text-green-700 font-mono text-sm font-bold mb-2">🎓 Education</h3>
              <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                <li>• BSc in Software Design with AI for Cloud Computing</li>
                <li>• FETAC Level 5 in Business and IT</li>
                <li className="text-green-700 animate-pulse">• Postgraduate Diploma in Cybersecurity (Current)</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
              <h3 className="text-green-700 font-mono text-sm font-bold mb-2">💼 Experience</h3>
              <ul className="space-y-1.5 text-sm text-gray-300 font-mono">
                <li>• Key Holder & Customer Service Assistant</li>
                <li>• Sales & Fundraising Representative</li>
                <li className="text-gray-500">• Open to internships</li>
              </ul>
            </div>
          </div>

          {/* My Journey Section */}
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
            <h3 className="text-green-700 font-mono text-sm font-bold mb-3">🛤️ My Journey</h3>
            <div className="relative pl-6 space-y-4">
              {/* Timeline line */}
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-green-700/20"></div>
              
              <div className="relative">
                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-green-700"></div>
                <p className="text-sm text-gray-300 font-mono">
                  <span className="text-green-700 font-bold">2024</span> — Started Postgraduate Diploma in Cybersecurity
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-green-700/60"></div>
                <p className="text-sm text-gray-300 font-mono">
                  <span className="text-green-700 font-bold">2020–2024</span> — BSc in Software Design with AI for Cloud Computing
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-green-700/40"></div>
                <p className="text-sm text-gray-300 font-mono">
                  <span className="text-green-700 font-bold">2015–2016</span> — FETAC Level 5 in Business and IT
                </p>
              </div>
            </div>
          </div>

          {/* What Drives Me */}
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
            <h3 className="text-green-700 font-mono text-sm font-bold mb-2">🚀 What Drives Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-gray-800/50 rounded border border-green-700/20">
                <span className="text-2xl block mb-1">🔒</span>
                <p className="text-xs text-gray-300 font-mono">Security First</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded border border-green-700/20">
                <span className="text-2xl block mb-1">📚</span>
                <p className="text-xs text-gray-300 font-mono">Continuous Learning</p>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded border border-green-700/20">
                <span className="text-2xl block mb-1">💡</span>
                <p className="text-xs text-gray-300 font-mono">Problem Solving</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-green-700/5 rounded-lg border border-green-700/30 p-4 text-center">
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