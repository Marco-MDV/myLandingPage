import { useEffect, useState } from "react";
import Skeleton from "../../../skeletons/Skeleton.jsx";
import CarouselEmblaCarouselProject from "../../Carousels/carouselEmblaCarouselProject/CarouselEmblaCarouselProject.jsx";

export default function SectionSix({observe, isActive}) {
  const [state, setState] = useState({loading: true, error:false, errorMessage:"", data:[]})


  const callGitHub = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/Marco-MDV/repos`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const dataGit = await response.json();
      const filtered=dataGit.filter(project=>project.name!=="Marco-MDV")
      
      setState({
        ...state,
        loading: false,
        data: filtered,
      });
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        loading: false,
        error: true,
        errorMessage: "Failed to fetch data from GitHub",
      });      
    }
  }
  
  
  useEffect(()=>{callGitHub()},[])
  
  return (
    <section ref={observe} className="w-full h-svh snap-start  flex justify-between items-center flex-col md:flex-row p-5  md:gap-8">
      <div className="flex flex-col justify-around items-center h-full gap-3">
        <h3 className={`text-start text-6xl md:text-7xl font-bold font-mono ${isActive?" animate-fade-bottom ":""}`}>My projects</h3>
        <figure className="w-[300px] h-[300px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <img src="/img/macProjectjpg.jpg" alt="mac" className="w-full h-full object-cover rounded-md" />
        </figure>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-4">
        {state.loading ? (
          <Skeleton/>
        ) : state.error ? (
          <div className="text-red-500 text-center">{state.errorMessage}</div>
        ) : (
          <CarouselEmblaCarouselProject projects={state.data}/>
        )}
      </div>
    </section>
  );
}
