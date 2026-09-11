import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16">
      {/* Grid container*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-xl text-green-300 font-mono mb-2">Hi, I'm</h1>
          <h2 className="text-5xl font-mono font-bold mb-4">Kris Ch</h2>
          <p className="text-xl text-gray-300 font-mono mb-2">
            Software Engineer →{" "}
            <span className="text-green-300 hover:text-green-500 transition">
              Cybersecurity
            </span>
          </p>
          <p className="text-gray-400 font-mono max-w-2xl mb-6">
            I build secure, reliable and user-focused applications. I'm
            currently expanding my expertise in cybersecurity through hands-on
            projects and continuous learning.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-2 bg-green-700 text-white font-mono rounded hover:bg-green-600 transition"
            >
              View My Work
            </Link>
            <Link
              href="/cv.pdf"
              className="px-6 py-2 border border-green-700 text-green-700 font-mono rounded hover:bg-green-700 hover:text-white transition"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
          {/* Content */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white font-mono">
            <h2 className="text-green-300">&gt; whoami</h2>
          </div>
          <div className="text-white font-mono mt-2">
            <h3 className="text-green-300">
              &gt; name:<span className="text-white"> Kris Ch</span>
            </h3>
            <h3 className="text-green-300">
              &gt; role:<span className="text-white"> Software Engineer</span>
            </h3>
            <h3 className="text-green-300">
              &gt; focus:
              <span className="text-white"> Full Stack Development</span>
            </h3>
            <h3 className="text-green-300">
              &gt; learning:<span className="text-white"> Cybersecurity</span>
            </h3>
            <h3 className="text-green-300">
              &gt; location:<span className="text-white"> Ireland</span>
            </h3>
            <br />
            <h3 className="text-green-300">
              &gt; mission:
              <span className="text-white"> Building Software,</span>
              <span className="text-white"> Securing Systems,</span>
              <span className="text-white"> Solving real-world problems.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
