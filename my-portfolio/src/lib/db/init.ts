import sequelize from "./connection";
import Admin from "../models/Admin";
import Post from "../models/Post";
import Project from "../models/Project";

const initDatabase = async () => {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log("✅ Database connection established.");

    // Sync models (create tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log("✅ Database tables synced.");

    // REMOVED: Auto admin creation
    // You'll create admin manually via SQL

    console.log("🎉 Database initialization complete!");
    console.log("📝 Remember to create an admin user manually.");
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    throw error;
  }
};

export default initDatabase;
