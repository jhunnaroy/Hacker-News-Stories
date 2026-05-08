import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { AuthContext } from "../context/AuthContext";
import API from "../services/api";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, setUser } =
    useContext(AuthContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const handleLogout = async () => {
    try {
      await API.get("/auth/logout");

      localStorage.removeItem("token");

      setUser(null);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="
        bg-gray-900
        text-white
        shadow-md
        sticky
        top-0
        z-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            h-16
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="
              text-2xl
              font-bold
              text-orange-400
            "
          >
            HackerNews
          </Link>

          {/* Desktop Menu */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-6
            "
          >
            <Link
              to="/"
              className="
                hover:text-orange-400
                transition
              "
            >
              Home
            </Link>

            <Link
              to="/bookmarks"
              className="
                hover:text-orange-400
                transition
              "
            >
              Bookmarks
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="
                  bg-red-500
                  hover:bg-red-600
                  px-4
                  py-2
                  rounded-lg
                  transition
                "
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-4
                  py-2
                  rounded-lg
                  transition
                "
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              md:hidden
              flex
              flex-col
              gap-4
              pb-4
            "
          >
            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                hover:text-orange-400
              "
            >
              Home
            </Link>

            <Link
              to="/bookmarks"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                hover:text-orange-400
              "
            >
              Bookmarks
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="
                  bg-red-500
                  hover:bg-red-600
                  px-4
                  py-2
                  rounded-lg
                  w-fit
                "
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-4
                  py-2
                  rounded-lg
                  w-fit
                "
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;