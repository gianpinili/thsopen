import { Link } from "react-router-dom";
import MitchHero from '../assets/mitchblacknwhite2.jpg';
import MitchHeroMobile from '../assets/mitchheromobile.png';
import image3 from '../assets/image3.jpg';
import image3W from '../assets/image3.webp';
import image3MD from '../assets/image3-md.webp';
import image3LG from '../assets/image3-lg.webp';
import image3XL from '../assets/image3-xl.webp';
import Redwoods from '../assets/redwoods-golf.png';
import { useEffect } from 'react';
import { MoveDown, MoveRight } from 'lucide-react';
import useIntersectionObserver from '../useIntersectionObserver';
import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from "uuid";

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

  const events = [
    {
      id: uuidv4(),
      date: {
        month: "Jul.",
        day: "3"
      },
      title: "THS OPEN 2025",
      time: "10:30 AM - 5:00 PM",
      description: [
        "Get ready to tee off for a great cause at the 2nd Annual THS Open, proudly presented by The Hockey Shop! Mark your calendars for July 3, 2025, as Redwoods Golf Course sets the stage for a day that blends unforgettable sights, thrilling moments, and a spirit of camaraderie.",
      ],
      link: "/events/thsopen2025",
      image: {
        src: Redwoods,
        alt: "Newlands Golf Course",
        webpSources: [
          { srcSet: `${Redwoods} 2048w`, size: "2048w" },
          { srcSet: `${Redwoods} 768w`, size: "768w" },
          { srcSet: `${image3LG} 1024w`, size: "1024w" },
          { srcSet: `${image3XL} 1280w`, size: "1280w" }
        ]
      }
    },
    {
      id: uuidv4(),
      date: {
        month: "Sep.",
        day: "16"
      },
      title: "THS OPEN 2024",
      time: "1:00 PM - 5:30 PM",
      description: [
        "Get ready to tee off for a great cause at the 1st Annual THS Open, proudly presented by The Hockey Shop! We&apos;re excited to invite you to join us at the stunning Newlands Golf and Country Club [Championship Course] on September 16, 2024, for a day of fun, competition, and breathtaking scenery."
      ],
      link: "/events/thsopen2024",
      image: {
        src: image3,
        alt: "Newlands Golf Course",
        webpSources: [
          { srcSet: `${image3W} 2048w`, size: "2048w" },
          { srcSet: `${image3MD} 768w`, size: "768w" },
          { srcSet: `${image3LG} 1024w`, size: "1024w" },
          { srcSet: `${image3XL} 1280w`, size: "1280w" }
        ]
      }
    }
    // Add more events here if needed
  ];

  return (
    <>
      <Helmet>
        <title>Events | THS Open</title>
        <meta name="description" content="THS Open events list." />
      </Helmet>
      <div className="relative">
        <div>
          <picture
            ref={headerRef}
            className={`h-[100vh] opacity-0 bg-no-repeat bg-cover bg-center relative transition-opacity duration-[2s] ${isHeaderIntersecting ? 'opacity-100' : 'opacity-0'}`}
          >
            <source srcSet={MitchHeroMobile} media="(max-width: 768px)" />
            <img src={MitchHero} alt="Mitch Hero" className="w-full h-[100vh] object-cover" loading="lazy" />
          </picture>
          <p className="text-[#ffffff] text-[4.5rem] font-bold font-poppins absolute top-[25%] md:top-[30%] lg:top-[33%] xl:top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[11rem]">
            <span className="title-shadow">EVENTS</span>
            <MoveDown onClick={() => scrollTo('events')} className="border rounded-full p-2 w-[50px] h-[50px] hover:bg-white hover:text-black duration-300 cursor-pointer hover:scale-110 mx-auto" />
          </p>
        </div>
        {/* EVENT LIST */}
        <div
          id="events"
          ref={eventListRef}
          className={`flex flex-col  py-10 gap-8 md:gap-[5rem] px-[1rem] md:px-[2rem] lg:px-[2.5rem] xl:px-[3.5rem] 2xl:px-[4.5rem] transition-opacity duration-[2s] ${isEventListIntersecting ? 'opacity-100' : 'opacity-0'}`}
        >
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row gap-8">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-4 relative md:w-1/3">
                <picture>
                  {event.image.webpSources.map((source) => (
                    <source key={source.id} srcSet={source.srcSet} sizes={source.size} type="image/webp" />
                  ))}
                  <img src={event.image.src} alt={event.image.alt} className="w-full md:min-h-[200px] max-h-[275px] rounded-md" loading='lazy' width={500} height={500} />
                </picture>
                <div className="absolute right-0 border text-black bg-white py-3 px-5 text-center rounded-tr-md">
                  <p>{event.date.month}</p>
                  <p className="font-bold text-xl">{event.date.day}</p>
                </div>
              </div>
              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-4 justify-evenly font-spacemono md:w-1/2">
                <h4 className="font-bold font-poppins text-[1.25rem]">{event.title}</h4>
                <p>{event.time}</p>
                {event.description.map((paragraph) => (
                  <p key={event.id} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                ))}
                <div className="mt-5 flex justify-start">
                  <Link to={event.link} className="border-white flex gap-2 border px-3 py-4 hover:bg-white hover:text-black duration-300 hover:scale-105 rounded-md" aria-label="View Event">
                    View Event<MoveRight className="w-[30px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EventsList;
