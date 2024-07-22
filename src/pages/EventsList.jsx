import { Link } from "react-router-dom";
import MitchHero from '../assets/mitchblacknwhite2.jpg';
import MitchHeroMobile from '../assets/mitchheromobile.png';
import image3 from '../assets/image3.jpg';
import image3W from '../assets/image3.webp';
import image3MD from '../assets/image3-md.webp';
import image3LG from '../assets/image3-lg.webp';
import image3XL from '../assets/image3-xl.webp';
import { useEffect } from 'react';
import { MoveDown, MoveRight } from 'lucide-react';
import useIntersectionObserver from '../useIntersectionObserver';

function EventsList() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, isHeaderIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [eventListRef, isEventListIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      <div className="relative ">
        <div>
          <picture
            ref={headerRef}
            className={`h-[100vh]  opacity-0 bg-no-repeat bg-cover bg-center relative transition-opacity duration-[2s] ${isHeaderIntersecting ? 'opacity-100' : 'opacity-0'}`}
          >
            <source srcSet={MitchHeroMobile} media="(max-width: 768px)" />
            <img src={MitchHero} alt="Mitch Hero" className="w-full h-[100vh] object-cover" />
          </picture>
          <p className="text-[#ffffff] text-[4.5rem] font-bold font-poppins absolute top-[28%] md:top-[30%] lg:top-[33%] xl:top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[11rem]">
            <span className="title-shadow">EVENTS</span>
            <MoveDown onClick={() => scrollTo('events')} className="border rounded-full p-2 w-[50px] h-[50px] hover:bg-white hover:text-black duration-300 cursor-pointer hover:scale-110 mx-auto" />
          </p>
        </div>
        {/* EVENT LIST */}
        <div
          id="events"
          ref={eventListRef}
          className={`flex flex-col md:flex-row py-8 gap-8 md:gap-[5rem] px-[1rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3.5rem] 2xl:px-[4.5rem] transition-opacity duration-[2s] ${isEventListIntersecting ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4 relative md:w-1/3">
            <picture>
              <source
                srcSet={`${image3W} 2048w,
       ${image3MD} 768w,
       ${image3LG} 1024w,
       ${image3XL} 1280w,`}
                sizes='(max-width: 768px) 768w,
       (max-width: 1024px) 1024w,
       (max-width: 1280px) 1280w,
       2048w'
                type="image/webp" />
              <img src={image3} alt="Newlands Golf Course" className="w-full md:min-h-[200px] rounded-md" loading='lazy' width={500}
                height={500} />
            </picture>
            <div className="absolute right-0 border text-black bg-white py-3 px-5 text-center rounded-tr-md">
              <p>Sep.</p>
              <p className="font-bold text-xl">16</p>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 justify-evenly font-spacemono md:w-1/2">
            <h4 className="font-bold font-poppins text-[1.25rem]">THS OPEN 2024</h4>
            <p>1:00 PM - 5:30 PM</p>
            <p>Get ready to tee off for a great cause at the 1st Annual THS Open, proudly presented by The Hockey Shop! We&apos;re excited to invite you to join us at the stunning Newlands Golf and Country Club [Championship Course] on September 16, 2024, for a day of fun, competition, and breathtaking scenery.</p>
            <p>This isn&apos;t just any golf tournament - it&apos;s an opportunity to enjoy 18 holes of challenging play while supporting a fantastic cause. All proceeds from the event will go to the Canucks Autism Network (CAN), helping deliver programs for children, youth, and adults, while promoting inclusion and acceptance across BC and beyond.</p>
            <div className="mt-5 flex justify-start">
              <Link to={'/events/thsopen2024'} className="border-white flex gap-2 border px-3 py-4 hover:bg-white hover:text-black duration-300 hover:scale-105 rounded-md">
                View Event<MoveRight className="w-[30px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsList;
