import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const DetailsPCB = () => {
    const project = useLoaderData();

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
      id,
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
            <p>• {details1}</p>
            <p>• {details2}</p>
            <p>• {details3}</p>
            <p className='pt-5'>
              <span className='text-3xl'>Packages:</span> <br /> {packages}
            </p>
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
      </div>
    );
};

export default DetailsPCB;