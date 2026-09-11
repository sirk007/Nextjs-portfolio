import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import sequelize from "@/lib/db/connection";
import Post from "@/lib/models/Post";
import Project from "@/lib/models/Project";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(request: Request) {
  try {
    // Verify JWT token
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.substring(7);
    jwt.verify(token, JWT_SECRET);

    await sequelize.authenticate();

    // Get counts
    const [postCount, projectCount] = await Promise.all([
      Post.count(),
      Project.count(),
    ]);

    // Get recent posts (last 5)
    const recentPosts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      limit: 5,
      attributes: ["id", "title", "slug", "published", "createdAt"],
    });

    // Get recent projects (last 5)
    const recentProjects = await Project.findAll({
      order: [["createdAt", "DESC"]],
      limit: 5,
      attributes: ["id", "title", "slug", "featured", "createdAt"],
    });

    return NextResponse.json({
      success: true,
      stats: {
        posts: postCount,
        projects: projectCount,
      },
      recentPosts,
      recentProjects,
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 },
    );
  }
}
