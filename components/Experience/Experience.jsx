import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
  return (

    <div id="Experience" className="p-10 md:24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#e34f26" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#e34f26" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61dafb" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#f7df1e" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#f24e1e" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47a248" size={50} />
          </span>
          <span className="p-4 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#ff4438" size={50} />
          </span>
        </div>


        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
            <FaGoogle color="#4285f4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className=" text-sm leading-tight font-thin">sept 2023- Present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
            <RiNetflixFill color="#e50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Netflix</h2>
              <p className=" text-sm leading-tight font-thin">sept 2023- Present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
            <FaAmazon color="#ff9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Amazon</h2>
              <p className=" text-sm leading-tight font-thin">sept 2023- Present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE Developer</li>
              </ul>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
