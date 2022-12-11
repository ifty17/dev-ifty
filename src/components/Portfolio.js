import React from "react";
import pcBuilder from "../assets/pcbuilder.png";
import natureTti from "../assets/nature.png";
import proCoder from "../assets/procoder.png";

const Portfolio = () => {
  return (
    <div name="portfolio" className="w-full text-white md:h-screen">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
          <p className="pt-3">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="rounded-lg shadow-md h-full">
            <div>
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={pcBuilder}
                alt=""
              />
            </div>
            <div className="py-4 px-4">
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Live
                </button>
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Client
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Server
                </button>
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Details
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md h-full">
            <div>
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={natureTti}
                alt=""
              />
            </div>
            <div className="py-4 px-4">
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Live
                </button>
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Client
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Server
                </button>
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Details
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-md h-full">
            <div>
              <img
                className="rounded-md duration-200 hover:scale-105 w-full"
                src={proCoder}
                alt=""
              />
            </div>
            <div className="py-4 px-4">
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Live
                </button>
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Client
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 border mx-2 my-2 duration-200 hover:scale-105">
                  Server
                </button>
                <button className="w-1/2 px-6 py-2 mx-2 my-2 border  duration-200 hover:scale-105">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
