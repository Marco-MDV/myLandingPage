import React from "react";
import Contacts from "./contacts/Contacts";

export default function SectionSeven({observe, isActive}) {
  return (
    <section ref={observe} className="w-full relative min-h-screen snap-start flex justify-center md:justify-between items-start md:items-center flex-col md:flex-row px-5 gap-5 md:gap-20 bg-black">
      <div className="flex flex-col items-start justify-center gap-5 md:gap-10 w-full md:w-1/2 h-full">
        <h3 className={`text-white text-start text-5xl md:text-6xl lg:text-7xl font-bold font-mono ${isActive?" animate-fade-up ":""}`}>
          Let's work <br /> together
        </h3>
        <figure className={`w-64 h-48 md:w-full md:h-60 lg:w-96 lg:h-72 ${isActive?" animate-fade-left ":""}`}>
          <img
            src="/img/workWithMe.webp"
            alt="workWithMe"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <Contacts/>
    </section>
  );
}
