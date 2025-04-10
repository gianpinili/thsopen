import { useEffect, useRef } from 'react';
import Hero from "../components/Hero";
import Events from "../components/Events";
import Sponsor from "../components/Sponsor";
// import Haus from "../components/HausOfGolf";
import Merch from "../components/Merch";
import Donation from "../components/Donation";
import PropTypes from 'prop-types';
import BlackLogo from '../assets/thsopenblacklogo.png';
import Logo from '../assets/thsopenlogo.png';
import { Helmet } from 'react-helmet';

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
    rootMargin: '1000px 0px 300px 0px', // Bottom margin to delay the out of view detection 
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
   <Helmet>
    <title>Home | THS Open</title>
    <meta name="description" content="The Hockey Shop is hosting the THS Open. An opportunity to play golf while supporting a fantastic cause. All proceeds from the event will go to the Canucks Autism Network." />
   </Helmet>
   <Hero />
   <Events />
   <div ref={sponsorRef}>
    <Sponsor />
   </div>
   {/* <Haus /> */}
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
