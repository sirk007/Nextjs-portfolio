"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => router.push("/admin"), 1500);
      } else {
        setError(data.error || "Registration failed");
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
        <h2 className="text-2xl font-mono font-bold text-center text-green-700 mb-6">
          Register Admin
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-mono text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-green-700/30 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-green-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-mono text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-green-700/30 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-green-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-mono text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-green-700/30 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-green-700"
              required
              minLength={6}
            />
            <p className="text-xs text-gray-500 font-mono mt-1">
              Minimum 6 characters
            </p>
          </div>

          {error && (
            <div className="text-red-400 text-sm font-mono">{error}</div>
          )}
          {success && (
            <div className="text-green-400 text-sm font-mono">{success}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-600 text-white font-mono py-2 rounded transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 font-mono mt-4">
          Already have an account?{" "}
          <a href="/admin" className="text-green-700 hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
