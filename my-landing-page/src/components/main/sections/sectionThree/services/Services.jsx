import React from "react";
const services = [
  {
    title: "Customized IT consulting",
    description:
      "Technical and strategic support for cloud infrastructure, cybersecurity, and business processes.",
  },
  {
    title: "Software & Web App Development",
    description:
      "I create custom solutions using modern stacks such as React, Node.js, Tailwind, and MongoDB.",
  },
  {
    title: "Automation and Optimization",
    description:
      "I automate workflows, API integration, and repetitive tasks to increase operational efficiency.",
  },
];

export default function Services() {
  return (
    <div className=" flex flex-col gap-2">
      {services.map((service, index) => (
        <div 
            key={index}
            className="flex flex-row items-up justify-center gap-5"
        >
          <p className="text-2xl font-bold text-slate-400 font-mono">{index}</p>
          <div
            className="flex flex-col gap-4 rounded-lg shadow-lg text-left"
          >
            <h3 className="text-2xl font-bold text-white font-mono">{service.title}</h3>
            <p className="text-gray-300 text-sm ">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
