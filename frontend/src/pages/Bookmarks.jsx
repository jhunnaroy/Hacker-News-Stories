import { useEffect, useState } from "react";
import API from "../services/api";
import StoryCard from "../component/StoryCard";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const { data } = await API.get("/stories");

      const savedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];

      const filteredStories = data.filter((story) =>
        savedBookmarks.includes(story._id)
      );

      setBookmarks(filteredStories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeBookmark = (id) => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    const updatedBookmarks = savedBookmarks.filter(
      (bookmarkId) => bookmarkId !== id
    );

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(updatedBookmarks)
    );

    setBookmarks((prev) =>
      prev.filter((story) => story._id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Bookmarked Stories
          </h1>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Your saved Hacker News articles
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="flex flex-col items-center gap-4">
              
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

              <p className="text-gray-600 text-lg">
                Loading bookmarks...
              </p>
            </div>
          </div>
        ) : bookmarks.length > 0 ? (
          
          /* Bookmark Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {bookmarks.map((story) => (
              <div
                key={story._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <div className="p-5">
                  
                  <StoryCard story={story} />

                  <button
                    onClick={() => removeBookmark(story._id)}
                    className="
                      mt-5
                      w-full
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      font-medium
                      py-3
                      rounded-xl
                      transition duration-300
                    "
                  >
                    Remove Bookmark
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          
          /* Empty State */
          <div className="flex justify-center items-center h-72">
            <div className="bg-white shadow-md rounded-2xl p-10 text-center max-w-md w-full">
              
              <div className="text-6xl mb-4">
                🔖
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No Bookmarks Yet
              </h2>

              <p className="text-gray-500">
                Start bookmarking stories to see them here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;