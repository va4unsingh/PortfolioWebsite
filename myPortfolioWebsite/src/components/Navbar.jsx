import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-5 w-full z-30">
      <div className="mx-auto px-5 sm:px-16 md:px-20 lg:px-32 xl:px-40">
        <div className="flex justify-between items-center h-20">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="font-mono text-3xl font-bold text-white transform hover:scale-105 transition duration-300"
          >
            V <span className=" text-blue-500">.Singh</span>
          </Link>

          <button
            className="text-white md:hidden hover:text-blue-500 hover:scale-110 transition-all duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex items-center space-x-8">
  {/* Home */}
  <NavLink
    onClick={() => window.scrollTo(0, 0)}
    to="/"
    className={({ isActive }) =>
      `${
        isActive
          ? "text-blue-600"
          : "text-gray-300 hover:text-white"
      } text-xl group relative font-semibold transition-all duration-300 ease-out hover:text-blue-500`
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
        isActive
          ? "text-blue-600"
          : "text-gray-300 hover:text-white"
      } text-xl group relative font-semibold transition-all duration-300 ease-out hover:text-blue-500`
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
        isActive
          ? "text-blue-600"
          : "text-gray-300 hover:text-white"
      } text-xl group relative font-semibold transition-all duration-300 ease-out hover:text-blue-500`
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
        isActive
          ? "text-blue-600"
          : "text-gray-300 hover:text-white"
      } text-xl group relative font-semibold transition-all duration-300 ease-out hover:text-blue-500`
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
