import React from "react";

const Experience = () => {
  const techs = [
    {
      id: 1,
      style: "shadow-orange-500 fa-brands fa-html5 text-orange-500",
      title: "HTML",
      divStyle: "shadow-orange-500",
    },
    {
      id: 2,
      style: "fa-brands fa-css3-alt text-blue-500",
      title: "CSS",
      divStyle: "shadow-blue-500",
    },
    {
      id: 3,
      style: "fa-brands fa-js text-yellow-500",
      title: "JavaScript",
      divStyle: "shadow-yellow-500",
    },
    {
      id: 4,
      style: "fa-brands fa-react text-blue-600",
      title: "React",
      divStyle: "shadow-blue-600",
    },
    {
      id: 6,
      style: "fa-brands fa-github text-gray-400",
      title: "Github",
      divStyle: "shadow-gray-400",
    },
    {
      id: 7,
      style: "fa-brands fa-node-js text-green-800",
      title: "Node Js",
      divStyle: "shadow-green-800",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full  h-[120vh]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 pt-5 border-orange-600 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, style, title, divStyle }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${divStyle}`}
              >
                <i className={`mx-auto text-[90px] ${style}`}></i>
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
