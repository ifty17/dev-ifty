import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    // const links = [
    //   {
    //     id: 1,
    //     child: (
    //       <>
    //         Linkedin <FaLinkedin size={30}></FaLinkedin>
    //       </>
    //     ),
    //     href: "https://www.linkedin.com/in/rahat-kabir-ifty/",
    //     target: "_blank",
    //     style: "rounded-tr-md",
    //   },
    //   {
    //     id: 2,
    //     child: (
    //       <>
    //         Github <FaGithub size={30}></FaGithub>
    //       </>
    //     ),
    //     href: "https://github.com/ifty17",
    //     target: "_blank",
    //   },
    //   {
    //     id: 3,
    //     child: (
    //       <>
    //         Mail <HiOutlineMail size={30}></HiOutlineMail>
    //       </>
    //     ),
    //     href: "mailto:foo@gmail.com",
    //     target: "_blank",
    //   },
    //   {
    //     id: 4,
    //     child: (
    //       <>
    //         Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
    //       </>
    //     ),
    //     href: "https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link",
    //     target: "_blank",
    //     style: "rounded-br-md",
    //   },
    // ];

    return (
      <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[0px] rounded-r-sm hover:rounded-r-lg duration-300 bg-gradient-to-r  from-indigo-600 to-blue-500">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/rahat-kabir-ifty/"
              target="_blank"
              rel="noreferrer"
            >
              <>
                Linkedin <FaLinkedin size={30}></FaLinkedin>
              </>
            </a>
          </li>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[0px] rounded-r-sm hover:rounded-r-lg duration-300 bg-gradient-to-r  from-indigo-600 to-blue-500">
            <a
              href="https://github.com/ifty17"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              <>
                Github <FaGithub size={30}></FaGithub>
              </>
            </a>
          </li>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[0px] rounded-r-sm hover:rounded-r-lg duration-300 bg-gradient-to-r  from-indigo-600 to-blue-500">
            <a
              href="mailto:foo@gmail.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              <>
                Mail <HiOutlineMail size={30}></HiOutlineMail>
              </>
            </a>
          </li>
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[0px] rounded-r-sm hover:rounded-r-lg duration-300 bg-gradient-to-r  from-indigo-600 to-blue-500">
            <a
              href="https://drive.google.com/file/d/1vSy6AqrhiDFzbMUcXNXYPoGiqbaZjz2o/view?usp=share_link"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              <>
                Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
              </>
            </a>
          </li>
        </ul>
      </div>
    );
};

export default SocialLinks;