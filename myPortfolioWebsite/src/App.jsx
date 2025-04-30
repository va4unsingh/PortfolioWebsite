import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SocialLink from "./components/SocialLinks";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen max-w-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 overflow-x-hidden`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && (
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}

        <main className="mx-auto">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                </>
              }
            />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <SocialLink />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
