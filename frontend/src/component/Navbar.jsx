import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-orange-400"
          >
            HackerNews
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            <Link
              to="/"
              className="text-sm sm:text-base hover:text-orange-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/bookmarks"
              className="text-sm sm:text-base hover:text-orange-400 transition duration-300"
            >
              Bookmarks
            </Link>

            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm sm:text-base transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;