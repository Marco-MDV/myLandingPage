import Services from './services/Services'

export default function SectionThree({observe, isActive}) {
  return (
    <section ref={observe} className="w-full relative h-svh snap-start flex justify-content-center items-center flex-col md:flex-row bg-black text-white px-5 gap-5">
      <div className='flex flex-col gap-10 '>
        <h2 className='text-start text-white text-6xl md:text-7xl font-bold font-mono'>My<br />Services</h2>
        <figure className={`${isActive?" animate-fade-left ":""}`}>
            <img src="/img/strettaDiMano.webp" alt="stretta di mano" />
        </figure>
      </div>
      <Services />
    </section>
  )
}
