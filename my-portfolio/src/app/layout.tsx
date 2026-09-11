/**
 * ======================================================================
 * ROOT LAYOUT - Application Shell
 * ======================================================================
 *
 * This is the root layout file for the entire Next.js project.
 * It wraps every page in the application and provides the
 * consistent structure that appears on all routes.
 *
 * In Next.js App Router, layout.tsx is required and acts as:
 * - A wrapper component for all pages
 * - The place where shared UI (Navbar, Footer) Lives
 * - Location for global styles and metadata
 *
 * Key Concepts:
 * - Layouts are Server Components by default (no "use client" needed)
 * - They persist across page navigation (do not re-render)
 * - They can be nested for different sections of the app
 *
 * @component RootLayout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render inside
 * the layout
 * @returns {JSX.Element} The complete application shell
 */

/**
 * - Navbar Component
 *
 * The main navigation bar that appears at the top of every page.
 * Features:
 * - Responsive dektop menu
 * - Hamburger menu for mobile devices
 * - Contact button with hover effects
 * - Dynamic admin link when logged in
 *
 * This component is a Client Component because it uses:
 * - useState for mobile menu toggle
 * - useEffect for checking auth status
 */
import Navbar from "@/components/layout/Navbar";
/**
 * - Footer Component
 *
 * The footer that appears at the bottom of every page.
 */
import Footer from "@/components/layout/Footer";

/**
 * - Global CSS
 *
 * This imports Tailwind CSS and any custom global styles.
 * Tailwind's directives (@Import "Tailwindcss") are defined here.
 */
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};
/*
 * ======================================================================
 * ROOT LAYOUT - COMPONENT
 * ======================================================================
 *
 * RootLayout component
 *
 * The main layout that wraps all pages in the application.
 *
 * |─────────────────────────────────────────────────────────────|
 * │  <html>                                                     │
 * │  |───────────────────────────────────────────────────────|  │
 * │  │  <body>                                               │  │
 * │  │  |─────────────────────────────────────────────────|  │  │
 * │  │  │  <Navbar />                                     │  │  │
 * │  │  |─────────────────────────────────────────────────|  │  │
 * │  │  |─────────────────────────────────────────────────|  │  │
 * │  │  │  <main>                                         │  │  │
 * │  │  │    {children}  ← Page content goes here         │  │  │
 * │  │  │  </main>                                        │  │  │
 * │  │  |─────────────────────────────────────────────────|  │  │
 * │  │  |─────────────────────────────────────────────────|  │  │
 * │  │  │  <Footer />                                     │  │  │
 * │  │  |─────────────────────────────────────────────────|  │  │
 * │  │  </body>                                              │  │
 * │  |───────────────────────────────────────────────────────|  │
 * │  </html>                                                    │
 * |─────────────────────────────────────────────────────────────|
 *
 * This structure is a Server Component (no "use client" directive)
 * because it doesn't need client-side interactivity.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to render
 * @returns {JSX.Element} The complete application layout
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="px-4 md:px-16 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
