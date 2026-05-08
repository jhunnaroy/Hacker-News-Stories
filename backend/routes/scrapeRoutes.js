import express from "express";
import scrapeStories from "../scraper/scraper.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await scrapeStories();

  res.json({
    message: "Scraping Done",
  });
});

export default router;