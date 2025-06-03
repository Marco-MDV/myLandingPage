import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [Autoplay()]);
  
  return (
    <>
      <div className="md:hidden embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {services.map((service, i) => (
              <div className="embla__slide" key={i}>
                <div className="embla__slide__number">
                  <div
                    className="flex flex-row justify-center gap-5"
                  >
                    <p className="text-2xl font-bold text-slate-400 font-mono">
                      {++i}
                    </p>
                    <div className="flex flex-col gap-4 rounded-lg shadow-lg text-left">
                      <h3 className="text-2xl font-bold text-white font-mono">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-row items-start justify-center gap-5"
          >
            <p className="text-2xl font-bold text-slate-400 font-mono">
              {index}
            </p>
            <div className="flex flex-col gap-4 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-bold text-white font-mono">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
