import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import sequelize from "@/lib/db/connection";
import Admin from "@/lib/models/Admin";

const JWT_SECRET = process.env.JWT_SECRET || "superAdminSecretKey123456";

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { username, password } = body;

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 },
      );
    }

    // Connect to database
    await sequelize.authenticate();

    // Find admin by username
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Compare password
    const isValid = await admin.comparePassword(password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    // Return success response
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login failed. Please try again." },
      { status: 500 },
    );
  }
}
