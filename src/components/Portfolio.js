import React from "react";
import pcBuilder from "../assets/pcbuilder.png";
import natureTti from "../assets/nature.png";
import proCoder from "../assets/procoder.png";

const Portfolio = () => {
  return (
    <div name="portfolio" className="w-full text-white py-10 md:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-10">
          <h1 className="text-5xl">Pc Builder</h1>
          <p className="text-2xl pb-5">
            A Pc components reselling Web Application
          </p>
          <h4 className="text-3xl font-bold">Features:</h4>
          <p>
            • Users can create two types of accounts: Buyer account & Seller
            account when they sign in. Also this website has an admin route only
            for admin.
          </p>
          <p>
            • Sellers can add products and delete products also they can see
            their products and they can advertise their products.
          </p>
          <p>
            • Admin can see all sellers and all buyers and reported items. Admin
            can delete a seller or buyer if he wants delete.
          </p>
          <div className="flex gap-3 md:gap-8">
            <a
              type="button"
              target="_blank"
              href="https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              type="button"
              target="_blank"
              href="https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Client Site
            </a>
            <a
              type="button"
              target="_blank"
              href="https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Server Site
            </a>
            
          </div>
        </div>
        <div className=" my-auto mx-10 md:w-[600px] md:ml-20">
          <img src={pcBuilder} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
