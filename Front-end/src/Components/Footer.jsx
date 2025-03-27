import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 px-4 shadow-md flex flex-wrap justify-between items-center dark:bg-slate-900 dark:text-white">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        Copyright © 2025 <span className="font-bold text-red-600 text-2xl">BookStore</span>.
      </div>
      <nav className="flex gap-4 mt-2 sm:mt-0">
        <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-white">
          Terms & Conditions
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-white">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
