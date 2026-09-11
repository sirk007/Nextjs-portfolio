"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token to localStorage
        localStorage.setItem("adminToken", data.token);
        // Redirect to dashboard
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="max-w-md mx-auto mt-20 border-x border-gray-700 p-6 bg-slate-950 rounded-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-mono font-bold text-green-700">
            <span className="text-green-700">$</span> Admin Login
          </h2>
          <p className="text-sm text-gray-500 font-mono mt-1">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-mono text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-900 border border-green-700/30 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-green-700 transition"
              placeholder="Enter your username"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-mono text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-900 border border-green-700/30 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-green-700 transition"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/20 border border-red-700/30 rounded p-2">
              <p className="text-red-400 text-sm font-mono text-center">
                {error}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-600 text-white font-mono py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-center text-xs text-gray-500 font-mono space-x-2">
          <span>Don't have an account?</span>
          <a
            href="/register"
            className="text-green-700 hover:text-green-500 transition"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}
