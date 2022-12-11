import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Footer = () => {
    return (
      <footer className="footer footer-center p-10  text-primary-content">
        <div>
          <Link
            to="home"
            smooth
            duration={600}
            className="text-5xl font-signature ml-2 hover:scale-105 duration-200 cursor-pointer"
          >
            Rahat Kabir
          </Link>
          <p> Web developer</p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              className="flex justify-between items-center w-full text-white hover:scale-125 duration-300"
              href="https://www.linkedin.com/in/rahat-kabir-ifty/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a
              href="https://github.com/ifty17"
              className="flex justify-between items-center w-full text-white hover:scale-125 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub size={30}></FaGithub>
            </a>
            <a
              href="https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link"
              className="flex justify-between items-center w-full text-white hover:scale-125 duration-300"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;