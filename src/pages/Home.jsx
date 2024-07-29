import { useEffect, useRef } from 'react';
import Hero from "../components/Hero";
import Events from "../components/Events";
import Sponsor from "../components/Sponsor";
import Haus from "../components/HausOfGolf";
import Merch from "../components/Merch";
import Donation from "../components/Donation";
import PropTypes from 'prop-types';
import BlackLogo from '../assets/thsopenblacklogo.png';
import Logo from '../assets/thsopenlogo.png';

function Home({ setNavTextColor, setLogoSrc }) {
 const sponsorRef = useRef(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting) {
     setNavTextColor('text-black');
     setLogoSrc(BlackLogo);
    } else {
     setNavTextColor('text-white');
     setLogoSrc(Logo);
    }
   },
   {
    threshold: 1,
    rootMargin: '700px 0px 0px 0px', // Bottom margin to delay the out of view detection 
   }
  );

  const currentSponsorRef = sponsorRef.current;

  if (currentSponsorRef) {
   observer.observe(currentSponsorRef);
  }

  return () => {
   if (currentSponsorRef) {
    observer.unobserve(currentSponsorRef);
   }
  };
 }, [setNavTextColor, setLogoSrc]);

 return (
  <div>
   <Hero />
   <Events />
   <div ref={sponsorRef}>
    <Sponsor />
   </div>
   <Haus />
   <Merch />
   <Donation />
  </div>
 );
}

Home.propTypes = {
 setNavTextColor: PropTypes.func.isRequired,
 setLogoSrc: PropTypes.func.isRequired
};

export default Home;
