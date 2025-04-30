import React from "react";
import GithubLogo from "../assets/githubLogo.png";
import XLogo from "../assets/xLogo.png";
import InLogo from "../assets/inLogo.png";

function SocialLinks() {
  return (
    <>
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
    </>
  );
}

export default SocialLinks;
