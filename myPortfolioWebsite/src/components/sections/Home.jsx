import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-start relative ml-3  mt-4 md:ml-25 md:mt-20"
      >
        <RevealOnScroll>
          <div className="text-start z-10 px-3 sm:px-6 md:px-8 max-w-screen-lg mx-auto">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent animate-heading [text-shadow:0_2px_4px_rgba(0,0,0,0.3)] md:leading-none">
              Varun Singh
            </h1>

            <h2 className="ml-1 text-xl sm:text-lg md:text-3xl font-semibold text-gray-200 mt-3 mb-8 md:ml-3 md:mb-6 animate-heading">
              Full Stack Developer
            </h2>

            <p className="ml-1 md:ml-3 text-lg sm:text-xl md:text-xl font-semibold text-gray-300 animate-heading max-w-3xl ">
              <span className="text-xl  md:text-2xl font-bold text-cyan-500">
                Hi,{" "}
              </span>
              I'm{" "}
              <span className="text-cyan-500 text-xl md:text-2xl font-bold">
                Varun Singh
              </span>{" "}
              — a Full Stack Web Developer focused on building complete websites
              from front-end to back-end logic. Dedicated to writing clean code,
              delivering smooth user experiences, and building fast, scalable
              applications.
            </p>

            <div className="flex justify-center space-x-4">
              {/* Enhanced View Projects Button */}
              {/* <div className="mt-8">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-white font-medium overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                >
                  Button background with gradient
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500 group-hover:scale-110"></span>

                  Ripple pulse effect
                  <span className="absolute inset-0 w-full h-full bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>

                  Enhanced shine effect
                  <span className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] transition-all duration-600 transform translate-x-[-6rem] group-hover:translate-x-[20rem]"></span>

                  Button content with icon
                  <span className="relative flex items-center z-10">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    View Projects
                  </span>
                </a>
              </div> */}

              {/* Enhanced Contact Me Button with Transparent Theme */}
              <div className="mt-8 animate-pulse">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-white font-medium overflow-hidden border border-white/40 bg-transparent shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  {/* Subtle background fill on hover */}
                  <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></span>

                  {/* Ripple pulse effect */}
                  <span className="absolute inset-0 w-full h-full bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>

                  {/* Enhanced shine effect */}
                  <span className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] transition-all duration-600 transform translate-x-[-6rem] group-hover:translate-x-[20rem]"></span>

                  {/* Button content with icon */}
                  <span className="relative flex items-center z-10">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Me
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}

export default Home;
