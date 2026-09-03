export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-green-700/20 py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Let's Work Together */}
          <div>
            <p className="font-mono text-lg font-bold mb-2">
              Let's work together
            </p>
            <p className="font-mono text-sm text-gray-400">
              I'm open to internship oppertunities where I can contribute, learn
              and grow as a cybersecurity professional.
            </p>
            <a
              href="/contact"
              className="inline-block mt-3 font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-1.5 rounded hover:border-green-500"
            >
              Get in touch →
            </a>
          </div>

          {/* Column 2: Security First */}
          <div>
            <p className="font-mono text-lg font-bold mb-2">Security First</p>
            <ul className="font-mono text-sm text-gray-400 space-y-1.5">
              <li>
                <span className="text-green-700">✔</span> Dummy Text for now
              </li>

              <li>
                <span className="text-green-700">✔</span> Dummy Text for now
              </li>
              <li>
                <span className="text-green-700">✔</span> Dummy Text for now
              </li>
              <li>
                <span className="text-green-700">✔</span> Dummy Text for now
              </li>
            </ul>
          </div>

          {/* Column 3: Live Stats */}
          <div>
            <p className="font-mono text-lg font-bold mb-2">Live Stats</p>
            <div className="space-y-2 font-mono text-sm">
              <div>
                <span className="text-gray-400">Projects:</span>
                <span className="text-green-700 ml-2">x</span>
              </div>
              <div>
                <span className="text-gray-400">Write-ups:</span>
                <span className="text-green-700 ml-2">x</span>
              </div>
              <div>
                <span className="text-gray-400">Technologies:</span>
                <span className="text-green-700 ml-2">x</span>
              </div>
              <div>
                <span className="text-gray-400">Coffee Consumed:</span>
                <span className="text-green-700 ml-2 text-xl">∞</span>
              </div>
            </div>
          </div>

          {/* Column 4: Currently Learning */}
          <div>
            <p className="font-mono text-lg font-bold mb-2">
              Currently Learning
            </p>
            <ul className="font-mono text-sm text-gray-400 space-y-1.5">
              <li>
                <span className="border-2 border-solid px-1 rounded">
                  Penetration Testing
                </span>
              </li>
              <li>
                <span className="text-green-700">x</span> — x
              </li>
              <li>
                <span className="text-green-700">x</span> x
              </li>
              <li>
                <span className="text-green-700">x</span> — x
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="font-mono text-xs text-gray-500">
            <span className="text-green-700">$</span> echo "©{" "}
            {new Date().getFullYear()} Kris Ch — All rights reserved"
          </div>
          <div className="flex gap-4 font-mono text-xs">
            <a
              href="#"
              className="text-gray-500 hover:text-green-700 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-700 transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-700 transition"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
