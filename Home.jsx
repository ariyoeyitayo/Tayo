import React from "react";
import heroImage from "../Images/tj flex.png";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center content-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h3 className="text-orange-600 text-xl">Ariyo Eyitayo Emmanuel</h3>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full-Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 4 years of experience, building and designing of softwares.
            Currently, I love to work on Web applications using technologies
            like React, TailwindCSS, NextJS and Firebase.
          </p>
          <div>
            <Link smooth duration={500} to="portfolio" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-600 to-red-700">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 px-2 ">
                <i className="fa fa-chevron-right text-[15px]"></i>
              </span>
            </Link>
          </div>
          <div className="text-white text-[25px] py-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/ariyoeyitayo"
            >
              <i className="pr-4 hover:-translate-y-3 hover:text-orange-600 duration-300 cursor-pointer fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ariyoeyitayo"
            >
              <i className="pr-4 hover:-translate-y-3 hover:text-orange-600 duration-300 cursor-pointer fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/ariyoeyitayo"
            >
              <i className="pr-4 hover:-translate-y-3 hover:text-orange-600 duration-300 cursor-pointer fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ariyo_eyitayo"
            >
              <i className="pr-4 hover:-translate-y-3 hover:text-orange-600 duration-300 cursor-pointer fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            height={50}
            className="rounded-2xl mx-auto w-2/3 md:h-[350px] md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
