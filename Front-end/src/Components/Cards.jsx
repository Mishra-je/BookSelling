import React from "react";

function Cards({ item }) {
  // Split title into words and limit to 16 words
  const limitedTitle = item.title.split(" ").slice(0, 16).join(" ") + (item.title.split(" ").length > 16 ? "..." : "");

  return (
    <div className="mt-4 my-3 p-3">
      <div className="md:w-80 w-full bg-white shadow-xl hover:scale-105 transition duration-200 dark:bg-slate-900 dark:text-white dark:border border-gray-300 rounded-xl">
        {/* Book Image */}
        <figure className="h-48">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded-t-xl" />
        </figure>

        {/* Card Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold flex justify-between items-center">
            {item.name}
            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
              {item.category}
            </div>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{limitedTitle}</p>

          {/* Price & Buy Button */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-lg font-semibold text-green-600">
              {item.price === 0 ? "Free" : `$${item.price}`}
            </div>
            <button className="px-4 py-2 rounded-full border-2 border-pink-500 text-pink-500 font-semibold 
                               hover:bg-pink-500 hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
