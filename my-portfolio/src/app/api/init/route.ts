import { NextResponse } from "next/server";
import initDatabase from "@/lib/db/init";

export async function GET() {
  try {
    await initDatabase();
    return NextResponse.json({
      success: true,
      message: "Database initialized successfully!",
    });
  } catch (error) {
    console.error("Init error:", error); // Log full error
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Database initialization failed",
        stack:
          process.env.NODE_ENV === "development"
            ? error instanceof Error
              ? error.stack
              : undefined
            : undefined,
      },
      { status: 500 },
    );
  }
}
