import React, { useState } from "react";
import heroImage from "../Images/tj flex.png";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 mb-6 px-4 text-white bg-black fixed ">
      <div>
        <h1 className="flex text-4xl py-3 ml-2 logo">
          <img src={heroImage} alt="" className="h-[45px] rounded-full" />
        </h1>
      </div>

      <ul className="flex navbar">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-orange-600 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
              
            </li>
          );
        })}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <i className="fa fa-times text-[30px]"></i>
        ) : (
          <i className="fa fa-bars text-[30px]"></i>
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
