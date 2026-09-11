import { NextResponse } from "next/server";
import Post from "@/lib/models/Post";
import sequelize from "@/lib/db/connection";

export async function GET() {
  try {
    await sequelize.authenticate();
    const posts = await Post.findAll({
      where: { published: true },
      order: [["createdAt", "DESC"]],
    });
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, description, tech, featured } = body;

    await sequelize.authenticate();

    const post = await Post.create({
      title,
      slug: slug || title.toLowerCase().replace(/ /g, "-"),
      description,
      tech,
      featured,
      published: true,
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}
