import React from "react";
import { NavLink } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black opacity-92 z-30 flex flex-col items-center justify-center 
         transition-all duration-300 ease-in-out`}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        &times;
      </button>

      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-600" : "text-white"
          }  text-2xl font-semibold my-4 `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-600" : "text-white"
          }  text-2xl font-semibold my-4 `
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-600" : "text-white"
          }  text-2xl font-semibold my-4 `
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-600" : "text-white"
          }  text-2xl font-semibold my-4 `
        }
      >
        Contact
      </NavLink>
    </div>
  );
}

export default MobileMenu;
