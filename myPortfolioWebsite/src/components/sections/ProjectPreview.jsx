import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { Link } from "react-router-dom";
import next from "../../assets/arrow.svg";

function ProjectPreview() {
  return (
    <section
      id="projects"
      className="min-h-screen/2 flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        {/* Heading  */}
        <div className="max-w-5xl mx-auto px-4 mt-10 xl:mt-20">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </div>

        {/* Main dish */}
        <div className="xl:w-[900px] grid grid-cols-1 md:grid-cols-1 gap-6 mt-10 ">
          <div
            className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 
           hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 className="text-4xl font-bold mb-5">Comming Soon..</h3>
            {/* <p className="text-gray-400 mb-1">
              Made Weather app by fetching api
            </p> */}
            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                );
              })}
              {/* <div className="flex justify-end items-center mt-0">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-1"
              >
                View Project ➡️
              </a>
            </div> */}
            </div>
          </div>
          <div
            className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 
           hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 className="text-4xl font-bold mb-5">Comming Soon..</h3>
            {/* <p className="text-gray-400 mb-1">
              Made Weather app by fetching api
            </p> */}
            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                );
              })}
              {/* <div className="flex justify-end items-center mt-0">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-1"
              >
                View Project ➡️
              </a>
            </div> */}
            </div>
          </div>
          <div
            className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 
           hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 className="text-4xl font-bold mb-5">Comming Soon..</h3>
            {/* <p className="text-gray-400 mb-1">
              Made Weather app by fetching api
            </p> */}
            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                );
              })}
              {/* <div className="flex justify-end items-center mt-0">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-1"
              >
                View Project ➡️
              </a>
            </div> */}
            </div>
          </div>
          <div
            className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 
           hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 className="text-4xl font-bold mb-5">Comming Soon...</h3>
            {/* <p className="text-gray-400 mb-1">
              Made Weather app by fetching api
            </p> */}
            <div className="flex flex-wrap gap-2 mt-3">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                );
              })}
              {/* <div className="flex justify-end items-center mt-0">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-1"
              >
                View Project ➡️
              </a>
            </div> */}
            </div>
          </div>
        </div>
        <div className="flex mt-8 justify-center">
          <Link
            to="/projects"
            className="flex items-center border-2 border-blue-500/50 text-blue-500 py-3 px-5 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
          >
            {" "}
            See More Projects <img className="w-8 " src={next} alt="" />
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default ProjectPreview;
