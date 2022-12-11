import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-white mt-72">
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/64bd44ed-2caf-4a1f-83c7-8a3f5d0525ef"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="group cursor-pointer mr-6 text-white w-fit px-6 py-3 my-8 hover:scale-110 duration-300 flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-blue-500">
              Let's Talk
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1"></MdOutlineKeyboardArrowRight>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
