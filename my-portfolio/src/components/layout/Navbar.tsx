"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/security", label: "Security Lab" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-3 bg-gray-950/80 backdrop-blur-sm text-white border-b border-green-700/20">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold font-mono hover:text-green-700 transition flex items-center gap-2"
      >
        <span className="text-green-700">$</span>
        <span>Kris Ch</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-mono transition ${
              pathname === link.href
                ? "text-green-700 border-b-2 border-green-700 pb-0.5"
                : "hover:text-green-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <Link
        href="/contact"
        className="hidden md:inline-block font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-1.5 rounded hover:border-green-500 hover:bg-green-700/10"
      >
        Get in touch →
      </Link>

      {/* Hamburger Button - Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 left-0 right-0 bg-gray-950/95 backdrop-blur-sm border-b border-green-700/20 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono py-2 px-3 rounded transition ${
                pathname === link.href
                  ? "bg-green-700/20 text-green-700 border-l-2 border-green-700"
                  : "hover:text-green-700 hover:bg-gray-800/50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-mono text-sm text-green-700 hover:text-green-500 transition border border-green-700/30 px-4 py-2 rounded hover:border-green-500 text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </nav>
  );
}
