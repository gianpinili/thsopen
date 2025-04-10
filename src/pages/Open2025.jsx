import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { useEffect } from 'react';
import useIntersectionObserver from '../useIntersectionObserver'; // Adjust the path if necessary
import { Helmet } from 'react-helmet';

function Open2024() {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const [leftSideRef, isLeftSideIntersecting] = useIntersectionObserver({ threshold: 0.2 });
 const [rightSideRef, isRightSideIntersecting] = useIntersectionObserver({ threshold: 0.2 });

 return (
  <>
   <Helmet>
    <title>2025 | THS Open</title>
    <meta name='description' content='THS Open 2024' />
   </Helmet>
   <div className="py-[10rem] bg-[#1c1c1c] px-[1rem] md:px-[1.5rem] font-spacemono flex flex-col md:flex-row md:justify-center gap-12 md:gap-[6rem] xl:gap-0">
    {/* LEFT SIDE */}
    <div
     ref={leftSideRef}
     className={`flex flex-col items-start gap-8 md:w-1/3 md:mr-[-6rem] transition-opacity duration-[1s] ${isLeftSideIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
     <Link to={'/events'} className='flex gap-3 mb-6 hover:scale-110 duration-300 hover:text-green-300'>
      <MoveLeft />Back to All Events
     </Link>
     <h1 className='font-poppins text-[1.5rem] font-bold'>THS OPEN 2025</h1>
     <div>
      <p className='text-[1rem]'>Thursday, July 3, 2025</p>
      <p>10:30 PM - 5:00 PM</p>
     </div>
     <div className='hover:scale-110 duration-300'>
      <p className='font-semibold border-b text-start mb-2 pb-1'>Tournament Course</p>
      <a href="https://maps.app.goo.gl/G1WHT2uoKsyTC1cQ6" target='_blank'>
       <p>Redwoods Golf Course</p>
       <p className='text-[#ffffff]'>Championship Course</p>
       <p>22011 88 Ave, Langley Twp, BC V1M 3S8</p>
      </a>
     </div>
     <div className='flex flex-col gap-2'>
      <Link to={'/sponsor-form'} className='text-blue-500 duration-300 hover:scale-110'>Become a Sponsor</Link>
      <Link to={'/register'} className='text-green-300 hover:scale-110 duration-300 underline'>Register Your Team</Link>
      <a href="https://support.canucksautism.ca/site/TR/CANPro-Am/Pro-Am?team_id=3280&pg=team&fr_id=1280" target='_blank' className='text-blue-500 duration-300 hover:scale-110'>Donate to CAN</a>
     </div>
    </div>
    {/* RIGHT SIDE */}
    <div
     ref={rightSideRef}
     className={`flex flex-col gap-6 md:w-1/2 md:pr-20 md:text-[1.1rem] transition-opacity duration-[2s] ${isRightSideIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
     <p>Get ready to tee off for a great cause at the 1st Annual THS Open, proudly presented by The Hockey Shop!</p>
     <p>This isn&apos;t just any golf tournament - it&apos;s an opportunity to enjoy 18 holes of challenging play while supporting a fantastic cause. All proceeds from the event will go to the Canucks Autism Network (CAN), helping deliver programs for children, youth, and adults, while promoting inclusion and acceptance across BC and beyond.</p>
     <p>We look forward to seeing you out there and making the first THS Open a huge success! Let&apos;s make some memories and support a great cause together. See you on the green!</p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>WARMUP</span>: @ Redwoods Driving Range</p>
     <p>We are thrilled to announce that all tournament participants will have access to the excellent driving range at Redwoods Golf Course. Conveniently located on-site, this facility provides the perfect opportunity to refine your swing and prepare for an amazing day on the course. Included as part of your tournament registration, the driving range ensures you&apos;re ready to bring your best game to the greens!</p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>TOURNAMENT FORMAT</span>: Texas Scramble</p>
     <p>Each player in the four-person scramble hits a drive. The team chooses the best drive and selects that position for the next shot. Each player hits from the chosen spot, and the process continues until someone from the team sinks a putt. The group records its score for the hole and moves on to the next teeing ground.</p>
     <p>Minimum of 3 drives per player must be used.</p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>LUNCH</span>: Burger & Brew (or drink of your choice)</p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>POST ROUND</span>: @ Redwoods Clubhouse</p>
     <p>After the tournament, join us in the clubhouse for snacks and drinks, where we will announce the winner and present the trophy. We&apos;ll also hand out other prizes and hold a silent auction featuring items like signed Canucks jerseys and other great goods. Don&apos;t miss this exciting conclusion to a fantastic day of golf!</p>
    </div>
   </div>
  </>
 );
}

export default Open2024;
