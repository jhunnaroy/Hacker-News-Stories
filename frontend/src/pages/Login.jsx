import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem("token", data.token);

      setUser(data.user);

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Invalid Credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
        
        {/* Heading */}
        <div className="text-center mb-8">
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Login to continue reading stories
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-3
              rounded-xl
              transition
              duration-300
            "
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
          Don't have an account?{" "}
          
          <Link
            to="/register"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;