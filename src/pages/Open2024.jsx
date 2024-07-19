import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { useEffect } from 'react';
import useIntersectionObserver from '../useIntersectionObserver'; // Adjust the path if necessary

function Open2024() {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const [leftSideRef, isLeftSideIntersecting] = useIntersectionObserver({ threshold: 0.2 });
 const [rightSideRef, isRightSideIntersecting] = useIntersectionObserver({ threshold: 0.2 });

 return (
  <>
   <div className="py-[10rem] bg-[#1c1c1c] px-[1rem] md:px-[1.5rem] font-spacemono flex flex-col md:flex-row md:justify-center gap-12 md:gap-[6rem] xl:gap-0">
    {/* LEFT SIDE */}
    <div
     ref={leftSideRef}
     className={`flex flex-col items-start gap-8 md:w-1/3 md:mr-[-6rem] transition-opacity duration-[1s] ${isLeftSideIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
     <Link to={'/events'} className='flex gap-3 mb-6 hover:scale-110 duration-300 hover:text-green-300'>
      <MoveLeft />Back to All Events
     </Link>
     <h1 className='font-poppins text-[1.5rem] font-bold'>THS OPEN 2024</h1>
     <div>
      <p className='text-[1rem]'>Monday, September 16, 2024</p>
      <p>1:00 PM - 5:30 PM</p>
     </div>
     <div className='hover:scale-110 duration-300'>
      <p className='font-semibold border-b text-start mb-2 pb-1'>Warmup Course</p>
      <a href="https://maps.app.goo.gl/Pbj9RJAodRFLGJx67" target='_blank'>
       <p>Haus of Golf</p>
       <p className='text-[#ffffff]'>6286 203 St. A130,</p>
       <p>Langle TWP, BC V2Y3S1</p>
       <p>Entrance off 62nd Avenue</p>
      </a>
     </div>
     <div className='hover:scale-110 duration-300'>
      <p className='font-semibold border-b text-start mb-2 pb-1'>Tournament Course</p>
      <a href="https://maps.app.goo.gl/G1WHT2uoKsyTC1cQ6" target='_blank'>
       <p>Newlands Golf Club</p>
       <p className='text-[#ffffff]'>Championship Course</p>
       <p>21025 48 Ave, Langley, BC V3A 3M3</p>
      </a>
     </div>
     <div className='flex flex-col gap-2'>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfhl-5aWzEn6Qt9EbLzamzGTDAPge4M-QHQYpSGgzJhtXg5VQ/viewform' target='_blank' className='text-blue-500 duration-300 hover:scale-110'>Become a Sponsor</a>
      {/* <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0' target='_blank' className='text-green-300 hover:scale-110 duration-300 underline'>Registration: August 10, 2024</a> */}
      <p className='text-green-300 hover:scale-110 duration-300 underline'>Registration: August 10, 2024</p>
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
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>WARMUP</span>: @ The Haus of Golf</p>
     <p>We are excited to announce that all tournament participants and their foursomes will enjoy a complimentary warmup session at The Haus of Golf, just a 10-minute drive away from Newlands Golf and Country Club, which does not have a practice range. The Haus of Golf facility features state-of-the-art Trackman technology, allowing you to play iconic courses like Pebble Beach or fine-tune your swing with detailed stats. This exclusive warmup session is included with your tournament registration. </p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>TOURNAMENT FORMAT</span>: Texas Scramble</p>
     <p>Each player in the four-person scramble hits a drive. The team chooses the best drive and selects that position for the next shot. Each player hits from the chosen spot, and the process continues until someone from the team sinks a putt. The group records its score for the hole and moves on to the next teeing ground.</p>
     <p>Minimum of 3 drives per player must be used.</p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>LUNCH</span>: Burger & Brew (or drink of your choice)</p>
     <p className='bg-[#252525] text-center rounded-md py-2'><span className='font-bold underline'>POST ROUND</span>: @ Newlands Clubhouse</p>
     <p>After the tournament, join us in the clubhouse for snacks and drinks, where we will announce the winner and present the trophy. We&apos;ll also hand out other prizes and hold a silent auction featuring items like signed Canucks jerseys and other great goods. Don&apos;t miss this exciting conclusion to a fantastic day of golf!</p>
    </div>
   </div>
  </>
 );
}

export default Open2024;
