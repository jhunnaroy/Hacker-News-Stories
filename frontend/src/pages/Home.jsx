import { useEffect, useState } from "react";
import API from "../services/api";
import StoryCard from "../component/StoryCard";

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data } = await API.get("/stories");
      setStories(data);
    } catch (error) {
      console.log(error);
    }
  };

const handleBookmark = async (id) => {
  try {
    await API.post(`/stories/${id}/bookmark`);

    // Get existing bookmarks
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    let updatedBookmarks;

    // Toggle bookmark
    if (existingBookmarks.includes(id)) {
      updatedBookmarks = existingBookmarks.filter(
        (bookmarkId) => bookmarkId !== id
      );
    } else {
      updatedBookmarks = [...existingBookmarks, id];
    }

    // Save updated bookmarks
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(updatedBookmarks)
    );

    alert("Bookmark Updated");
  } catch (error) {
    alert("Login Required");
  }
};
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Top Hacker News Stories
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Latest trending stories from Hacker News
          </p>
        </div>

        {/* Stories */}
        {stories.length > 0 ? (
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-5
            "
          >
            {stories.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-500 text-lg">
              No stories available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;