import React from 'react'
import Companies from './companies/Companies'

export default function SectionFour({observe, isActive}) {
  return (
    <section ref={observe} className='w-full relative h-svh snap-start flex justify-content-center items-center flex-col px-5 gap-5'>
        <div className='flex flex-col gap-5 pt-2 text-black w-full text-start '>
            <h2 className='text-start text-4xl md:text-7xl font-bold font-mono'>Trusted By Professionals Across Tech</h2>
            <p className={`${isActive?" animate-fade-up ":""}`}>
                Since 2021, I have been collaborating with professionals, big tech consulting firms, and startups to offer scalable, secure, and high-impact solutions.
            </p>
        </div>
        <Companies isActive={isActive}/>
    </section>
  )
}
