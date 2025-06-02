const companies = [
  { name: 'Capgemini', logo: '/img/logoCapgemini.webp', link:"https://www.capgemini.com/it-it/" },
  { name: 'Epciode', logo: '/img/logoEpicode.png', link:"https://epicode.com/it/" }
];


export default function Companies({isActive}) {
  return (
    <div className='h-full w-full flex justify-around md:justify-between items-center flex-wrap gap-5 px-5'>
        {companies.map((company, index) => (
          <div key={index} className='flex flex-col items-center gap-5'>
            <figure className="w-64 h-36">
                <img src={company.logo} alt={`${company.name} logo`} className='w-full h-full object-cover'/>
            </figure>
            <h3 className={`text-xl font-semibold bg-black text-white w-full p-2 ${isActive?" animate-fade-left ":""}`}><a href={company.link}>{company.name}</a></h3>
          </div>
        ))}
    </div>
  )
}
