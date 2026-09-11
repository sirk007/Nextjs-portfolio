import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";
import bcrypt from "bcryptjs";

class Admin extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare email: string;
  declare createdAt: Date;
  declare updatedAt: Date;

  public async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "admins",
    timestamps: true,
  },
);

export default Admin;
