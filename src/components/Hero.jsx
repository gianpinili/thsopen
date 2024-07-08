import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroVid from '../assets/herooption.mp4';
import heroVidMobile from '../assets/heromobile.mp4';
import useIntersectionObserver from '../useIntersectionObserver';

function Hero() {
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.1,
 });

 const desktopVideoRef = useRef(null);
 const mobileVideoRef = useRef(null);

 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

 useEffect(() => {
  const handleResize = () => {
   setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup listener on component unmount
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 useEffect(() => {
  if (isMobile) {
   mobileVideoRef.current.currentTime = desktopVideoRef.current.currentTime;
   mobileVideoRef.current.play();
   desktopVideoRef.current.pause();
  } else {
   desktopVideoRef.current.currentTime = mobileVideoRef.current.currentTime;
   desktopVideoRef.current.play();
   mobileVideoRef.current.pause();
  }
 }, [isMobile]);

 return (
  <div
   ref={ref}
   className={`mt-[2rem] 2xl:mt-[3.3rem] font-spacemono relative w-full max-h-screen overflow-hidden transition-opacity duration-[1.5s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <div className="absolute inset-0 overflow-hidden">
    <video
     ref={desktopVideoRef}
     autoPlay
     loop
     muted
     playsInline
     className={`absolute top-0 left-0 w-full h-full object-cover opacity-70 mt-[-3.5rem] md:mt-[-2.75rem] 2xl:mt-[-4rem] ${isMobile ? 'hidden' : 'block'}`}
     style={{ pointerEvents: 'none' }}
    >
     <source src={heroVid} type="video/mp4" />
     Your browser does not support the video tag.
    </video>
    <video
     ref={mobileVideoRef}
     autoPlay
     loop
     muted
     playsInline
     className={`absolute top-0 left-0 w-full h-full object-cover opacity-70 mt-[-3.5rem] md:mt-[-2.75rem] 2xl:mt-[-4rem] ${isMobile ? 'block' : 'hidden'}`}
     style={{ pointerEvents: 'none' }}
    >
     <source src={heroVidMobile} type="video/mp4" />
     Your browser does not support the video tag.
    </video>
   </div>
   <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] gap-10 md:mx-[5rem] lg:mx-[10rem] xl:mx-[15rem] 2xl:mx-[20rem]">
    <Link to={'/register'} className="border-white border py-2 px-4 rounded mt-[34rem] hover:bg-slate-100 hover:text-black duration-200 md:py-4 md:px-8">
     Register
    </Link>
   </div>
  </div>
 );
}

export default Hero;
