import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import useIntersectionObserver from '../useIntersectionObserver';
import { Link } from 'react-router-dom';
import OurSponsors from './OurSponsors';
import { v4 as uuidv4 } from 'uuid';
import sponsorLevels from '../data/sponsorLevels';

function Sponsor() {
 //add uuids to each sponsor level
 const sponsorLevel = sponsorLevels.map(sponsor => ({
  ...sponsor,
  id: uuidv4()
 }))

 const [expandedSponsor, setExpandedSponsor] = useState(null);
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.2,
 });

 const toggleSponsor = (level) => {
  setExpandedSponsor(expandedSponsor === level ? null : level);
 };

 return (
  <div
   ref={ref}
   className={`bg-[#ffffff] text-black py-36 px-[1.5rem] md:px-[2rem] lg:px-[3rem] font-spacemono 2xl:px-[8rem] transition-opacity duration-[2s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <h1 className="font-poppins font-semibold text-[2rem] md:text-5xl uppercase tracking-tighter text-black">
    Sponsorship Opportunities
   </h1>
   <div className="text-black mt-10 bg-white py-6 px-[1.5rem] md:px-[2rem] font-spacemono lg:px-[8rem] xl:px-[10rem] 2xl:px-[15rem] scale-110">
    {sponsorLevel.map((sponsor) => (
     <div key={sponsor.id} className="border-b border-gray-400 py-4 text-black md:px-[2rem]">
      <button className="text-black w-full flex justify-between items-center cursor-pointer" onClick={() => toggleSponsor(sponsor.level)}>
       <h2 className="font-poppins text-xl md:text-2xl font-bold uppercase tracking-tighter text-black bg-white">{sponsor.level}</h2>
       {expandedSponsor === sponsor.level ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
      </button>
      <div className={`overflow-hidden transition-all duration-[1.5s] ${expandedSponsor === sponsor.level ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
       {sponsor.level !== "Title Sponsor" && (
        <>
         <p className='font-semibold mt-2 underline'>Activation</p>
         <ul className="text-black mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
          {sponsor.activation.map((item) => (
           <li key={item}>{item}</li>
          ))}
         </ul>
        </>
       )}
       <p className='font-semibold mt-2 underline'>Contribution</p>
       <ul className="text-black mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
        {sponsor.contribution.map((item) => (
         <li key={item}>{item}</li>
        ))}
       </ul>
      </div>
     </div>
    ))}
    <div className='flex justify-center my-8'>
     <Link to={'/sponsor-form'} className='rounded-md border-2 border-black px-3 py-5 hover:bg-black hover:text-white duration-300 uppercase'>Sponsorship Inquiry</Link>
    </div>
   </div>
   <OurSponsors />
  </div>
 );
}

export default Sponsor;
