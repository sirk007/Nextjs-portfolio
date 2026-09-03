"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-3 bg-gray-950 text-white border-b border-green-700/20">
      {/* Logo */}
      <a
        href="/"
        className="text-xl font-bold font-mono hover:text-green-700 transition"
      >
        Kris Ch
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
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

      {/* Desktop Contact Button */}
      <a
        href="/contact"
        className="hidden md:inline-block font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-1.5 rounded hover:border-green-500"
      >
        Get in touch →
      </a>

      {/* Hamburger Button - Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 left-0 right-0 bg-gray-950 border-b border-green-700/20 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-3">
          <a
            href="/"
            className="font-mono hover:text-green-700 transition py-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="font-mono hover:text-green-700 transition py-1"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/projects"
            className="font-mono hover:text-green-700 transition py-1"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="/security"
            className="font-mono hover:text-green-700 transition py-1"
            onClick={() => setIsOpen(false)}
          >
            Security Lab
          </a>
          <a
            href="/skills"
            className="font-mono hover:text-green-700 transition py-1"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="/experience"
            className="font-mono hover:text-green-700 transition py-1"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="/contact"
            className="font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-1.5 rounded hover:border-green-500 text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </nav>
  );
}
