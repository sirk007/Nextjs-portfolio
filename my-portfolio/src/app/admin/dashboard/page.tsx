"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
}

interface Project {
  id: number;
  title: string;
  slug: string;
  featured: boolean;
  createdAt: string;
}

interface Stats {
  posts: number;
  projects: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({ posts: 0, projects: 0 });
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    fetchDashboardData(token);
  }, [router]);

  const fetchDashboardData = async (token: string) => {
    try {
      const response = await fetch("/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          router.push("/admin/login");
          return;
        }
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await response.json();
      setStats(data.stats);
      setRecentPosts(data.recentPosts);
      setRecentProjects(data.recentProjects);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-700 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section>
      <div className="border-x border-gray-700 p-4 bg-slate-950 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-mono font-bold text-green-700">
              <span className="text-green-700">$</span> Dashboard
            </h1>
            <p className="text-sm text-gray-500 font-mono mt-1">
              Welcome back, Admin!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm font-mono text-red-400 hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-700/30 rounded p-3 mb-4">
            <p className="text-red-400 text-sm font-mono">{error}</p>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 text-center hover:border-green-700 transition">
            <p className="text-3xl font-mono text-green-700">{stats.posts}</p>
            <p className="text-sm text-gray-400 font-mono">Posts</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 text-center hover:border-green-700 transition">
            <p className="text-3xl font-mono text-green-700">
              {stats.projects}
            </p>
            <p className="text-sm text-gray-400 font-mono">Projects</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 text-center hover:border-green-700 transition">
            <p className="text-3xl font-mono text-green-700 animate-pulse">
              ✅
            </p>
            <p className="text-sm text-gray-400 font-mono">Logged in</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Link
            href="/admin/posts/new"
            className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 text-center hover:border-green-700 transition group"
          >
            <span className="text-2xl block mb-2">✍️</span>
            <p className="font-mono text-green-700 group-hover:text-green-500 transition">
              Create New Post
            </p>
            <p className="text-xs text-gray-500 font-mono">Write a blog post</p>
          </Link>
          <Link
            href="/admin/projects/new"
            className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4 text-center hover:border-green-700 transition group"
          >
            <span className="text-2xl block mb-2">🚀</span>
            <p className="font-mono text-green-700 group-hover:text-green-500 transition">
              Add New Project
            </p>
            <p className="text-xs text-gray-500 font-mono">
              Showcase your work
            </p>
          </Link>
        </div>

        {/* Recent Posts & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Posts */}
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                Recent Posts
              </h3>
              <Link
                href="/admin/posts"
                className="text-xs font-mono text-green-700 hover:text-green-500 transition"
              >
                View all →
              </Link>
            </div>
            {recentPosts.length === 0 ? (
              <p className="text-sm text-gray-500 font-mono text-center py-4">
                No posts yet. Create your first post!
              </p>
            ) : (
              <ul className="space-y-2">
                {recentPosts.map((post) => (
                  <li
                    key={post.id}
                    className="flex justify-between items-center text-sm font-mono border-b border-gray-800 pb-2 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          post.published ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      ></span>
                      <span className="text-gray-300 hover:text-green-700 transition">
                        <Link href={`/admin/posts/${post.id}`}>
                          {post.title}
                        </Link>
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatDate(post.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Recent Projects */}
          <div className="bg-gray-900/50 rounded-lg border border-green-700/30 p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                Recent Projects
              </h3>
              <Link
                href="/admin/projects"
                className="text-xs font-mono text-green-700 hover:text-green-500 transition"
              >
                View all →
              </Link>
            </div>
            {recentProjects.length === 0 ? (
              <p className="text-sm text-gray-500 font-mono text-center py-4">
                No projects yet. Add your first project!
              </p>
            ) : (
              <ul className="space-y-2">
                {recentProjects.map((project) => (
                  <li
                    key={project.id}
                    className="flex justify-between items-center text-sm font-mono border-b border-gray-800 pb-2 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.featured ? "bg-green-500" : "bg-gray-500"
                        }`}
                      ></span>
                      <span className="text-gray-300 hover:text-green-700 transition">
                        <Link href={`/admin/projects/${project.id}`}>
                          {project.title}
                        </Link>
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatDate(project.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
