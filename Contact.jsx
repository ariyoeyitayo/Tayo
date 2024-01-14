import React from "react";

const Contact = () => {
  return (
    <div name="contact" className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-orange-600 font-bold">Contact Me</p>
          <p className="py-6">
            Submit the form below and get in touch with me socially with my
            social links
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/0302ff41-e973-4f72-ac14-ebfd0f3d9e3b" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name..."
              className="p-2 border-2 bg-transparent focus:outline-none rounded-md text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email..."
              className="p-2 my-4 border-2 bg-transparent focus:outline-none rounded-md text-white"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 border-2 bg-transparent focus:outline-none rounded-md text-white"
              placeholder="Your Message..."
            ></textarea>
            <button className="text-white bg-gradient-to-b from-orange-600 to-red-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
