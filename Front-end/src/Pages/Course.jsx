import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import list from "../../public/list.json";
import Cards from "../Components/Cards";
import axios from "axios";

const Course = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const[list,setList] = useState([]);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
    getBook();
  }, []);

  const getBook = async () => {
    const res = await axios.get('https://bookselling-6uf0.onrender.com/book/getbook');
    // console.log(res.data.books);
    const data = res.data.books;
    if(!data){
      return alert("No books found !")
    }
    setList(data)

  }




  return (
    <div
      className={`max-w-screen-2xl mx-auto container px-4 md:px-20 pb-16 transition-all duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="pt-28 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          This course offers a comprehensive understanding of key concepts,
          ensuring a structured and engaging learning experience. It covers
          fundamental and advanced topics, providing practical insights to
          enhance knowledge and skills. Through expert guidance, students
          develop confidence and real-world expertise.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-8 py-2 rounded-lg text-lg font-medium hover:bg-pink-600 transition duration-300 shadow-md">
            Back
          </button>
        </Link>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        {list && list.map((item) => <Cards item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Course;
