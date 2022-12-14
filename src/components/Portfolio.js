import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// import { Link } from "react-scroll";
import { Link} from "react-router-dom";

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
     title,
     id
   } = project;

   console.log(id);
    
  return (
    <div>
      <div name="portfolio" className="w-full text-white pb-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="mx-5 md:ml-20 xl:mx-10 xl:ml-20">
            <h1 className="text-4xl md:text-5xl">{name}</h1>
            <p className="text-2xl pb-5">{title}</p>
            <h4 className=" text-2xl md:text-3xl font-bold">Features:</h4>
            <p>• {details1}</p>
            <p>• {details2}</p>
            <p>• {details3}</p>
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
                to={`/details/${id}`}
                className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              >
                Details
              </Link>
            </div>
          </div>
          <div className=" my-auto mx-10 md:mt-5 md:ml-20 md:w-[500px] lg:ml-0 xl:ml-10 xl:w-[90%]">
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
      </div>
    </div>
  );
};

export default Portfolio;
