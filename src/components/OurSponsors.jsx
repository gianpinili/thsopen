import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import CoquitlamExpressLogo from '../assets/coquitlamexpresslogo.png';
import HausLogo from '../assets/hauslogo.png';
import LagaLogo from '../assets/lagalogo.png';
import OrganikaLogo from '../assets/organikalogo.png';
import CageLogo from '../assets/cage.png';
// import AbbyCanucksLogo from '../assets/abbycanuckslogo.png';

const logos = [
 { src: HausLogo, alt: 'Haus Logo', href: 'https://hausofgolf.ca/' },
 { src: CageLogo, alt: 'Cage Logo', href: 'https://www.bvrberbros.com/' },
 { src: CoquitlamExpressLogo, alt: 'Coquitlam Express Logo', href: 'https://www.coquitlamexpress.ca/' },
 { src: OrganikaLogo, alt: 'Organika Logo', href: 'https://organika.com/' },
 { src: LagaLogo, alt: 'Laga Logo', href: 'http://www.lagasports.com/' },
 // { src: AbbyCanucksLogo, alt: 'Abby Canucks Logo' },
];

const responsive = {
 superLargeDesktop: {
  breakpoint: { max: 4000, min: 1536 },
  items: 4
 },
 desktop: {
  breakpoint: { max: 1536, min: 1024 },
  items: 4
 },
 tablet: {
  breakpoint: { max: 1024, min: 768 },
  items: 3
 },
 mobile: {
  breakpoint: { max: 768, min: 0 },
  items: 2
 }
};

const CustomLeftArrow = ({ onClick }) => {
 return (
  <button onClick={onClick} className="absolute left-0 z-10 transform -translate-y-1/2 top-1/2">
   <ChevronLeft size={32} />
  </button>
 );
};

CustomLeftArrow.propTypes = {
 onClick: PropTypes.func.isRequired,
};

const CustomRightArrow = ({ onClick }) => {
 return (
  <button onClick={onClick} className="absolute right-0 z-10 transform -translate-y-1/2 top-1/2">
   <ChevronRight size={32} />
  </button>
 );
};

CustomRightArrow.propTypes = {
 onClick: PropTypes.func.isRequired,
};

function OurSponsors() {
 return (
  <div className="bg-white text-black pt-6 px-2">
   <p className="font-poppins font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] text-center uppercase">
    Our Sponsors
   </p>
   <div className="mx-auto w-full max-w-[85rem] relative cursor-grab">
    <Carousel
     responsive={responsive}
     infinite={true}
     autoPlay={true}
     infiniteLoop={true}
     pauseOnHover={true}
     autoPlaySpeed={2000}
     customLeftArrow={<CustomLeftArrow />}
     customRightArrow={<CustomRightArrow />}
     itemClass="carousel-item-padding-40-px"
    >
     {logos.map((logo, index) => (
      <div key={index} className="flex justify-center items-center p-4 mt-6">
       <a href={logo.href} target="_blank" rel="noreferrer" className='w-[70%] md:w-[60%]'>
        <img src={logo.src} alt={logo.alt} className=" w-[100%] rounded-md" draggable="false" />
       </a>
      </div>
     ))}
    </Carousel>
   </div>
  </div>
 );
}

export default OurSponsors;
