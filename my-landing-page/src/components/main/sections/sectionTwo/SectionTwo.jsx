import React from "react";

export default function SectionTwo({observe, isActive}) {
  

  return (
    <section ref={observe} className="w-full h-svh snap-start flex justify-between items-center flex-col md:flex-row p-5  md:gap-8 bg-black">
      <figure className={`w-[300px] h-[300px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px] p-0 m-0 flex-shrink-0 ${isActive?" animate-fade-left ":""}`}>
        <img
          src="/img/mePerSitoDaLavoro.jpeg"
          alt="foto profilo"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-center items-start gap-2 md:gap-3 text-left px-2 md:px-0 ">
        <h2 className="text-white text-5xl md:text-7xl font-bold font-mono ">
          Who I am
        </h2>
        <p className="text-white font-mono text-base md:text-lg">
          My name is Marco De Vincentiis, and I am a professional with experience in software development, cloud computing, and cyber security. Since 2021, I have been helping companies and individuals optimize processes, improve security, and achieve concrete results in financial markets.
        </p>
        <button className={`rounded-none bg-[#9B9B9B] text-white p-3 hover:bg-[#6B6B6B] transition-colors duration-300 ${isActive?" animate-fade-up ":""}`}>
          <a href="https://www.linkedin.com/in/marco-de-vincentiis-98299a217" className="flex flex-row justify-content-center items-center gap-2">
            <p>More about me</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.778 5.5h2.444c.822 0 1.469 0 1.99.043c.53.043.974.133 1.377.338a3.5 3.5 0 0 1 1.53 1.53c.205.403.295.847.338 1.378c.043.52.043 1.168.043 1.989v2.444c0 .822 0 1.469-.043 1.99c-.043.53-.133.974-.338 1.377a3.5 3.5 0 0 1-1.53 1.53c-.403.205-.847.295-1.378.338c-.52.043-1.168.043-1.989.043h-3.6c-1.782 0-2.675-2.154-1.415-3.414l4.836-4.836H10.5a.5.5 0 0 1 0-1h3.75a.5.5 0 0 1 .5.5v3.75a.5.5 0 0 1-1 0v-2.543l-4.836 4.836c-.63.63-.184 1.707.707 1.707H13.2c.848 0 1.455 0 1.93-.04c.469-.038.766-.11 1.005-.233a2.5 2.5 0 0 0 1.092-1.092c.122-.239.195-.536.234-1.005c.039-.476.039-1.082.039-1.93v-2.4c0-.848 0-1.455-.04-1.93c-.038-.469-.11-.766-.233-1.005a2.5 2.5 0 0 0-1.092-1.093c-.239-.121-.536-.194-1.005-.233c-.476-.039-1.082-.039-1.93-.039h-2.4c-.848 0-1.455 0-1.93.04c-.469.038-.766.11-1.005.232a2.5 2.5 0 0 0-1.093 1.093c-.121.239-.194.536-.233 1.005C6.5 9.345 6.5 9.952 6.5 10.8v2.7a.5.5 0 0 1-1 0v-2.722c0-.821 0-1.468.043-1.99c.043-.53.133-.974.338-1.377a3.5 3.5 0 0 1 1.53-1.53c.403-.205.847-.295 1.378-.338c.52-.043 1.168-.043 1.989-.043"/></svg>
          </a>
        </button>
      </div>
    </section>
  );
}
