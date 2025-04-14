import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleSucess, handleError } from "../Components/utils";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const updateTheme = () => setIsDarkMode(localStorage.getItem("theme") === "dark");
    window.addEventListener("storage", updateTheme);
    return () => window.removeEventListener("storage", updateTheme);
    console.log("Token is ",token)
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!formData.email || !formData.password) {
      return setError("Please fill all the fields");
    }

    try {
      setLoading(true);
      const { data } = await axios.post("https://bookselling-6uf0.onrender.com/auth/login", formData);
      localStorage.setItem("token", data.token);
      setMessage(data.message);
      handleSucess(data.message);
      navigate("/");
      window.location.reload();
    } catch (error) {
      // setError(error.response?.data?.error || "Login failed");
      handleError(error.response?.data?.error || "Login failed");
    } 
  };

  
  // console.log("Token is ",token)
  return (
    <div
      className={`flex items-center justify-center w-full px-5 sm:px-0 h-screen transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`flex rounded-lg shadow-lg border overflow-hidden md:mt-14 mt-10 max-w-sm lg:max-w-4xl w-full transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        <div className="hidden md:block lg:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1675889721720-d6b791cdf4db?w=1080&auto=format&fit=crop&q=80"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-xl text-center font-semibold">Welcome back!</h2>
          {message && <p className="text-green-500 text-center mt-2">{message}</p>}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              className={`border rounded py-2 px-4 block w-full transition ${
                isDarkMode ? "bg-gray-700 text-white border-gray-500" : "bg-white text-gray-900 border-gray-300"
              }`}
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <label className="block text-sm font-semibold mb-2 mt-4">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border rounded py-2 px-4 pr-10 transition ${
                  isDarkMode ? "bg-gray-700 text-white border-gray-500" : "bg-white text-gray-900 border-gray-300"
                }`}
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <Link to="/forgot-password" className="block text-blue-500 hover:underline mt-2 text-right">
              Forgot password?
            </Link>
            <button
              type="submit"
              className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 transition mt-6"
            
            >
            Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account? <Link to="/signup" className="text-blue-700 hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
