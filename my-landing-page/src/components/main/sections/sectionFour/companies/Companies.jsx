import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
const companies = [
  {
    name: "Capgemini",
    logo: "/img/logoCapgemini.webp",
    link: "https://www.capgemini.com/it-it/",
  },
  {
    name: "Epicode",
    logo: "/img/logoEpicode.png",
    link: "https://epicode.com/it/",
  },
];

export default function Companies({ isActive }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [
    Autoplay(),
  ]);

  return (
    <>
      <div className="hidden h-full w-full md:flex justify-around md:justify-between items-center flex-wrap gap-5 px-5">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <figure className="w-64 h-36">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-cover"
              />
            </figure>
            <h3
              className={`text-xl font-semibold bg-black text-white w-full p-2 ${
                isActive ? " animate-fade-left " : ""
              }`}
            >
              <a href={company.link}>{company.name}</a>
            </h3>
          </div>
        ))}
      </div>
      <div className="md:hidden embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {companies.map((company, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <div key={index} className="flex flex-col items-center gap-5">
                    <figure className="w-64 h-36">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <h3
                      className={`text-xl font-semibold bg-black text-white w-full p-2 ${
                        isActive ? " animate-fade-left " : ""
                      }`}
                    >
                      <a href={company.link}>{company.name}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
