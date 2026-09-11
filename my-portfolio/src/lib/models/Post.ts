import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";

class Post extends Model {
  public id!: number;
  public title!: string;
  public slug!: string;
  public content!: string;
  public tags!: JSON;
  public published!: boolean;
  public createdAt!: Date;
}

Post.init(
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "posts",
    timestamps: true,
  },
);

export default Post;
