import { useState, useEffect, useRef } from 'react';
import heroVid from '../assets/herooption.mp4';
import heroVidMobile from '../assets/heromobile.mp4';
import useIntersectionObserver from '../useIntersectionObserver';
import { MoveDown } from 'lucide-react';

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

 const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
   element.scrollIntoView({ behavior: 'smooth' });
  }
 };

 return (
  <div
   ref={ref}
   className={`pt-[2rem] 2xl:pt-[3.3rem] font-spacemono relative w-full max-h-screen overflow-hidden transition-opacity duration-[1.5s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <div className="absolute inset-0 overflow-hidden bg-white">
    <video
     ref={desktopVideoRef}
     autoPlay
     loop
     muted
     playsInline
     className={`absolute top-0 left-0 w-[100%] h-[110%]  object-cover opacity-80 mt-[-3.5rem] md:mt-[-2.75rem] 2xl:mt-[-4rem] ${isMobile ? 'hidden' : 'block'}`}
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
    <MoveDown onClick={() => scrollTo('events')} className="border rounded-full p-2 w-[50px] h-[50px] hover:bg-white hover:text-black duration-300 cursor-pointer hover:scale-110 mx-auto mt-[35rem]" />
   </div>
  </div>
 );
}

export default Hero;
