import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const EmblaCarousel = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: true }, [Autoplay()]);
  const arrayFoto = ["coding.jpg","codingPic.jpg", "codingPic2.jpg"]
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="w-72 h-full border-2 rounded-md">
                  <figure className="w-full h-1/2">
                    <img src={`/img/${arrayFoto[Math.floor(Math.random()*arrayFoto.length)]}`} alt="coding pic" className="w-full h-full object-cover rounded-t-md"/>
                  </figure>
                  <div className=" h-1/2 flex flex-col justify-around items-between p-3">
                    <a href={project.html_url} className="text-start text-xl font-bold font-mono">{project.name}</a>
                    <p  className="text-start text-sm font-bold font-mono">
                      language: {project.language}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
