import React from "react";
import image from "../images/imageDJ.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        {/* <div class="w-6/12 sm:w-4/12 px-4 pr-9 flex flex-wrap justify-center">
          <img
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            alt="Divyajyothi Guttula"
            src={image}
          />
        </div> */}
        <div className="lg:flex-grow md:w-1/2 pl-9 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey, I'm Adrian Grenier
          </h1>
          <h3 className="sm:text-3xl text-2xl font-small title-font text-white mb-4 text-center">
            Passionate to code.
          </h3>
          <p className="mb-8 leading-relaxed">
          Experienced Web Developer adept in all stages of advanced web development.
          Equipped with a diverse and promising skill-set: JavaScript, React, Vue.js, NodeJS 
          , TypeScript etc.Able to effectively self-manage during independent projects, as well 
          as collaborate in a team setting. Solved complex business problems for clients in 
          various industries including eCommerce, CryptoCurrency, Token, Coin, Real estate,
          Construction, Healthcare, Banking, SaaS, Game Development and Car 
          insurance.Ready for an opportunity to use my skills to grow your business and 
          revenue exponentially.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
