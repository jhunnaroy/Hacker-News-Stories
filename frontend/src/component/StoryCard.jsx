const StoryCard = ({ story, onBookmark }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition
        duration-300
        p-5
      "
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {story.title}
      </h2>

      {/* Info */}
      <div className="space-y-2 text-gray-600">
        
        <p>
          <span className="font-semibold text-black">
            Points:
          </span>{" "}
          {story.points}
        </p>

        <p>
          <span className="font-semibold text-black">
            Author:
          </span>{" "}
          {story.author}
        </p>

        <p>
          <span className="font-semibold text-black">
            Posted:
          </span>{" "}
          {story.postedAt}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        
        <a
          href={story.url}
          target="_blank"
          rel="noreferrer"
          className="
            flex-1
            text-center
            bg-blue-500
            hover:bg-blue-600
            text-white
            py-2
            rounded-lg
          "
        >
          Read More
        </a>

        <button
          onClick={() => onBookmark(story._id)}
          className="
            flex-1
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-2
            rounded-lg
          "
        >
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default StoryCard;