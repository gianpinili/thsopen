import { Link } from "react-router-dom";
import HausBay from '../assets/hausfirst.jpg';
import HausWall from '../assets/haussecond.jpg';

function HausOfGolf() {
 return (
  <section className="flex flex-col lg:flex-row-reverse font-spacemono mx-4 my-20 lg:gap-8 lg:px-10 xl:px-14 2xl:px-20">
   <div className="lg:w-1/2 relative flex flex-col gap-2 items-center justify-center lg:gap-6">
    <img src={HausBay} alt="Haus of Golf" className="rounded-md xl:mt-[-15rem] 2xl:mt-[-12rem]" width={'100%'} height={'100%'} loading="lazy" />
    <img src={HausWall} alt="Haus of Golf" className="w-[80%] lg:w-[90%] rounded-md xl:w-[55%] 2xl:w-[50%] xl:absolute xl:bottom-10 xl:max-w-[500px] 2xl:bottom-[-2rem]" width={'100%'} height={'100%'} loading="lazy" />
   </div>
   <div className="flex flex-col gap-7 lg:w-1/2 justify-center mt-10">
    <div>
     <h2 className="font-poppins font-bold text-[4rem] lg:text-[4.75rem] uppercase tracking-[-0.2rem] leading-[4rem] lg:tracking-[-0.3rem] lg:leading-[6rem]s">Warm Up @</h2>
     <h2 className="font-poppins font-bold text-[4rem] lg:text-[4.75rem] uppercase tracking-[-0.2rem] leading-[4rem] lg:tracking-[-0.3rem] lg:leading-[6rem]">Haus of Golf</h2>
    </div>
    <p className="text-[.8rem] tracking-wide lg:text-[.9rem]">We are excited to announce that all tournament participants and their foursomes will enjoy a complimentary warmup session at The Haus of golf, just a 10-minute drive away from Newlands Golf & Country Club, which does not have a practice range.</p>
    <p className="text-[.8rem] tracking-wide lg:text-[.9rem]">The Haus of Golf facility features state-of-the-art Trackman technology, allowing you to play iconic courses like Pebble Beach or fine-tune your swing with detailed stats. This exclusive warmup session is included with your tournament registration.</p>
    <p className="tracking-wide text-[.9rem] font-bold lg:text-[1rem]">Haus of Golf Provides:</p>
    <ul className="text-[.8rem] tracking-wide list-disc px-8 lg:text-[.9rem]">
     <li>300+ world-class courses</li>
     <li>40+ trackable metrics</li>
     <li>Multiple bays up to 4 golfers per bay</li>
     <li>They&apos;re a vibe</li>
    </ul>
    <div className="mt-6 lg:flex lg:mx-auto">
     <Link to={"/events"} className="border border-white px-10 py-3 rounded-md hover:bg-white hover:text-black hover:font-bold duration-300 ">Learn More</Link>
    </div>
   </div>
  </section>
 )
}

export default HausOfGolf