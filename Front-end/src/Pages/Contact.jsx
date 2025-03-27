import React, { useEffect, useState } from "react";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Sync dark mode with global settings
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");

    const handleStorageChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div
      className={`max-w-screen-2xl mx-auto container px-4 md:px-20 pb-16 min-h-screen md:pt-[5%] pt-[8%] flex flex-col justify-center transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container my-12 mx-auto px-2 md:px-4 flex flex-col justify-center">
        <section className="w-full">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Contact Us</h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {/* Contact Form */}
            <form className="mb-12 w-full md:w-10/12 lg:w-5/12 p-6 bg-opacity-90 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
              <div className="mb-3 w-full">
                <label className={`block font-medium mb-[2px] ${isDarkMode ? "text-pink-300" : "text-pink-700"}`}>
                  Name
                </label>
                <input
                  type="text"
                  className={`px-2 py-2 border w-full outline-none rounded-md transition ${
                    isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3 w-full">
                <label className={`block font-medium mb-[2px] ${isDarkMode ? "text-pink-300" : "text-pink-700"}`}>
                  Email
                </label>
                <input
                  type="email"
                  className={`px-2 py-2 border w-full outline-none rounded-md transition ${
                    isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3 w-full">
                <label className={`block font-medium mb-[2px] ${isDarkMode ? "text-pink-300" : "text-pink-700"}`}>
                  Message
                </label>
                <textarea
                  className={`px-2 py-2 border rounded-md w-full outline-none transition ${
                    isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"
                  }`}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded bg-pink-500 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-pink-400 transition"
              >
                Send
              </button>
            </form>

            {/* Contact Details */}
            <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
              <div className="flex flex-wrap justify-center">
                {[
                  { title: "Technical Support", email: "support@example.com", phone: "+1 234-567-89" },
                  { title: "Sales Questions", email: "sales@example.com", phone: "+1 234-567-89" },
                  { title: "Press", email: "press@example.com", phone: "+1 234-567-89" },
                  { title: "Bug Report", email: "bugs@example.com", phone: "+1 234-567-89" },
                ].map((item, index) => (
                  <div key={index} className="mb-8 w-full md:w-6/12 px-3 flex flex-col items-center">
                    <div className="flex items-center w-full max-w-md p-4 border rounded-lg bg-opacity-90 shadow-md border-gray-300 dark:border-gray-600">
                      <div className="shrink-0 p-3 bg-pink-300 text-pink-900 rounded-md">
                        {/* Placeholder for Icons */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125 0.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-0.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>
                      </div>
                      <div className="ml-4 text-center md:text-left">
                        <p className="font-bold">{item.title}</p>
                        <p className="text-gray-600 dark:text-gray-400">{item.email}</p>
                        <p className="text-gray-600 dark:text-gray-400">{item.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Fix */}
    </div>
  );
};

export default Contact;
