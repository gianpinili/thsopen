import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../useIntersectionObserver';

function Sponsor() {
 const sponsorData = [
  {
   level: "Title Sponsor",
   included: ["$5000+ donation", "Title Sponsor, eg., 'THS Open Presented by [Your Company]'"]
  },
  {
   level: "Gold Sponsor",
   included: ["$5000+ donation", "Burger and Brew Sponsor"]
  },
  {
   level: "Silver Sponsor",
   included: [
    "$1000+ donation",
    "Golf Cart Sponsor #1",
    "Golf Cart Sponsor #2",
    "Beverage Ticket Sponsor",
    "Putting Challenge Sponsor",
    "Open to sponsorship ideas"
   ]
  },
  {
   level: "Bronze Sponsor",
   included: [
    "$500+ donation",
    "Includes signage or activation on a hole",
    "We also welcome and appreciate any branded items for tee gifts and raffle prizes."
   ]
  }
 ];

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
   className={`bg-white text-black py-12 px-[1.5rem] md:px-[2rem] lg:px-[3rem] font-spacemono 2xl:px-[8rem] transition-opacity duration-[2.25s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <h1 className="font-poppins font-semibold text-[2rem] md:text-5xl uppercase tracking-tighter text-black">
    Sponsorship Opportunities
   </h1>
   <div className="text-black mt-10 bg-white py-6 px-[1.5rem] md:px-[2rem] font-spacemono lg:px-[8rem] xl:px-[10rem] 2xl:px-[15rem]">
    {sponsorData.map((sponsor, index) => (
     <div key={index} className="border-b border-gray-400 py-4 text-black md:px-[2rem]">
      <div className="text-black flex justify-between items-center cursor-pointer" onClick={() => toggleSponsor(sponsor.level)}>
       <h2 className="font-poppins text-xl md:text-2xl font-bold uppercase tracking-tighter text-black bg-white">{sponsor.level}</h2>
       {expandedSponsor === sponsor.level ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
      </div>
      {expandedSponsor === sponsor.level && (
       <ul className="text-black mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
        {sponsor.included.map((item, index) => (
         <li key={index}>{item}</li>
        ))}
       </ul>
      )}
     </div>
    ))}
    <div className='flex justify-center my-8'>
     <Link to="/sponsorship" className='rounded-md border-2 border-black px-3 py-5 hover:bg-black hover:text-white duration-300 uppercase'>Sponsorship Inquiry</Link>
    </div>
   </div>
  </div>
 );
}

export default Sponsor;
