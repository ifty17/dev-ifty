import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongoDb from "../assets/mongoDb.png";
import react from "../assets/react.png";
import github from "../assets/github.png";

const Experience = () => {

  return (
    <div
      name="experience"
      className="w-full h-screen mt-80 md:mt-5"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 p-2 inline ">Skills</p>
          <p className="pt-4">These are the technologies I have worked with.</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <img src={html} alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={css} alt="" className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={javaScript} alt="" className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
            <img src={react} alt="" className="w-20 mx-auto" />
            <p className="mt-4">React JS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
            <img src={node} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Node JS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-600">
            <img src={mongoDb} alt="" className="w-[90%] mx-auto" />
            <p className="mt-4">MongoDB</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img src={tailwind} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
            <img src={github} alt="" className="w-20 mx-auto" />
            <p className="mt-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
