import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className="mx-w-screen-lg px-4 md:px-20 mx-auto flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4">About</p>
        </div>
        <p className="text-xl mt-10">
          Hello, I'm Rahat, a front-end developer with a passion for creating
          great user experiences and making the web more accessible. I
          specialize in modern front-end web technology such as HTML, CSS,
          JavaScript, React. Also I have good skills in NodeJS, ExpressJS,
          MongoDB. I'm always looking to learn something new and challenge
          myself. I take great pride in my work and strive to create beautiful,
          usable, and accessible websites.
        </p>

        <br />

        <p className="text-xl">
          I am confident that I can help deliver successful projects that are of
          the highest quality. I am a fast learner and I am committed to staying
          up-to-date with the latest trends in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
