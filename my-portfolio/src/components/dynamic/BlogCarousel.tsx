"use client";

import { useState, useEffect } from "react";

/**
 * ======================================================================
 * BLOG CAROUSEL — Coming Soon state
 * ======================================================================
 *
 * Cycles through planned write-ups every 30 seconds.
 *
 * Current state:
 *   The titles are placeholders — actual write-ups have not been
 *   published yet. Each entry shows "Coming soon" instead of an
 *   excerpt, and the "Read Article" link is disabled.
 *
 * When you publish a write-up:
 *   1. Add an `excerpt` field to the post object
 *   2. Add a valid `link` (e.g. /security/xss-guide)
 *   3. Optionally change status to "published"
 *   4. The component will render the full content automatically
 *
 * Logic:
 *   - Cycles through posts every 30 seconds
 *   - Pauses on hover
 *   - Progress bar reflects current position
 *   - Dot indicators allow manual navigation
 */

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Planned write-ups.
   * Titles are set — content is coming soon.
   *
   * `published: false` → shows "Coming soon" state
   * `published: true`  → shows excerpt + working link
   */
  const posts = [
    {
      title: "Understanding XSS Attacks",
      published: false,
    },
    {
      title: "Data Sanitization Best Practices",
      published: false,
    },
    {
      title: "Secure Session Management",
      published: false,
    },
    {
      title: "Penetration Testing 101",
      published: false,
    },
    {
      title: "Building My Portfolio: Part 1",
      published: false,
    },
  ];

  /**
   * Auto-advance carousel every 30 seconds.
   * Pauses when the user hovers over the component.
   */
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
      {/* ============================================================
          PROGRESS BAR
          ============================================================
          Width is derived from current index / total posts.
      */}
      <div className="w-full h-0.5 bg-gray-700 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-green-700 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / posts.length) * 100}%` }}
        ></div>
      </div>

      {/* ============================================================
          HEADER — Title + live indicator + counter
      */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-mono font-bold text-green-700">
            Latest Write-ups
          </h3>
          <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono animate-pulse">
            ● LIVE
          </span>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          {currentIndex + 1}/{posts.length}
        </span>
      </div>

      {/* ============================================================
          POST CONTENT
          ============================================================
          CONDITIONAL RENDERING:
          - If the post is not published, show "Coming soon" placeholder
          - If it is published, show the excerpt and tags
      */}
      <div className="flex-1 flex flex-col">
        <h4 className="text-md font-mono font-bold text-white mb-2">
          {currentPost.title}
        </h4>

        {currentPost.published ? (
          // Published state — full content (not used yet)
          <>
            <p className="text-sm text-gray-400 font-mono mb-3">
              {/* {currentPost.excerpt} */}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {/* {currentPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono"
                >
                  {tag}
                </span>
              ))} */}
            </div>
          </>
        ) : (
          // Coming Soon state
          <div className="flex-1 flex flex-col justify-center py-4">
            <p className="text-sm text-gray-500 font-mono">
              <span className="text-green-700">$</span> coming soon...
            </p>
            <p className="text-xs text-gray-600 font-mono mt-1">
              Currently drafting this write-up
            </p>
          </div>
        )}
      </div>

      {/* ============================================================
          FOOTER
          ============================================================
          In coming-soon mode:
          - No clickable link
          - Dot indicators still work for navigation
      */}
      <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between items-center">
        {currentPost.published ? (
          <a
            href="#" // will be currentPost.link when published
            className="text-green-300 font-mono text-sm hover:text-green-500 transition"
          >
            Read Article →
          </a>
        ) : (
          <span className="text-gray-600 font-mono text-sm">
            Not yet available
          </span>
        )}

        {/* Dot navigation — still functional */}
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
