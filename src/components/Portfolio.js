import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import pcBuilder from "../assets/pcbuilder.png";
import pcBuilder2 from '../assets/pcbuilder2.png';
import pcBuilder3 from '../assets/pcbuilder3.png';
import nature from "../assets/nature.png";
import nature2 from '../assets/nature2.png';
import nature3 from '../assets/nature3.png';
import proCoder from "../assets/procoder.png";
import proCoder2 from '../assets/procoder2.png';
import proCoder3 from '../assets/procoder3.png';
import { Link } from "react-scroll";
import { RouterProvider } from "react-router-dom";
import router from "../routes/routes";

const Portfolio = ({project}) => {
    console.log(project);

   const {
     name,
     live,
     client,
     server,
     img1,
     img2,
     img3,
     details1,
     details2,
     details3,
     packages,
   } = project;
    
  return (
    <div name="portfolio" className="w-full text-white py-10 ">
      <div className="pb-10">
        <p className="text-4xl mx-5 md:mx-10 md:ml-28 font-bold inline border-b-4">
          Projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-5 md:mx-10 md:ml-28">
          <h1 className="text-4xl md:text-5xl">{name}</h1>
          <p className="text-2xl pb-5">
            A Pc components reselling Web Application
          </p>
          <h4 className=" text-2xl md:text-3xl font-bold">Features:</h4>
          <p>
            • {details1}
          </p>
          <p>
            • {details2}
          </p>
          <p>
            • {details3}
          </p>
          <div className="flex gap-3 md:gap-8">
            <a
              type="button"
              target="_blank"
              href={live}
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              type="button"
              target="_blank"
              href={client}
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Client Site
            </a>
            <a
              type="button"
              target="_blank"
              href={server}
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Server Site
            </a>
            <Link
              to="/details"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              
            >
              Details
            </Link>
          </div>
        </div>
        <div className=" my-auto mx-10 md:w-[600px] ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="hover:scale-105 duration-500 rounded-lg mb-8"
                src={img1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="hover:scale-105 duration-500 rounded-lg mb-8"
                src={img2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="hover:scale-105 duration-500 rounded-lg mb-8"
                src={img3}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 ">
          <div className="mx-5 md:mx-10 md:ml-28">
            <h1 className="text-4xl md:text-5xl">Nature tti</h1>
            <p className="text-2xl pb-5">
              A photography service providing Web Application.
            </p>
            <h4 className=" text-2xl md:text-3xl font-bold">Features:</h4>
            <p>
              • You can add a service to this website and you can also add a
              review of a specific product you can also see other people's
              reviews.
            </p>
            <p>
              • When you give multiple or single reviews you can see all your
              reviews in the My reviews option.
            </p>
            <p>
              • When you login in you will see two more options in the navbar.
            </p>
            <p>
              • When you login in you will see two more options in the navbar.
            </p>
            <div className="flex gap-3 md:gap-8">
              <a
                type="button"
                target="_blank"
                href="https://assignment-11-fd0c0.web.app/"
                className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
                rel="noreferrer"
              >
                Live Site
              </a>
              <a
                type="button"
                target="_blank"
                href="https://github.com/ifty17/Nature-tti-client"
                className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
                rel="noreferrer"
              >
                Client Site
              </a>
              <a
                type="button"
                target="_blank"
                href="https://github.com/ifty17/Nature-tti-server"
                className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
                rel="noreferrer"
              >
                Server Site
              </a>
            </div>
          </div>
          <div className=" my-auto mx-10 md:w-[600px] ">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="hover:scale-105 duration-500 rounded-lg mb-8"
                  src={nature}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="hover:scale-105 duration-500 rounded-lg mb-8"
                  src={nature2}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="hover:scale-105 duration-500 rounded-lg mb-8"
                  src={nature3}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
        {/* <div className="mx-5 md:mx-10 md:ml-28">
          <h1 className="text-4xl md:text-5xl">Pro Coder</h1>
          <p className="text-2xl pb-5">
            An e-learning platform to learn programming.
          </p>
          <h4 className=" text-2xl md:text-3xl font-bold">Features:</h4>
          <p>
            • At the top of the navbar you can see four options when you click
            the Courses option you will see all the courses.
          </p>
          <p>
            • When you click the side navbar option it will take you to the
            details page and you can download course documentation (PDF).
          </p>
          <p>
            • When you click the Buy now button it will take you to the login
            page if you are not logged in. If you logged in it will take you to
            the Checkout page.
          </p>
          <div className="flex gap-3 md:gap-8">
            <a
              type="button"
              target="_blank"
              href="https://assignment-10-78b70.web.app/"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              type="button"
              target="_blank"
              href="https://github.com/ifty17/Pro-coder-client"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Client Site
            </a>
            <a
              type="button"
              target="_blank"
              href="https://github.com/ifty17/Pro-coder-server"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Server Site
            </a>
          </div>
        </div> */}
        {/* <div className=" my-auto mx-10 md:w-[600px]">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="hover:scale-105 duration-500 rounded-lg mb-8"
                src={proCoder}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="hover:scale-105 duration-500 rounded-lg mb-8"
                src={proCoder2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="hover:scale-105 duration-500 rounded-lg mb-8"
                src={proCoder3}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Portfolio;
