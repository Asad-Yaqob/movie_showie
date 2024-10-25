import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="h-[60px] flex items-center justify-between max-w-full bg-[#FFFFFF] py-4 px-5">
        {/* Menu Icon */}
        <div className="  cursor-pointer flex " onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}

          {/* Logo */}
          <span className="text-2xl font-bold  ps-5">
            MovieShowie
          </span>
        </div>

        {/* Routes on beyond mobile  */}

        <div className="hidden  lg:flex">
          <a
            href="/"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            Home
          </a>
          <a
            href="/movies"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            Movies
          </a>
          <a
            href="/about"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            About
          </a>
          <a
            href="/contact"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            Contact
          </a>
        </div>

        {/* Routes on mobile */}
        <div className={!menuOpen ? "hidden" : "mobileMenu"}>
          <a
            href="/"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            Home
          </a>
          <div className="py-2">
            <hr className="border-gray-300 w-full " />
          </div>
          <a
            href="/movies"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            Movies
          </a>
          <div className="py-2">
            <hr className="border-gray-300 w-full " />
          </div>
          <a
            href="/about"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            About
          </a>
          <div className="py-2">
            <hr className="border-gray-300 w-full " />
          </div>
          <a
            href="/contact"
            className="block  px-5 text-xl hover:text-gray-800"
          >
            Contact
          </a>
          <div className="py-2">
            <hr className="border-gray-300 w-full " />
          </div>
        </div>

        {/* Sign Up Button (hidden on mobile) */}
        <div className="hidden lg:block">
          <button className="bg-gray-600 text-black text-xl hover:text-gray-400 hover:bg-black px-5 py-2 rounded transitio ease-in-out duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
