import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import GithubLogo from "../../assets/githubLogo.png";
import XLogo from "../../assets/xLogo.png";
import InLogo from "../../assets/inLogo.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Varun Singh
          </h1>

          <p className=" text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full Stack Web Developer focused on building complete websites —
            from front-end to back-end logic. Dedicated to writing clean code,
            delivering smooth user experiences, and building fast, scalable
            applications.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      <div className="hidden lg:flex">
        <ul className="fixed right-10 bottom-10 flex flex-col gap-5 items-center lg:bottom-40 xl:bottom-10 ">
          <li className="flex items-center  bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <a
              href="https://github.com/va4unsingh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-7" src={GithubLogo} alt="GitHub" />
            </a>
          </li>
          <li className="flex items-center  bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <a
              href="https://x.com/va4unsingh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-6" src={XLogo} alt="X" />
            </a>
          </li>
          <li className="flex items-center  bg-blue-500/10  text-blue-500 py-3 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img className="w-7" src={InLogo} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
