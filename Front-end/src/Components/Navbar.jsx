import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { handleSucess } from "../Components/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleChange = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleChange);
    return () => window.removeEventListener("scroll", handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    handleSucess("Logged out successfully");
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all shadow-lg ${
        sticky
          ? isDarkMode
            ? "bg-black shadow-md text-white"
            : "bg-gray-300 shadow-md"
          : isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">BookStore</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Course", "Contact", "About"].map((name, index) => (
            <Link
              key={index}
              to={`/${name === "Home" ? "" : name.toLowerCase()}`}
              className={`text-lg transition-all ${
                isDarkMode
                  ? "text-white hover:text-blue-300"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Input (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className={`border p-2 px-4 rounded-lg focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "text-white bg-gray-700 border-gray-600 focus:ring-blue-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            <button className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-all">
              <FiSearch size={20} />
            </button>
          </div>

          {/* Login / Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-all"
            >
              Login
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button className="text-xl transition-all" onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
          {["Home", "Course", "Contact", "About"].map((name, index) => (
            <Link
              key={index}
              to={`/${name === "Home" ? "" : name.toLowerCase()}`}
              className="text-xl my-4"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          {token ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="text-xl bg-red-600 px-4 py-2 rounded-lg mt-4"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-xl bg-blue-600 px-4 py-2 rounded-lg mt-4"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
