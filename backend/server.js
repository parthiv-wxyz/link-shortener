import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js";
import linkRoutes from "./routes/linkRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", linkRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }) 
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(err => console.error("Sync error:", err));