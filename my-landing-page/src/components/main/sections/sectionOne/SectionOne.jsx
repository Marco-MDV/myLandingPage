export default function SectionOne({sectionOneRef}) {
  return (
    <section ref={sectionOneRef} className='w-full relative h-svh snap-start flex justify-content-center items-center'>
        <div className="flex flex-col justify-content-center items-start absolute bottom-0 left-0 pb-10 pl-5 gap-6 md:gap-7 animate-fade-up">
            <h1 className="text-white text-7xl md:text-8xl font-bold font-mono">MDV</h1>
            <p class="text-slate-400 font-mono text-base md:text-lg">Expertise. Commitment. Value.</p>
        </div>
        
      <figure className="p-0 m-0 hidden md:flex justify-content-center items-center w-full h-full">
        <img src="/img/desk.webp" alt="desk backgroud" className="w-full h-full  object-cover"/>
      </figure>
      <figure className="p-0 m-0 flex justify-content-center items-center w-full h-full md:hidden ">
        <img src="/img/phoneBg.jpg" alt="desk backgroud" className="w-full h-full object-cover"/>
      </figure>
    </section>
  )
}
