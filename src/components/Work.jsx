import { BadgeCheckIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { workExperience } from "../data";

export default function WorkExp() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-10">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-center text-white">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {workExperience.map((work) => (
            <div className="px-8 py-10 z-10 w-full">
              <div className="flex relative">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {work.title}
                </h1>
              </div>
              <p>
                {work.from}
                {work.to}
              </p>
              <h2 className="title-font text-lg font-medium text-white mb-3">
                <strong>{work.company}</strong>
              </h2>
              <p className="leading-relaxed">
                {work.description.map((each) => (
                  <ol>
                    <li>{each}</li>
                  </ol>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
