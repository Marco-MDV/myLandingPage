import SectionFive from './sections/SectionFive/SectionFive'
import SectionFour from './sections/sectionFour/SectionFour'
import SectionOne from './sections/sectionOne/SectionOne'
import SectionThree from './sections/sectionThree/SectionThree'
import SectionTwo from './sections/sectionTwo/SectionTwo'
import SectionSix from './sections/sectionSix/SectionSix'
import SectionSeven from './sections/sectionSeven/SectionSeven'
import { useEffect, useRef, useState} from 'react'
export default function MyMain({sectionOneRef}) {
  const sectionRefs = useRef([])
  const [activeIndex, setActiveIndex]=useState(null)

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry,i)=>{
          if(entry.isIntersecting){
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveIndex(index);            
          }
        });
      },
      {threshold:0.2}
    );
    sectionRefs.current.forEach((ref)=>{if (ref) observer.observe(ref)});
    return()=>observer.disconnect();
  },[]);
  
  return (
    <main className='w-full h-screen snap-y snap-mandatory overflow-y-scroll'>
        <SectionOne sectionOneRef={sectionOneRef}/>
        <SectionTwo observe={(el)=>(sectionRefs.current[2]=el)}   isActive={activeIndex===2}/>
        <SectionThree observe={(el)=>(sectionRefs.current[3]=el)} isActive={activeIndex===3}/>
        <SectionFour observe={(el)=>(sectionRefs.current[4]=el)}  isActive={activeIndex===4}/>
        <SectionFive observe={(el)=>(sectionRefs.current[5]=el)}  isActive={activeIndex===5}/>
        <SectionSix observe={(el)=>(sectionRefs.current[6]=el)}   isActive={activeIndex===6}/>
        <SectionSeven observe={(el)=>(sectionRefs.current[7]=el)} isActive={activeIndex===7}/>
    </main>
  )
}
