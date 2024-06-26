import merchImage from '../assets/hatnshirt.png';
import useIntersectionObserver from '../useIntersectionObserver';

function Merch() {
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.2,
 });

 return (
  <div
   ref={ref}
   className={`my-12 mx-[1.5rem] md:mx-[2rem] lg:mx-[3rem] font-spacemono 2xl:px-[8rem] transition-opacity duration-[1s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <h1 className="font-poppins font-semibold text-[2rem] md:text-5xl uppercase tracking-tighter">Shop the merch</h1>
   <div className='my-10 flex flex-col-reverse md:flex-row md:items-center md:gap-10 md:justify-center'>
    <div className='md:w-1/2 lg:px-[3rem]'>
     <p className="my-10">Swing for a cause. All proceeds go to Canucks Autism Network (CAN), helping to raise awareness and support for autism.</p>
     <a className="border border-white px-6 py-3 rounded-md hover:bg-slate-100 hover:text-black duration-200" target="_blank" href="https://www.thehockeyshop.com/">Coming Soon</a>
    </div>
    <div className='flex justify-center items-center'>
     <img src={merchImage} alt="THS Open Merch" className='max-w-[20rem] md:max-w-[30rem]' loading='lazy' />
    </div>
   </div>
  </div>
 );
}

export default Merch;
