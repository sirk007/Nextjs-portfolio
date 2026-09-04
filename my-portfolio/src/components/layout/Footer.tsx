export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-green-700/20 py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Let's Work Together */}
          <div>
            <p className="font-mono text-lg font-bold mb-2 text-green-700">
              Let's work together
            </p>
            <p className="font-mono text-sm text-gray-400">
              I'm open to internship opportunities where I can contribute, learn
              and grow as a cybersecurity professional.
            </p>
            <a
              href="/contact"
              className="inline-block mt-3 font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-1.5 rounded hover:border-green-500 hover:bg-green-700/10"
            >
              Get in touch →
            </a>
          </div>

          {/* Column 2: Security Focus */}
          <div>
            <p className="font-mono text-lg font-bold mb-2 text-green-700">
              Security Focus
            </p>
            <ul className="font-mono text-sm text-gray-400 space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                Web Application Security
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                Penetration Testing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                Secure Programming
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-0.5">▸</span>
                Incident Response
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Stats */}
          <div>
            <p className="font-mono text-lg font-bold mb-2 text-green-700">
              Quick Stats
            </p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between border-b border-gray-800/50 pb-1">
                <span className="text-gray-400">Projects</span>
                <span className="text-green-700">3</span>
              </div>
              <div className="flex justify-between border-b border-gray-800/50 pb-1">
                <span className="text-gray-400">Education</span>
                <span className="text-green-700">4</span>
              </div>
              <div className="flex justify-between border-b border-gray-800/50 pb-1">
                <span className="text-gray-400">Tech Stack</span>
                <span className="text-green-700">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Currently</span>
                <span className="text-green-700 animate-pulse">Cybersecurity</span>
              </div>
            </div>
          </div>

          {/* Column 4: Currently Learning */}
          <div>
            <p className="font-mono text-lg font-bold mb-2 text-green-700">
              Currently Learning
            </p>
            <ul className="font-mono text-sm text-gray-400 space-y-2">
              <li className="bg-gray-900/50 p-2 rounded border border-green-700/20">
                <span className="text-green-700 font-bold">Rust</span>
                <span className="block text-xs text-gray-500">Systems programming</span>
              </li>
              <li className="bg-gray-900/50 p-2 rounded border border-green-700/20">
                <span className="text-green-700 font-bold">Kubernetes</span>
                <span className="block text-xs text-gray-500">Container orchestration</span>
              </li>
              <li className="bg-gray-900/50 p-2 rounded border border-green-700/20">
                <span className="text-green-700 font-bold">AI Security</span>
                <span className="block text-xs text-gray-500">ML threat detection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="font-mono text-xs text-gray-500">
            <span className="text-green-700">$</span> echo "© {new Date().getFullYear()} Kris Ch — All rights reserved"
          </div>
          <div className="flex gap-6 font-mono text-xs">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-500 hover:text-green-700 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}