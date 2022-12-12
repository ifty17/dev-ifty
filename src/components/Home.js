import React from "react";
import HeroImage from "../assets/heroImagecopy.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';



const Home = () => {
    

  return (
    <div
      name="home"
      className="pb-40"
    >
      {/* max-w-screen-lg */}
      <div className=" flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row">
        <div className="mt-28 flex flex-col justify-center  md:w-[60%] px-4 md:px-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Hi! I am Rahat Kabir Ifty
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "Web Developer",
                  "React JS Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            Creative Web Developer with the ability to take any programming
            related challenges by handling difficult and hard situations at any
            time.
          </p>
          <div className="flex">
            <Link
              to="portfolio"
              smooth
              duration="500"
              className="hover:scale-110 duration-300 group cursor-pointer mr-6 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1"></MdOutlineKeyboardArrowRight>
              </span>
            </Link>
            <a
              type="button"
              target="_blank"
              href="https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link"
              className="hover:scale-110 duration-300 group cursor-pointer text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1"></MdOutlineKeyboardArrowRight>
              </span>
            </a>
          </div>
        </div>
        <div className="md:w-[50%] md:mt-28 pb-10 pt-24 md:pt-0  md:pb-0">
          <img
            className="rounded-full mx-auto w-[80%] md:w-[80%] lg:w-[60%]  border hover:scale-125 duration-300"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
