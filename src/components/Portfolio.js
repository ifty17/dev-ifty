import React from "react";
import pcBuilder from "../assets/pcbuilder.png";
import natureTti from "../assets/nature.png";
import proCoder from "../assets/procoder.png";

const Portfolio = () => {
  return (
    <div name="portfolio" className="w-full text-white py-10 ">
      <div className="pb-10">
        <p className="text-4xl mx-5 md:mx-10 md:ml-28 font-bold inline border-b-4">
          Projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-5 md:mx-10 md:ml-28">
          <h1 className="text-4xl md:text-5xl">Pc Builder</h1>
          <p className="text-2xl pb-5">
            A Pc components reselling Web Application
          </p>
          <h4 className=" text-2xl md:text-3xl font-bold">Features:</h4>
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
              href="https://pcbuilder-504bc.web.app/"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              type="button"
              target="_blank"
              href="https://github.com/ifty17/Pc-builder-client"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Client Site
            </a>
            <a
              type="button"
              target="_blank"
              href="https://github.com/ifty17/Pc-builder-server"
              className="btn-xs md:btn-md hover:scale-110 duration-300 group cursor-pointer text-white px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-indigo-600 to-blue-500"
              rel="noreferrer"
            >
              Server Site
            </a>
          </div>
        </div>
        <div className=" my-auto mx-10 md:w-[600px] ">
          <img
            className="hover:scale-105 duration-500 rounded-lg"
            src={pcBuilder}
            alt=""
          />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 ">
          <div className=" my-auto mx-10 md:w-[600px] ">
            <img
              className="hover:scale-105 duration-500 rounded-lg"
              src={natureTti}
              alt=""
            />
          </div>
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
        </div>
      </div>
      <div className="block md:hidden">
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
            <img
              className="hover:scale-105 duration-500 rounded-lg"
              src={natureTti}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-5 md:mx-10 md:ml-28">
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
        </div>
        <div className=" my-auto mx-10 md:w-[600px]">
          <img
            className="hover:scale-105 duration-500 rounded-lg"
            src={proCoder}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
