import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import useIntersectionObserver from '../useIntersectionObserver';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Sponsor() {
 const sponsorData = [
  {
   id: uuidv4(),
   level: "Title Sponsor",
   activation: ["Title sponsor named in all tournament communication and signage.",
    "THS Open presented by The Hockey Shop"
   ],
   contribution: ["$5000 Donation to CAN",
    "Proceeds of all THS Open Merch Sales",
    "Tee gifts"
   ]
  },
  {
   id: uuidv4(),
   level: "Gold Sponsor (5 Spots Available)",
   activation: ["Cart Sponsor A - name and logo on every hole A cart",
    "Cart Sponsor B - name and logo on every hole B cart",
    "Burger and Beer Sponsor - name and logo on every table during dinner",
    "Scorecard Sponsor - name and logo on score keeping app during the round",
    "Trophy Sponsor - name and logo listed on the trophy plate for winning team",
    "All include logo, name and website listed on THS Open website and tournament communications"
   ],
   contribution: ["$1000 Donation to CAN"]
  },
  {
   id: uuidv4(),
   level: "Silver Sponsor (15 Spots Available)",
   activation: [
    "Hole Sponsorship - activation on 1 hole during the tournament",
    "Presence at the tournament is encouraged! Feel free to bring snacks, drinks or swag for golfers to make the tee box memorable and fun. THS Staff can assist with hole activation if you're unable to staff the hole on the day of the tournament.",
    "Logo, name and website listed on THS Open website and tournament communications."
   ],
   contribution: ["$500 Donation to CAN"]
  },
  {
   id: uuidv4(),
   level: "Bronze Sponsor (Open)",
   activation: [
    "Logo, name and website listed on THS Open website and tournament communications.",
    "No presence on the day of the tournament."
   ],
   contribution: ["$250 Donation to CAN"]
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
   className={`bg-[#ffffff] text-black py-36 px-[1.5rem] md:px-[2rem] lg:px-[3rem] font-spacemono 2xl:px-[8rem] transition-opacity duration-[2s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <h1 className="font-poppins font-semibold text-[2rem] md:text-5xl uppercase tracking-tighter text-black">
    Sponsorship Opportunities
   </h1>
   <div className="text-black mt-10 bg-white py-6 px-[1.5rem] md:px-[2rem] font-spacemono lg:px-[8rem] xl:px-[10rem] 2xl:px-[15rem] scale-110">
    {sponsorData.map((sponsor) => (
     <div key={sponsor.id} className="border-b border-gray-400 py-4 text-black md:px-[2rem]">
      <div className="text-black flex justify-between items-center cursor-pointer" onClick={() => toggleSponsor(sponsor.level)}>
       <h2 className="font-poppins text-xl md:text-2xl font-bold uppercase tracking-tighter text-black bg-white">{sponsor.level}</h2>
       {expandedSponsor === sponsor.level ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
      </div>
      <div className={`overflow-hidden transition-all duration-[1.5s] ${expandedSponsor === sponsor.level ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
       {sponsor.level !== "Title Sponsor" && (
        <>
         <p className='font-semibold mt-2 underline'>Activation</p>
         <ul className="text-black mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
          {sponsor.activation.map((item, idx) => (
           <li key={idx}>{item}</li>
          ))}
         </ul>
        </>
       )}
       <p className='font-semibold mt-2 underline'>Contribution</p>
       <ul className="text-black mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
        {sponsor.contribution.map((item, idx) => (
         <li key={idx}>{item}</li>
        ))}
       </ul>
      </div>
     </div>
    ))}
    <div className='flex justify-center my-8'>
     <Link to={'/sponsor-form'} className='rounded-md border-2 border-black px-3 py-5 hover:bg-black hover:text-white duration-300 uppercase'>Sponsorship Inquiry</Link>
    </div>
   </div>
  </div>
 );
}

export default Sponsor;
