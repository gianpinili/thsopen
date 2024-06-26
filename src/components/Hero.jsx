import heroVid from '../assets/hero.mp4';
import useIntersectionObserver from '../useIntersectionObserver';
import { Link } from 'react-router-dom';

function Hero() {
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.1,
 });

 return (
  <div ref={ref} className={`mt-[2rem] 2xl:mt-[3.3rem] font-spacemono relative w-full max-h-screen overflow-hidden transition-opacity duration-[1.5s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
   <div className="absolute inset-0 overflow-hidden">
    <video
     autoPlay
     loop
     muted
     playsInline
     className="absolute top-0 left-0 w-full h-full object-cover opacity-70 mt-[-3.5rem] md:mt-[-2.75rem] 2xl:mt-[-4rem]"
     style={{ pointerEvents: 'none' }}
    >
     <source src={heroVid} type="video/mp4" />
     Your browser does not support the video tag.
    </video>
   </div>
   <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] gap-10 md:mx-[5rem] lg:mx-[10rem] xl:mx-[15rem] 2xl:mx-[20rem]">
    <h1 className="text-white leading-9 scale-y-200 tracking-wide text-[2rem] md:text-[3rem] xl:text-[3.1rem] bg-transparent uppercase font-poppins font-extrabold text-center">Register Your Team</h1>
    <p className='text-center text-[.8rem] md:text-[1rem] mx-6 lg:text-[1.1rem]'>This isn&apos;t just any golf tournament--it&apos;s an opportunity to enjoy 18 holes of challenging play while supporting a fantastic cause. All proceeds from the event will go to the Canucks Autism Network (CAN) helping to raise awareness and support for autism.</p>
    <Link to={'/register'} className="border-white border py-2 px-4 rounded mt-4 hover:bg-slate-100 hover:text-black duration-200 md:py-4 md:px-8">Registration Coming Soon</Link>
   </div>
  </div>
 );
}

export default Hero;
