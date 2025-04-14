import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleError, handleSucess } from "../Components/utils";

const Signup = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");

    const handleStorageChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.email || !formData.password) {
      return setError("Please fill all the fields");
    }

    try {
      const res = await axios.post("https://bookselling-6uf0.onrender.com/auth/signup", formData);
      handleSucess(res.data.message);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
      handleError(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <section
      className={`h-screen flex items-center justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full">
        <div
          className={`flex rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full transition-all duration-300 ${
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
        >
          <div className="hidden md:block lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1675889721720-d6b791cdf4db?w=1080&auto=format&fit=crop&q=80"
              alt="Signup Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-center font-semibold">Create an Account</p>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <form onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold mb-2 mt-4">Username</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded py-2 text-black px-4 block w-full"
                required
              />

              <label className="block text-sm font-semibold mb-2 mt-4">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded text-black py-2 px-4 block w-full"
                required
              />

              <label className="block text-sm font-semibold mb-2 mt-4">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded py-2 px-4 text-black block w-full"
                required
              />

              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded hover:bg-blue-600 transition mt-6"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account? <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;