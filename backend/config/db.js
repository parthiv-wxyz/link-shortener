import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.SUPABASE_DB, process.env.SUPABASE_USER, process.env.SUPABASE_PASS, {
  host: process.env.SUPABASE_HOST,
  dialect: "postgres",
  port: 5432,
  logging: false,
});
export default sequelize;
