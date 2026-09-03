export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 bg-gray-950 text-white border-b border-green-700/20">
      <a
        href="/"
        className="text-xl font-bold font-mono hover:text-green-700 transition"
      >
        Kris Ch
      </a>

      <div className="flex gap-6">
        <a href="/" className="font-mono hover:text-green-700 transition">
          Home
        </a>
        <a href="/about" className="font-mono hover:text-green-700 transition">
          About
        </a>
        <a
          href="/projects"
          className="font-mono hover:text-green-700 transition"
        >
          Projects
        </a>
        <a
          href="/security"
          className="font-mono hover:text-green-700 transition"
        >
          Security Lab
        </a>
        <a href="/skills" className="font-mono hover:text-green-700 transition">
          Skills
        </a>
        <a
          href="/experience"
          className="font-mono hover:text-green-700 transition"
        >
          Experience
        </a>
      </div>
      <a
        href="/contact"
        className="inline-block mt-3 font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-1.5 rounded hover:border-green-500"
      >
        Get in touch →
      </a>
    </nav>
  );
}
