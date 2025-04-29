import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import GithubLogo from "../../assets/githubLogo.png";
import XLogo from "../../assets/xLogo.png";
import InLogo from "../../assets/inLogo.png";

function Footer() {
  return (
    <section className="text-white py-10 flex flex-col items-center space-y-6">
      {/* Top Section: Footer Text */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-xl">Built with⚡by Varun Singh</div>
        <div className="text-xs text-gray-400 hidden lg:flex">
              © 2025 All rights reserved.
            </div>
      </div>
      {/* Bottom Section: Logo and Socials */}
      <div className="flex lg:hidden mt-5">
        <div className="flex flex-col items-center space-y-4">
          <ul className="flex gap-6 items-center">
            <div className="text-xs text-gray-400">
              © 2025 All rights reserved.
            </div>
            <li>
              <a
                href="https://github.com/va4unsingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-7" src={GithubLogo} alt="GitHub" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/va4unsingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6" src={XLogo} alt="X" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="w-7" src={InLogo} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
