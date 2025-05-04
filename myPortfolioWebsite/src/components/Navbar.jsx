import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../favicon/favicon.svg";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-4 md:top-10 w-full z-30">
      <div className="mx-auto pr-6 pl-1  md:pl-3 md:pr-10 lg:px-25 xl:px-25 sm:pl-4 sm:pr-10">
        <div className="flex justify-between items-center h-20">
          {/* <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="font-mono text-2xl md:text-3xl font-bold text-white transform hover:scale-105 
             drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] 
             transition duration-300"
          >
            V<span className="text-blue-500">.Singh</span>
          </Link> */}
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="font-mono text-2xl md:text-3xl font-bold text-white transform hover:scale-105 
             drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] 
             transition duration-300"
          >
            <img className="w-20 sm:w-28 md:w-30" src={logo} alt="" />
          </Link>

          <button
            className="text-white md:hidden hover:text-blue-500 hover:scale-110 transition-all duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          <div className="hidden md:flex items-center space-x-8 border-3 border-blue-700/30 px-5 py-4 rounded-full overflow-hidden bg-gray-700/10 backdrop-blur-md">
            {/* Home */}
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600" : "text-gray-300 hover:text-white"
                } text-xl group relative font-medium transition-all duration-300 ease-out hover:text-blue-500`
              }
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105 rounded-full"></span>
            </NavLink>

            {/* About */}
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600" : "text-gray-300 hover:text-white"
                } text-xl group relative font-medium transition-all duration-300 ease-out hover:text-blue-500`
              }
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105 rounded-full"></span>
            </NavLink>

            {/* Projects */}
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600" : "text-gray-300 hover:text-white"
                } text-xl group relative font-medium transition-all duration-300 ease-out hover:text-blue-500`
              }
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105 rounded-full"></span>
            </NavLink>

            {/* Contact */}
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-600" : "text-gray-300 hover:text-white"
                } text-xl group relative font-medium transition-all duration-300 ease-out hover:text-blue-500`
              }
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105 rounded-full"></span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
