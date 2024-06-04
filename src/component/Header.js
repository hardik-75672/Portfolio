import React from "react";
import {
  Mongodb,
  Nodejs,
  Hardik,
  Reactjs,
  Redux,
  cpp,
  js,
  java,
  css,
  html,
} from "../assets";
import "./Header.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 py-20">
      <div
        className="flex flex-col mb-20 lg:mb-0"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="text-lg font-bold text-orange-700 dark:text-gray-300">
          Software Engineer
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-4xl md:text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-blue-700   dark:bg-[#224cff10] dark:text-[#224cff] ">
            <p className="text-4xl 2xl:text-5xl font-bold text-center">
              <Typewriter
                style={{ color: "white" }}
                options={{
                  strings: ["DEVELOPER", "DESIGNER", "DATA ANALYST", "LEARNER"],
                  autoStart: true,
                  loop: true,

                  deleteSpeed: 160,
                }}
              />
            </p>
          </div>
        </div>

        <h1 className="text-4xl 2xl:text-5xl font-extrabold text-gray-800 dark:text-neutral-100 tracking-wider">
          Hardik Savaliya
        </h1>

        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions.
        </p>

        <div className="mt-10 flex gap-10">
          <button className="bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5">
            Hire Me
          </button>
          <a href="#projects">
            <button className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-blue-800">
              Projects
            </button>
          </a>
        </div>
      </div>

      <div className="w-full flex-1 flex justify-center">
        <div class="blob"></div>
      </div>
    </div>
  );
};

export default Header;
