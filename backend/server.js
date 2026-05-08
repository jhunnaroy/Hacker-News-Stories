import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import scrapeRoutes from "./routes/scrapeRoutes.js";

import scrapeStories from "./scraper/scraper.js";

dotenv.config();



const app = express();

app.use(cors());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use("/api/auth", authRoutes);

app.use("/api/stories", storyRoutes);

app.use("/api/scrape", scrapeRoutes);

scrapeStories();
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});