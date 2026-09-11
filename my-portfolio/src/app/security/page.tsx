import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Lab | Kris Ch",
  description: "My cybersecurity write-ups, tools, and learning journey.",
};

// ======================================================================
// WRITE-UPS DATA
// ======================================================================
//
// Currently empty — the layout is preserved but no articles have been
// published yet. When you write your first write-up:
//
//   1. Uncomment the entries below (or add new ones)
//   2. Replace with real content
//   3. Create the article page at /security/[id]/page.tsx
//
// The grid will auto-populate because it filters on status: "published".
//
// Status field:
//   "published" → appears in the main grid
//   "draft"     → appears in the Drafts section (hidden if none exist)

const writeups: {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  link: string;
  readTime: string;
  status: "published" | "draft";
}[] = [
  // ----------------------------------------------------------------
  // Uncomment and edit these when you have real articles ready
  // ----------------------------------------------------------------
  //
  // {
  //   id: "xss-guide",
  //   title: "Understanding XSS Attacks",
  //   excerpt:
  //     "Cross-Site Scripting (XSS) is one of the most common web vulnerabilities. Learn how it works and how to prevent it.",
  //   date: "2024-09-01",
  //   tags: ["Web Security", "OWASP", "JavaScript"],
  //   link: "/security/xss-guide",
  //   readTime: "5 min read",
  //   status: "published",
  // },
  //
  // {
  //   id: "data-sanitization",
  //   title: "Data Sanitization Best Practices",
  //   excerpt:
  //     "Proper data sanitization is crucial for preventing injection attacks.",
  //   date: "2024-08-25",
  //   tags: ["Data Sanitization", "Input Validation", "Security"],
  //   link: "/security/data-sanitization",
  //   readTime: "7 min read",
  //   status: "published",
  // },
];

// ======================================================================
// COMPONENT
// ======================================================================

export default function SecurityPage() {
  // Filter write-ups by status
  const publishedWriteups = writeups.filter((w) => w.status === "published");
  const draftWriteups = writeups.filter((w) => w.status === "draft");

  // Boolean to simplify the template
  const hasPublished = publishedWriteups.length > 0;
  const hasDrafts = draftWriteups.length > 0;

  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950 min-h-screen">
        {/* ============================================================
            HEADER
            ============================================================ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <h1 className="text-2xl font-mono font-bold text-green-700">
            <span className="text-green-700">$</span> Security Lab
          </h1>
          <p className="text-sm text-gray-400 font-mono">
            A space for my cybersecurity research & write-ups
          </p>
        </div>

        {/* ============================================================
            INTRO SECTION
            ============================================================ */}
        <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 mb-6">
          <p className="text-sm text-gray-400 font-mono leading-relaxed">
            <span className="text-green-700">▸</span> A space where I document
            what I'm learning, testing and building as I grow in cybersecurity.
            This includes write-ups, tools, scripts and other resources that I
            find useful in my journey.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
              Web Application Security
            </span>
            <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
              Secure Programming
            </span>
            <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
              Penetration Testing
            </span>
            <span className="text-xs px-2 py-1 bg-green-700/20 text-green-700 rounded font-mono">
              Incident Response
            </span>
          </div>
        </div>

        {/* ============================================================
            COUNT ROW — only shown when there is content
            ============================================================
            Hiding this until you have write-ups avoids showing
            "0 published · 0 drafts", which looks broken.
        */}
        {hasPublished && (
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs text-gray-500 font-mono">
              {publishedWriteups.length} published
              {hasDrafts && ` · ${draftWriteups.length} drafts`}
            </span>
            <span className="text-xs text-green-700 font-mono animate-pulse">
              ● Live
            </span>
          </div>
        )}

        {/* ============================================================
            PUBLISHED WRITE-UPS GRID
            ============================================================
            If there are published write-ups, render the grid.
            Otherwise, show the Coming Soon placeholder.

            The grid code itself is unchanged — it just never runs
            until you uncomment a write-up with status: "published".
        */}
        {hasPublished ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publishedWriteups.map((writeup) => (
              <div
                key={writeup.id}
                className="bg-gray-900/50 rounded-lg border border-green-700/30 p-5 hover:border-green-700 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-green-700/10 flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-mono font-bold text-green-700">
                    {writeup.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                    {new Date(writeup.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Excerpt */}
                <p className="text-sm text-gray-400 font-mono mb-3 flex-1">
                  {writeup.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {writeup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-gray-800 text-gray-300 rounded font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-3 border-t border-gray-800 flex justify-between items-center">
                  <a
                    href={writeup.link}
                    className="text-green-700 font-mono text-sm hover:text-green-500 transition inline-flex items-center gap-1"
                  >
                    Read article
                    <span className="text-xs">→</span>
                  </a>
                  <span className="text-xs text-gray-500 font-mono">
                    {writeup.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // ----------------------------------------------------------------
          // COMING SOON PLACEHOLDER
          // ----------------------------------------------------------------
          // Shown when no published write-ups exist yet.
          // Honest, terminal-styled, matches the rest of the site.
          <div className="text-center py-16 border border-dashed border-green-700/30 rounded-lg">
            <p className="text-gray-400 font-mono mb-2">
              <span className="text-green-700">$</span> write-ups loading...
            </p>
            <p className="text-xs text-gray-500 font-mono">
              First articles coming soon — check back in a few days
            </p>
          </div>
        )}

        {/* ============================================================
            DRAFTS SECTION
            ============================================================
            Only renders if there are drafts. Since the writeups array
            is currently empty, this section doesn't render at all.
        */}
        {hasDrafts && (
          <>
            <h2 className="text-xl font-mono font-bold text-gray-500 mt-10 mb-4">
              <span className="text-green-700">$</span> Drafts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {draftWriteups.map((writeup) => (
                <div
                  key={writeup.id}
                  className="bg-gray-900/30 rounded-lg border border-gray-700/30 p-5 opacity-60"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-mono font-bold text-gray-400">
                      {writeup.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-yellow-700/20 text-yellow-500 rounded font-mono">
                      Draft
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-mono mb-3">
                    {writeup.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {writeup.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-gray-800/50 text-gray-500 rounded font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-gray-500 font-mono text-sm">
                      Coming soon
                    </span>
                    <span className="text-xs text-gray-600 font-mono">
                      {writeup.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
