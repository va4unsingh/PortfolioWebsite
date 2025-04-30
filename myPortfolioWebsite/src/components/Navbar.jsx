import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-30 bg-black opacity-85 border-b border-white/10 shadow-lg">
      <div className="mx-auto px-5 sm:px-16 md:px-20 lg:px-32 xl:px-40">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            V <span className="text-blue-500">.Singh</span>
          </a>

          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            &#9776;
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {/* Home  */}
            <NavLink
              to="/"
              className="text-lg group relative text-gray-300 font-medium transition-colors duration-300 hover:text-white"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105"></span>
            </NavLink>

            {/* About  */}
            <NavLink
              to="/about"
              className="text-lg group relative text-gray-300 font-medium transition-colors duration-300 hover:text-white"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105"></span>
            </NavLink>
            <NavLink
              to="/projects"
              className="text-lg group relative text-gray-300 font-medium transition-colors duration-300 hover:text-white"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105"></span>
            </NavLink>
            <NavLink
              to="/contact"
              className="text-lg group relative text-gray-300 font-medium transition-colors duration-300 hover:text-white"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-out group-hover:w-full group-hover:h-[4px] group-hover:scale-x-105"></span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
