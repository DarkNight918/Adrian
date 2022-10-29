import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WorkExp from "./components/Work";
import Education from "./components/Education";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font text-lg">
      <Navbar />
      <About />
      <WorkExp />
      <Skills />
      <Projects />
      <Education />
      {/* <Contact /> */}
    </main>
  );
}