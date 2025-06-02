import React from 'react'

export default function SectionFive({observe, isActive}) {
  return (
    <section ref={observe} className='w-full relative h-svh flex snap-start justify-center items-center flex-col px-5 gap-5 bg-black'>
        <h3 className={`text-2xl md:text-4xl lg:text-5xl text-center font-bold font-mono text-white ${isActive?" animate-fade-up ":""}`}>
            "Every infrastructure I create is designed to withstand, evolve, and grow."
        </h3>
        <p className={`text-lg md:text-xl lg:text-2xl text-center text-slate-400 font-mono ${isActive?" animate-fade-up ":""}`}>
            Marco De Vincentiis
        </p>
    </section>
  )
}
