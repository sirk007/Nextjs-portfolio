import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

class Project extends Model {
  public id!: number;
  public title!: string;
  public slug!: string;
  public description!: string;
  public tech!: string[];
  public featured!: boolean;
  public createdAt!: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tech: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "projects",
    timestamps: true,
  },
);

export default Project;
