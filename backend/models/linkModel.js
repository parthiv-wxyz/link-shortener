import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Link = sequelize.define("Link", {
  originalUrl: { type: DataTypes.STRING, allowNull: false },
  clicks: { type: DataTypes.INTEGER, defaultValue: 0 },
  slug: { type: DataTypes.STRING, allowNull: false, unique: true },
});

export default Link;
