import { NextResponse } from "next/server";
import sequelize from "@/lib/db/connection";
import Admin from "@/lib/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { username, password, email } = body;

    // Validate input
    if (!username || !password || !email) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    // Check if admin already exists (prevent multiple registrations)
    const existingAdmin = await Admin.findOne({
      where: { username },
    });
    if (existingAdmin) {
      return NextResponse.json(
        { success: false, error: "Admin already exists" },
        { status: 409 },
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Connect to DB
    await sequelize.authenticate();

    // Create admin with hashed password
    const admin = await Admin.create({
      username,
      password: hashedPassword,
      email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admin registered successfully!",
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
