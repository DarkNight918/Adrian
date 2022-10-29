import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
          
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {education.map((ed) => (
            <div className="p-2  w-full">
              <div className="bg-gray-800 rounded block p-4 h-full items-center">
                <div className="flex">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {ed.title}
                    </h1>
                </div>
                
                  <p>{ed.from}{ed.to}</p>
                  <h2 className="title-font text-lg font-medium text-white mb-3">
                    <strong>{ed.school}</strong>
                  </h2>
                  <p className="leading-relaxed">{ed.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}