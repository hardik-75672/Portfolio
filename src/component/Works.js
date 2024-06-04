import React from "react";
import projects from "./Data.jsx";
import { github, deploy, github1, deploy1 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Works = ({ darkMode }) => {
  const value = darkMode;
  console.log(darkMode);
  return (
    <div className="w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h4 className="text-3xl font-bold text-black dark:text-white mt-10 ">
        Project
      </h4>

      <div className="flex flex-wrap gap-10 lg:gap-20 justify-center ">
        {projects.map((p, index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={index}
            className="w-[350px] h-[470px] cursor-pointer shadow-2xl hover:scale-110 ease-in-out duration-300 rounded-md md:h-[450px] lg:h-[450px] dark:bg-[#04133e]"
          >
            <img
              src={p.imgsrc}
              alt="hy"
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="w-full h-[180px] bg-white dark:bg-[#04133e]">
              <h4 className="text-2xl text-black dark:text-white font-semibold py-2 px-3 ">
                {p.title}
              </h4>
              <p className="text-base text-justify text-gray-600 font-medium  align-baseline px-3 ">
                {p.desc}
              </p>

              {!value ? (
                <div className="flex">
                  <a href={p.link} target="_blank">
                    <img
                      src={github}
                      className="object-cover m-3 w-10 h-10 rounded-full "
                    ></img>
                  </a>
                  <img
                    src={deploy}
                    className="object-cover m-3 w-10 h-10  "
                  ></img>
                </div>
              ) : (
                <div className="flex">
                  <a href={p.link} target="_blank">
                    <img
                      src={github1}
                      className="object-cover opacity-80 m-3 w-10 h-10 rounded-full "
                    ></img>
                  </a>
                  <img
                    src={deploy1}
                    className="object-cover  opacity-70  m-3 w-10 h-10 "
                  ></img>
                </div>
              )}

              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
