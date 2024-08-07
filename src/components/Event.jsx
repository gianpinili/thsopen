import image1 from '../assets/image1.jpg';
import image1W from '../assets/image1.webp';
import image1MD from '../assets/image1-md.webp';
import image1LG from '../assets/image1-lg.webp';
import image1XL from '../assets/image1-xl.webp';
import image12XL from '../assets/image1-2xl.webp';
import image2 from '../assets/image2.jpg';
import image2W from '../assets/image2.webp';
import image3 from '../assets/image3.jpg';
import image3W from '../assets/image3.webp';
import image3MD from '../assets/image3-md.webp';
import image3LG from '../assets/image3-lg.webp';
import image3XL from '../assets/image3-xl.webp';
import NewlandsLogo from '../assets/newlandslogo.webp';
import useIntersectionObserver from '../useIntersectionObserver';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

function Event() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div id='events' ref={ref} className={`bg-[#1c1c1c] mt-[-3.5rem] md:mt-[-3rem] 2xl:mt-[-4rem] font-spacemono pt-[5rem] px-[1.5rem] py-12 md:pb-[0] flex flex-col md:px-[2rem] lg:px-[3rem] relative h-[80vh] md:h-auto 2xl:px-[8rem] transition-opacity duration-[1.3s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
      <div>
        <h1 className="font-poppins font-semibold text-[2rem] sm:text-5xl uppercase tracking-tighter">The Event</h1>
        <p className=" mt-[3rem] text-[.8rem] md:max-w-[300px] md:mt-[5rem] md:text-[.9rem] lg:max-w-[400px] lg:text-[1rem] xl:max-w-[500px] xl:text-[1.1rem] 2xl:max-w-[530px] 2xl:text-[1.2rem]">
          Get ready to tee off for a great cause at the <span className="font-bold text-[.9rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]">1st Annual THS Open,</span> proudly presented by The Hockey Shop! We&apos;re excited to invite you to join us at the stunning Newlands Golf and Country Club [Championship Course] on <span className="font-bold text-[.9rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]">September 16, 2024,</span> for a day of fun, competition, and breathtaking scenery.
        </p>
      </div>
      <div className="relative w-full h-screen bg-[#1c1c1c]">
        <picture>
          <source
            srcSet={image2W}
            type="image/webp" />
          <img
            src={image2}
            alt="Newlands Golf Course"
            className="absolute top-[8rem] object-cover left-0 w-[50%] h-[40%] max-w-[500px] lg:left-0 xl:max-w-[600px] xl:h-[50%] 2xl:max-w-[690px] rounded-md"
            width={500}
            height={500}
            loading="lazy"
          />
        </picture>
        <picture>
          <source
            srcSet={`${image1W} 2048w,
     ${image1MD} 768w,
     ${image1LG} 1024w,
     ${image1XL} 1280w,
     ${image12XL} 1536w`}
            sizes='(max-width: 768px) 768w,
     (max-width: 1024px) 1024w,
     (max-width: 1280px) 1280w,
     (max-width: 1536px) 1536w,
     2048w'
            type="image/webp" />
          <img
            src={image1}
            alt="Newlands Golf Course"
            className="absolute top-[55%] sm:top-[47%] md:top-[30%] z-10 left-[60%] transform -translate-x-1/2 w-[60%] h-auto max-w-[800px] md:left-[65%] lg:left-[65%] md:w-[50%] 2xl:left-[70%] xl:top-[40%] rounded-md"
            width={500}
            height={500}
            loading="lazy"
          />
        </picture>
        <picture>
          <source
            srcSet={`${image3W} 2048w,
     ${image3MD} 768w,
     ${image3LG} 1024w,
     ${image3XL} 1280w,`}
            sizes='(max-width: 768px) 768w,
     (max-width: 1024px) 1024w,
     (max-width: 1280px) 1280w,'
            type="image/webp" />
          <img
            src={image3}
            alt="Newlands Golf Course"
            className="absolute top-10 right-0 min-w-[80px] w-[60%] md:top-[-12rem] md:right-[-1rem] md:h-[82%] object-cover h-[90%] min-h-[120px] 2xl:right-[-2rem] 2xl:max-w-[55%] rounded-md"
            width={500}
            height={500}
            loading="lazy"
          />
        </picture>
        <a href="https://www.google.com/maps?rlz=1C1ONGR_enCA1054CA1054&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyFggBEC4YgwEYrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDI4MTNqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KdMmNYm0z4VUMb_x0fIholZ8&daddr=21025+48+Ave,+Langley,+BC+V3A+3M3" target='_blank' rel='noopener noreferrer' aria-label="Newlands Golf and Country Club">
          <div className="absolute hidden sm:inline bottom-[6.5rem] left-[3rem] text-white text-md md:text-2xl font-bold md:bottom-[18rem] md:left-[4rem] z-10 xl:left-[5rem] 2xl:left-[6rem] xl:bottom-[11rem]">
            <img src={NewlandsLogo} alt="Newlands Golf and Country Club" className='sm:w-[9rem] md:w-[10rem]' width={500}
              height={361} />
          </div>
          <div className="absolute hidden sm:inline bottom-[2rem] md:bottom-[12rem] md:left-[-.5rem] left-[-.5rem] w-[15rem] h-[15rem] md:w-[18rem] md:h-[18rem] border border-white rounded-full z-20 xl:left-[.5rem] 2xl:left-[1.57rem] xl:bottom-[5rem] hover:bg-[#062c0b] hover:opacity-40 duration-200 hover:border-black "></div>
        </a>
        <div className='absolute border-b border-white w-[70%] top-20 md:top-10 md:w-[50%]'></div>
      </div>
      <Link to="/events" className="text-[.7rem] md:text-[.8rem] lg:text-[.9rem]  xl:text-[1rem] 2xl:text-[1.1rem] absolute bottom-5 right-10 md:bottom-[16rem] md:right-[8rem] lg:bottom-[14rem] xl:bottom-[3rem] 2xl:bottom-[1rem] uppercase font-bold flex gap-2 hover:scale-110 duration-300 items-center z-20"><Eye />All Events</Link>
    </div>
  );
}

export default Event;
