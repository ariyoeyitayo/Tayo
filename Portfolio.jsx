import React from "react";
import img1 from "../Images/c2.jpg";
import img2 from "../Images/c4.jpg";
import img3 from "../Images/c5.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: img1,
      chref: "https://github.com/ariyoeyitayo/gatsby-ecommerce-theme",
      href: "https://sdney.netlify.app/"
    },
    {
      id: 2,
      src: img2,
      chref: "https://github.com/ariyoeyitayo/weight-converter",
      href: "https://password-generator-24.netlify.app/"
    },
    {
      id: 3,
      src: img3,
      chref : "https://github.com/ariyoeyitayo/nextjs-blog-theme",
      href: "https://blog-theme-24.netlify.app/"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, chref }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-gray-600 border rounded shadow-md shadow-orange-600">
                    <a href={href}>Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-gray-600 border rounded shadow-md shadow-orange-600">
                    <a href={chref}>Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
