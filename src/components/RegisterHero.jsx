import heroVideo from '../assets/hero.mp4';
import useIntersectionObserver from '../useIntersectionObserver';

function RegisterHero() {

 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.1,
 });


 return (
  <>
   <div ref={ref} className={`mt-[2rem] 2xl:mt-[3.3rem] font-spacemono relative w-full max-h-screen overflow-hidden transition-opacity duration-[1.5s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
    <div className="absolute inset-0 overflow-hidden">
     <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-[-1rem] left-0 w-full h-[115vh] object-cover opacity-70 mt-[-8.5rem] md:mt-[-8rem] 2xl:mt-[-10rem]"
      style={{ pointerEvents: 'none' }}
     >
      <source src={heroVideo} type="video/mp4" />
      Your browser does not support the video tag.
     </video>
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] gap-10 md:mx-[5rem] lg:mx-[10rem] xl:mx-[15rem] 2xl:mx-[20rem]">
     <h1 className="text-white leading-9 scale-y-200 tracking-wide text-[2rem] md:text-[3rem] xl:text-[3.1rem] bg-transparent uppercase font-poppins font-extrabold text-center title-shadow justify-self-stretch">Register Your Team</h1>
     <p className='text-center text-[.8rem] md:text-[1rem] mx-6 lg:text-[1.1rem]'>This isn&apos;t just any golf tournament--it&apos;s an opportunity to enjoy 18 holes of challenging play while supporting a fantastic cause. All proceeds from the event will go to the Canucks Autism Network (CAN) helping to raise awareness and support for autism.</p>
    </div>
   </div>
  </>
 )
}

export default RegisterHero