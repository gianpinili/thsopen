import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SponsorForm() {

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

 const toggleSponsor = (level) => {
  setExpandedSponsor(expandedSponsor === level ? null : level);
 };

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div className="mt-[7rem] pt-[4rem] md:pt-[1rem] md:pb-[7rem] bg-white flex flex-col md:flex-row px-[1rem]">
   <div className='md:w-1/2 flex flex-col md:px-[2rem] md:pt-[5rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[8rem] items-center md:items-start'>
    <h1 className="text-black font-poppins font-extrabold text-2xl md:text-3xl lg:text-4xl text-left uppercase tracking-tighter">For all sponsorship inquiries, please reach out to us using the form here:</h1>
    <div className='flex my-8'>
     <Link to={"/contact"} className='rounded-md border border-black px-8 py-5 text-black font-bold hover:bg-black hover:text-white duration-300 uppercase md:mt-[3rem]'>Sponsorship Inquiry</Link>
    </div>
   </div>
   <div className="text-black mt-10 bg-white py-6 px-[.5rem] md:px-[1rem] font-spacemono md:w-1/2 md:mt-[6rem]">
    {sponsorData.map((sponsor, index) => (
     <div key={index} className="border-b border-gray-400 py-4 text-black md:px-[2rem]">
      <div className="mb-3 text-black flex justify-between items-center cursor-pointer" onClick={() => toggleSponsor(sponsor.level)}>
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
   </div>
  </div>
 )
}

export default SponsorForm