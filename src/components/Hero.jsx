import heroVid from '../assets/hero.mp4';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../useIntersectionObserver';

function Hero() {
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.1,
 });

 return (
  <div ref={ref} className={`mt-[2rem] 2xl:mt-[3.3rem] font-spacemono relative w-full max-h-screen overflow-hidden transition-opacity duration-[2.5s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
   <video
    autoPlay
    loop
    muted
    className="w-full mt-[-2rem] md:mt-[-2rem] lg:mt-[-2rem] xl:mt-[-2rem] 2xl:mt-[-2.25rem] h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] object-cover opacity-70"
   >
    <source src={heroVid} type="video/mp4" />
    Your browser does not support the video tag.
   </video>
   <div className="absolute top-[35%] bg-none z-10 flex flex-col items-center justify-center gap-10 md:mx-[5rem] lg:mx-[10rem] xl:mx-[15rem] 2xl:mx-[20rem]">
    <h1 className="text-white leading-9 scale-y-200 tracking-wide text-[2rem] md:text-[3rem] xl:text-[3.1rem] bg-transparent uppercase font-poppins font-extrabold text-center">Register Your Team</h1>
    <p className='text-center text-[.8rem] md:text-[1rem] mx-6 lg:text-[1.1rem]'>This isn&apos;t just any golf tournament--it&apos;s an opportunnity to enjoy 18 holes of challenging play while supporting a fantastic cause. All proceeds from the event will go the the Canucks Autism Network (CAN) helping to raise awareness and support for autism.</p>
    <Link to="/register" className="border-white border py-2 px-4 rounded mt-4 hover:bg-slate-100 hover:text-black duration-200">Register</Link>
   </div>
  </div>
 );
}

export default Hero;
