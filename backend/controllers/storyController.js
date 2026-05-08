import Story from "../models/Story.js";
import User from "../models/User.js";

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({
      points: -1,
    });

    res.json(stories);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    res.json(story);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const storyId = req.params.id;

    const alreadyBookmarked = user.bookmarks.includes(
      storyId
    );

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    res.json({
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};