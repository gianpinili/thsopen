import { useEffect } from 'react';
import useIntersectionObserver from '../useIntersectionObserver'; // Adjust the path if necessary
import Newlands from '../assets/newlands.jpg';
import ContactInfo from '../components/ContactInfo';
import { Helmet } from 'react-helmet';

function Contact() {

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const [headerRef, isHeaderIntersecting] = useIntersectionObserver({ threshold: 0.5 });

 return (
  <>
   <Helmet>
    <title>Contact | THS Open</title>
    <meta name="description" content="Contact us below for any questions or inquiries for the THS Open." />
   </Helmet>
   <div className="relative mt-[8rem] bg-[#1c1c1c]">
    <div>
     <div
      ref={headerRef}
      className={`h-[100vh] mt-[-8rem] opacity-0 bg-no-repeat bg-cover bg-center relative transition-opacity duration-[2s] ${isHeaderIntersecting ? 'opacity-70' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${Newlands})` }}
     >
     </div>
     <p className="text-white text-[3rem] font-bold font-poppins absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10rem] uppercase title-shadow">
      Contact
     </p>
    </div>
    <ContactInfo />
   </div>
  </>
 );
}

export default Contact;
