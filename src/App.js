import { useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Project from "./component/Project";
import About from "./component/About";
import Skills from "./component/Skill";
import Works from "./component/Works";
import Footer from "./component/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar1 from "./component/Navbar1";
import Slider1 from "./component/Slider.jsx";
import Contact from "./component/Contact.js";
import Drashti from "./Drashti.js";

AOS.init();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}
    >
      <div className="w-full h-full min-h-[100vh] bg-white ">
        <div className="dark:bg-[#030e2e]">
          <Navbar1
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />

          <section id="home" className="px-0 lg:px-5 2xl:px-40 py-0 lg:py-0">
            <Header />
          </section>
        </div>

        <section className="w-full bg-[#030e2e] py-20 ">
          <Project />
        </section>

        <section
          id="about"
          className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[#030e2e]"
        >
          <About />
        </section>

        <section
          id="skills"
          className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[#030e2e]"
        >
          <Skills />
        </section>
        <section
          id="slider"
          className="w-full px-0 lg:px-5 2xl:px-40 text-black py-10 lg:py-0 dark:bg-[#030e2e] dark:text-white"
        >
          <Slider1 />
        </section>
        <section
          id="projects"
          className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[#030e2e]"
        >
          <Works darkMode={darkMode} />
        </section>

        <section
          id="contacts"
          className="w-full h-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 dark:bg-[#030e2e]"
        >
          <Contact />
        </section>

        <div className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-[#030e2e] ">
          <Footer />
        </div>
      </div>
    </div>
    // <Drashti></Drashti>
  );
}

export default App;
