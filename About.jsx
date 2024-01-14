import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 py-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600">
            About
          </p>
        </div>
        <p className="text-xl mt-10 leading-loose">
        Hi, I'm Ariyo Eyitayo Emmanuel, a Full-Stack Web Developer with a passion for crafting digital experiences that seamlessly blend functionality and aesthetics. My journey in web development started with a fascination for building interactive and dynamic websites.

I specialize in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, and Node.js. My goal is to contribute to projects that not only meet but exceed user expectations, pushing the boundaries of what's possible in the digital landscape.

I believe in the power of continuous learning and staying updated with the latest industry trends. Collaboration is at the core of my work philosophy, and I thrive in dynamic team environments where innovative ideas are valued.

When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and embracing the creative process of problem-solving. Let's connect and bring your web development ideas to life!
        </p>

        <br />

       
      </div>
    </div>
  );
};

export default About;
