"use client";

import { useState, useEffect } from "react";

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const posts = [
    {
      title: "Understanding XSS Attacks",
      description:
        "Cross-Site Scripting (XSS) is one of the most common web vulnerabilities. Learn how it works and how to prevent it.",
      tags: ["Web Security", "OWASP", "JavaScript"],
      link: "/writeups/xss",
      readTime: "5 min read",
    },
    {
      title: "Data Sanitization Best Practices",
      description:
        "Proper data sanitization is crucial for preventing injection attacks. Explore techniques for validating and cleaning user input.",
      tags: ["Data Sanitization", "Input Validation", "Security"],
      link: "/writeups/data-sanitization",
      readTime: "7 min read",
    },
    {
      title: "Secure Session Management",
      description:
        "Understanding how to implement secure session handling, JWT tokens, and cookie security for web applications.",
      tags: ["Session Security", "JWT", "Authentication"],
      link: "/writeups/session-security",
      readTime: "6 min read",
    },
    {
      title: "Penetration Testing 101",
      description:
        "A comprehensive guide to penetration testing methodologies, tools, and best practices for ethical hacking.",
      tags: ["Pentesting", "Ethical Hacking", "Tools"],
      link: "/writeups/pentesting-guide",
      readTime: "10 min read",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [isPaused, posts.length]);

  const currentPost = posts[currentIndex];

  return (
    <div
      className="border border-green-700/30 rounded-lg p-4 bg-gray-900/50 hover:border-green-700 transition h-full flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Progress Bar */}
      <div className="w-full h-0.5 bg-gray-700 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-green-700 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / posts.length) * 100}%` }}
        ></div>
      </div>

      {/* Post Indicator */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-mono font-bold text-green-700">
            Latest Write-ups
          </h3>
          <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono animate-pulse">
            LIVE
          </span>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          {currentIndex + 1}/{posts.length}
        </span>
      </div>

      {/* Post Content */}
      <div className="flex-1">
        <h4 className="text-md font-mono font-bold text-white mb-2">
          {currentPost.title}
        </h4>
        <p className="text-sm text-gray-400 font-mono mb-3">
          {currentPost.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {currentPost.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Time */}
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
          <span>⏱ {currentPost.readTime}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between items-center">
        <a
          href={currentPost.link}
          className="text-green-300 font-mono text-sm hover:text-green-500 transition"
        >
          Read Article →
        </a>
        <div className="flex gap-1">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-700 w-3"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
