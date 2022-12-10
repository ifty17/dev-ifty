import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-screen-lg flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus ipsa itaque iusto ad dolor omnis, soluta quos, eligendi
            porro aut tempora aliquid eum provident.
          </p>
          <div className="flex">
            <button className="group cursor-pointer mr-6 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1"></MdOutlineKeyboardArrowRight>
              </span>
            </button>
            <button className="group cursor-pointer text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500">
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1"></MdOutlineKeyboardArrowRight>
              </span>
            </button>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img
            className="rounded-full mx-auto w-[90%] md:w-full border"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
