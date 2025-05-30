import React from 'react'

export default function Pc() {
  return (
    <div className="p-5 m-0 flex justify-content-center items-center absolute top-0 left-0 pt-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="md:text-white w-12 md:w-18 lg:w-24">
                <mask id="ipTComputer0">
                    <g fill="none" stroke="#fff" stroke-width="4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 32h10v9H19z"/>
                        <rect width="38" height="24" x="5" y="8" fill="#555" rx="2"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M22 27h4M14 41h20"/>
                    </g>
                </mask>
                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTComputer0)"/>
            </svg>
        </div>
  )
}
