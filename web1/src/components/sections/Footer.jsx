import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import GithubLogo from "../../assets/githubLogo.png";
import XLogo from "../../assets/xLogo.png";
import InLogo from "../../assets/inLogo.png";

function Footer() {
  return (
    <section className=" text-white py-10 flex items-center justify-center">
      <ul className="flex gap-10 items-center">
        <h1 className="text-2xl font-bold sm:mr-40 md:mr-56 lg:mr-80 xl:mr-[450px]">
          V. Singh
        </h1>
        <li>
          <a href="https://github.com/va4unsingh" target="_blank">
            <img className="w-7" src={GithubLogo} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://x.com/va4unsingh" target="_blank">
            <img className="w-6" src={XLogo} alt="X" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="w-7" src={InLogo} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
