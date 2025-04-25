import React, { useEffect, useState } from "react";
import { GoPersonFill } from "react-icons/go";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [activeSection, setActiveSection] = useState("about");

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
      className={`max-w-screen-2xl mx-auto container px-4 sm:px-6 lg:px-20 py-16 sm:py-20 transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* About Header */}
      <div className="text-center px-2 sm:px-6">
        <h1 className="mb-8 text-3xl sm:text-4xl font-bold">About Us</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed manrope-font1">
          Welcome to BookStore, your one-stop destination for quality
          educational content. Our platform provides free & premium courses,
          books, and resources to empower learners worldwide. 🌍🚀
        </p>
      </div>

      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {/* Left Section - Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?t=st=1742103434~exp=1742107034~hmac=4e7a4241a5cf2e97ce252dffd881c5d0733befba827bc1354437d8a30c8eed1f&w=1800"
            alt="Learning"
            className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md"
          />
        </div>

        {/* Right Section - Content */}
        <div className="space-y-6 px-2 sm:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            At BookStore, we believe that education should be accessible,
            engaging, and high-quality. Our mission is to provide learners with
            comprehensive and structured resources to enhance their skills and
            career growth.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-base sm:text-lg space-y-2">
            <li>📚 Vast Collection of free and premium books & courses.</li>
            <li>🌟 Expert-Led Content curated by industry professionals.</li>
            <li>🎯 User-Friendly & Interactive Learning Experience.</li>
            <li>🌍 Access Anytime, Anywhere - Learn at Your Own Pace.</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to Start Learning?
        </h2>
        <p className="text-base sm:text-lg mt-4">
          Join thousands of learners and start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center mt-6">
          <a
            href="/course"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Explore Courses
          </a>
          <a
            href="/course"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-orange-600 transition duration-300 shadow-md"
          >
            Explore Free Courses
          </a>
        </div>
      </div>

      {/* Developer Info */}
      <div className="text-center mt-20">
        <h2 className="font-semibold text-3xl sm:text-4xl mb-4">
          You Want to Know About the Developer?
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          Discover the journey, skills, and experience of the developer behind
          this platform.
        </p>
      </div>

      {/* Developer Sections */}
      <div className="mt-10 flex flex-col items-center">
        {/* Button Group */}
        <div className="flex flex-wrap justify-center gap-4">
          {["about", "portfolio", "resume"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`relative flex items-center gap-2 px-5 py-2.5 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 border ${
                activeSection === section
                  ? "bg-blue-700 text-white border-blue-700"
                  : isDarkMode
                  ? "border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
              <GoPersonFill />
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mt-8 max-w-3xl text-center p-4 sm:p-6 border rounded-lg transition-all duration-300">
          {activeSection === "about" && (
            <>
              <h3 className="text-2xl font-semibold mb-3">About the Developer</h3>
              <p className="text-base sm:text-lg">
                Hy I am Sachin Mishra, a BCA (2021-24) Pass-out Student and
                currently pursuing MCA from Chandigarh University. I am a Full
                Stack Developer skilled in HTML, CSS, Tailwind CSS, React.js,
                Node.js, Express.js, and MongoDB. I also have strong
                understanding of C++, Java, and Python. I’m passionate about
                building functional and visually appealing web applications.
              </p>
            </>
          )}

          {activeSection === "portfolio" && (
            <>
              <h3 className="text-2xl font-semibold mb-3">Developer Portfolio</h3>
              <p className="text-base sm:text-lg">
                I’ve worked on various full-stack projects and APIs. Check out my latest work on my{" "}
                <a
                  href="https://sachin-portfolio-xi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Portfolio
                </a>
                .
              </p>
            </>
          )}

          {activeSection === "resume" && (
            <>
              <h3 className="text-2xl font-semibold mb-3">Developer Resume</h3>
              <p className="text-base sm:text-lg">
                Want to know more about my skills and experience? Download my resume{" "}
                <a
                  href="https://drive.google.com/file/d/1cv6CNe0JWl-dOJk6POpGW4tQ8dJ3kkiE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  here
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
