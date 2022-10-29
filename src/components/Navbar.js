import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-700 sticky top-0 z-10 p-2em">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
        >
          Naoki Matsumoto
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="https://github.com/Divyajg" className="mr-5 hover:text-white">
          GitHub
        </a>
        {/* <a href="https://linkedin.com/in/divya-jyothi-guttula" className="mr-5 hover:text-white">
          LinkedIn
        </a> */}
        <a href="#skills" className="mr-5 hover:text-white">
          Skills
        </a>
        <a href="#work" className="mr-5 hover:text-white">
            Work
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 hover:text-white rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
