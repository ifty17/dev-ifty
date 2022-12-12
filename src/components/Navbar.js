import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="z-[999] flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600  fixed">
      <div>
        <ScrollLink
          to="home"
          smooth
          duration={600}
          className="text-5xl font-signature ml-2 hover:scale-105 duration-200 cursor-pointer"
        >
          <RouterLink to="/">Rahat Kabir</RouterLink>
        </ScrollLink>
      </div>

      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <ScrollLink to="home" smooth duration={700}>
            <RouterLink to="/">
                Home
              
            </RouterLink>
          </ScrollLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <ScrollLink to="about" smooth duration={700}>
            <RouterLink to="/">
                About
            </RouterLink>
          </ScrollLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <ScrollLink to="portfolio" smooth duration={700}>
            <RouterLink to="/">
                Portfolio
              
            </RouterLink>
          </ScrollLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <ScrollLink to="experience" smooth duration={700}>
            <RouterLink to="/">
                Skills
            </RouterLink>
          </ScrollLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
          <ScrollLink to="contact" smooth duration={700}>
            <RouterLink to="/">
                Contact
              
            </RouterLink>
          </ScrollLink>
        </li>
        <RouterLink
          className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          to="/blogs"
        >
          Blogs
        </RouterLink>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden hover:scale-105 duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 text-white">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <ScrollLink
              onClick={() => setNav(false)}
              to="home"
              smooth
              duration={700}
            >
              <RouterLink to="/">Home</RouterLink>
            </ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <ScrollLink
              onClick={() => setNav(!nav)}
              to="about"
              smooth
              duration={700}
            >
              about
            </ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <ScrollLink
              onClick={() => setNav(!nav)}
              to="portfolio"
              smooth
              duration={700}
            >
              portfolio
            </ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <ScrollLink
              onClick={() => setNav(!nav)}
              to="experience"
              smooth
              duration={700}
            >
              experience
            </ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <ScrollLink
              onClick={() => setNav(!nav)}
              to="contact"
              smooth
              duration={700}
            >
              contact
            </ScrollLink>
          </li>
          <RouterLink
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
            to="/blogs"
          >
            Blogs
          </RouterLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
