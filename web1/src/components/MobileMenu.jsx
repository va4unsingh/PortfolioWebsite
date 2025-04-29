import React from "react";

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

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-semibold text-white my-4"
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenu;
