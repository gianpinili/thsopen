import { ChevronDown, ChevronUp, MoveDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import MitchHero from '../assets/mitchblacknwhite.jpg';
import OurSponsors from '../components/OurSponsors';
import { Link } from 'react-router-dom';

function SponsorPage() {

 const sponsorData = [
  {
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
   level: "Silver Sponsor (15 Spots Available)",
   activation: [
    "Hole Sponsorship - activation on 1 hole during the tournament",
    "Presence at the tournament is encouraged! Feel free to bring snacks, drinks or swag for golfers to make the tee box memorable and fun. THS Staff can assist with hole activation if you're unable to staff the hole on the day of the tournament.",
    "Logo, name and website listed on THS Open website and tournament communications."
   ],
   contribution: ["$500 Donation to CAN"]
  },
  {
   level: "Bronze Sponsor (Open)",
   activation: [
    "Logo, name and website listed on THS Open website and tournament communications.",
    "No presence on the day of the tournament."
   ],
   contribution: ["$250 Donation to CAN"]
  }
 ];

 const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
   element.scrollIntoView({ behavior: 'smooth' });
  }
 };

 const [expandedSponsor, setExpandedSponsor] = useState(null);

 const toggleSponsor = (level) => {
  setExpandedSponsor(expandedSponsor === level ? null : level);
 };

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const [headerRef, isHeaderIntersecting] = useIntersectionObserver({ threshold: 0.5 });

 return (
  <>
   <div>
    <div
     ref={headerRef}
     className={`h-[100vh] opacity-0 bg-no-repeat bg-cover bg-center relative transition-opacity duration-[2s] ${isHeaderIntersecting ? 'opacity-100' : 'opacity-0'}`}
     style={{ backgroundImage: `url(${MitchHero})` }}
    >
    </div>
    <p className="text-[#ffffff] text-[4rem] font-bold font-poppins absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[11rem]">
     <span className="title-shadow">SPONSOR</span>
     <MoveDown onClick={() => scrollTo('sponsors')} className="border rounded-full p-2 w-[50px] h-[50px] hover:bg-[#ffffff] hover:text-black duration-300 cursor-pointer hover:scale-110 mx-auto" />
    </p>
   </div>
   <div className="pt-[5rem]  md:pt-[1rem] md:pb-[7rem] bg-black flex flex-col md:flex-row px-[1rem] items-center">
    <div className='md:w-1/2 flex flex-col md:px-[2rem] md:pt-[5rem] lg:px-[4rem] xl:px-[6rem] 2xl:px-[8rem] items-center md:items-start'>
     <h1 className="text-white font-poppins font-extrabold text-2xl md:text-3xl lg:text-4xl text-left uppercase tracking-tighter">For all sponsorship inquiries, please reach out to us using the form here:</h1>
     <div className='flex my-8'>
      <Link to={'/sponsor-form'} className='rounded-md border border-white px-8 py-5 text-white font-bold hover:border-black hover:bg-white hover:text-black duration-300 uppercase md:mt-[3rem]'>Sponsorship Inquiry</Link>
     </div>
    </div>
    <div id="sponsors" className="text-white mt-10 bg-black py-6 px-[.5rem] md:px-[1rem] font-spacemono md:w-1/2 md:mt-[3rem]">
     {sponsorData.map((sponsor, index) => (
      <div key={index} className="border-b border-gray-400 py-4 text-white md:px-[2rem]">
       <div className="mb-3 text-white flex justify-between items-center cursor-pointer" onClick={() => toggleSponsor(sponsor.level)}>
        <h2 className="font-poppins text-xl md:text-2xl font-bold uppercase tracking-tighter text-white bg-black">{sponsor.level}</h2>
        {expandedSponsor === sponsor.level ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
       </div>
       <div className={`overflow-hidden transition-all duration-[1.5s] ${expandedSponsor === sponsor.level ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        {sponsor.level !== "Title Sponsor" && (
         <>
          <p className='font-semibold mt-2 underline'>Activation</p>
          <ul className="text-white mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
           {sponsor.activation.map((item, index) => (
            <li key={index}>{item}</li>
           ))}
          </ul>
         </>
        )}
        <p className='font-semibold mt-2 underline'>Contribution</p>
        <ul className="text-white mt-2 ml-4 list-disc text-sm md:px-[2rem] md:text-lg">
         {sponsor.contribution.map((item, index) => (
          <li key={index}>{item}</li>
         ))}
        </ul>
       </div>
      </div>
     ))}
    </div>
   </div>
   <OurSponsors />
  </>
 );
}

export default SponsorPage;
