import React from "react";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <i className="fa-brands fa-linkedin text-[30px]"></i>
        </>
      ),
      href: "https://www.linkedin.com/in/ariyoeyitayo/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <i className="fa-brands fa-github text-[30px]"></i>
        </>
      ),
      href: "https://github.com/ariyoeyitayo",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <i className="fa fa-envelope text-[30px]"></i>
        </>
      ),
      href: "mailto: ariyoeyitayo23@gmail.com",
    },
  ];
  return (
    <div className="flex-col top-[35%] left-0 fixed flex link ">
      <ul>
        {links.map(({ id, child, style, href, download }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 bg-gray-500 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] " +
                "" +
                style
              }
            >
              <a
                href={href}
                target="_blank"
                className="flex justify-between items-center w-full text-white"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
