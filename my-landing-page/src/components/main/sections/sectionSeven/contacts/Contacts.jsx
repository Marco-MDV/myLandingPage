import React from 'react'

export default function Contacts() {
  return (
    <div className='w-full text-start'>
        <ul className='flex flex-col gap-5 md:gap-10 lg:gap-20 pb-5 md:p-0 '>
            <li className='text-white font-mono'>
                <p className='text-3xl font-bold text-slate-400 font-mono'>Email Address:</p>
                <p>marcodevincentiis.yt@gmail.com</p>
            </li>
            <li className='text-white font-mono'>
                <p className='text-3xl font-bold text-slate-400 font-mono'>My portal:</p>
                <a href="https://www.linkedin.com/in/marco-de-vincentiis-98299a217">Linkedin</a>
            </li>
        </ul>
    </div>
  )
}
