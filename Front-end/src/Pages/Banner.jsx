import React, { useEffect, useState } from "react";
import banner from "../assets/Banner.png"; 
const Banner = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
    
  }, []);
  

  return (
    <div
      className={`max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row items-center justify-between transition-all duration-300 mt-14  ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
    
      <div className="md:w-1/2 w-full p-6 md:mt-32 order-2 md:order-1 space-y-8 text-center md:text-left">
     
        <h1 className="md:text-4xl text-3xl font-bold leading-tight">
          Hello, welcome here to learn something{" "}
          <span className="text-pink-500">new everyday!!!</span>
        </h1>

     
        <p className="text-lg font-normal">
          Our learning platform empowers users with accessible, engaging, and
          interactive education. We offer courses, resources, and community
          support to enhance skills, knowledge, and career growth anytime,
          anywhere. 🚀
        </p>

        {/* Subscription Box */}
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <div className="relative">
            <input
              type="email"
              className={`w-full bg-transparent placeholder:text-gray-500 text-sm border rounded-md pl-3 pr-16 py-3 transition focus:outline-none shadow-sm 
              ${
                isDarkMode
                  ? "text-white border-gray-600 placeholder-gray-400 focus:border-gray-400"
                  : "text-gray-800 border-gray-300 focus:border-gray-500"
              }`}
              placeholder="Email Address"
            />
            <button
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 rounded px-4 py-2 transition 
              ${
                isDarkMode
                  ? "bg-pink-600 text-white hover:bg-gray-500"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 w-full md:mt-0 mt-10 order-1 flex justify-center">
        <img
          src={banner}
          className="w-full max-w-[450px] md:max-w-[550px] object-contain"
          alt="Learning Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
