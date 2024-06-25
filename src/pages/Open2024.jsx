import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { useEffect } from 'react';
import useIntersectionObserver from '../useIntersectionObserver'; // Adjust the path if necessary

function Open2024() {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const [leftSideRef, isLeftSideIntersecting] = useIntersectionObserver({ threshold: 0.4 });
 const [rightSideRef, isRightSideIntersecting] = useIntersectionObserver({ threshold: 0.4 });

 return (
  <>
   <div className="py-[10rem] bg-[#1c1c1c] px-[1rem] md:px-[1.5rem] font-spacemono flex flex-col md:flex-row md:justify-center">
    {/* LEFT SIDE */}
    <div
     ref={leftSideRef}
     className={`flex flex-col items-start gap-8 md:w-1/3 md:mr-[-6rem] transition-opacity duration-[2s] ${isLeftSideIntersecting ? 'opacity-100' : 'opacity-0'}`}
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
      <a href="https://www.google.com/maps?rlz=1C1ONGR_enCA1054CA1054&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyFggBEC4YgwEYrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDI4MTNqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KdMmNYm0z4VUMb_x0fIholZ8&daddr=21025+48+Ave,+Langley,+BC+V3A+3M3" target='_blank'>
       <p>Newlands Golf Course</p>
       <p>21025 48 Ave, Langley, BC V3A 3M3</p>
      </a>
     </div>
     <div className='flex flex-col gap-2'>
      <Link to={'/sponsorship'} className='text-blue-500 duration-300 hover:scale-110'>Become a Sponsor</Link>
      {/* https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0' */}
      <Link href={'/contact'} target='_blank' className='text-green-300 hover:scale-110 duration-300'>Register Today</Link>
      <a href="https://support.canucksautism.ca/site/TR/CANPro-Am/Pro-Am?team_id=3280&pg=team&fr_id=1280" target='_blank' className='text-blue-500 duration-300 hover:scale-110'>Donate to CAN</a>
     </div>
    </div>
    {/* RIGHT SIDE */}
    <div
     ref={rightSideRef}
     className={`flex flex-col gap-6 md:w-1/2 md:pr-20 md:text-[1.1rem] transition-opacity duration-[2s] ${isRightSideIntersecting ? 'opacity-100' : 'opacity-0'}`}
    >
     <p>Get ready to tee off for a great cause at the 1st Annual THS Open, proudly presented by The Hockey Shop!</p>
     <p>This isn&apos;t just any golf tournament - it&apos;s an opportunity to enjoy 18 holes of challenging play while supporting a fantastic cause. All proceeds from the event will go to the Canucks Autism Network (CAN), helping to raise awareness and support for autism.</p>
     <p>We look forward to seeing you out there and making the first THS Open a huge success! Let&apos;s make some memories and support a great cause together. See you on the green!</p>
     <p>FORMAT: Texas Scramble</p>
     <p>Each player in the four-person scramble hits a drive. The team chooses the best drive and selects that position for the next shot. Each player hits from the chosen spot, and the process continues until someone from the team sinks a putt. The group records its score for the hole and moves on to the next teeing ground.</p>
     <p>Minimum of 3 drives per player must be used.</p>
    </div>
   </div>
  </>
 );
}

export default Open2024;
