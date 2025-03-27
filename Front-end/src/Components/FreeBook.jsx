import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
const FreeBook = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const[list ,setList] = useState([]);

  // Sync dark mode with navbar
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");

    getBook();
  }, []);
    // Listen for changes in localStorage from Navbar
  //   const handleStorageChange = () => {
  //     setIsDarkMode(localStorage.getItem("theme") === "dark");
  //   };

  //   window.addEventListener("storage", handleStorageChange);
  //   return () => window.removeEventListener("storage", handleStorageChange);
  // }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getBook = async () => {
    const res = await axios.get('http://localhost:8000/book/getbook');
    // console.log(res.data.books);
    const data = res.data.books;
    if(!data){
      return alert("No books found !")
    }
    setList(data)

  }


  // Filter only "Free" category books
  const filterData = list.filter((item) => item.category === "Free");

  return (
    <div
      className={`max-w-screen-2xl mx-auto container md:px-24  px-10 transition-all duration-300 py-6 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Heading Section */}
      <div className="text-center">
        <h1
          className={`text-2xl font-bold pb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Free Offered Books
        </h1>
        <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          Unlock Your Potential: A Guide to the Best Free Courses for Learning,
          Growth, and Success.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {filterData.map((book) => (
            <Cards item={book} key={book.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
