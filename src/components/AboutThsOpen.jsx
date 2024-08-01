import MitchAbout from '../assets/mitchabout2.jpg';
import MitchAbout2 from '../assets/mitchabout.jpg';
import THSOpen from '../assets/thsopenlogo.png';
import { Link } from 'react-router-dom';

function AboutThsOpen() {
 return (
  <>
   <section className='flex flex-col-reverse md:flex-row my-10 mx-4 font-spacemono md:mx-10 lg:gap-4 xl:gap-8 2xl:gap-10 xl:mx-[3rem] 2xl:mx-[4rem]'>
    {/* LEFT SIDE IMAGES */}
    <div className='relative flex md:w-1/2 md:mb-[3rem] xl:mb-[4rem] 2xl:mb-[6rem]'>
     <img src={MitchAbout} alt="Mitch About" width={'400px'} className='rounded-md w-[80%] ml-3 md:object-cover' loading='lazy' />
     <img src={MitchAbout2} alt="Mitch About 2" width={'400px'} className='rounded-md absolute w-[50%] right-5 bottom-[-4rem] ' loading='lazy' />
     <img src={THSOpen} alt="THS Open Logo" className='absolute bottom-[-5rem] left-[4.5rem] -translate-x-1/2 -translate-y-1/2 w-[20%] sm:left-[6.5rem] sm:bottom-[-7rem] md:bottom-[-6rem] md:left-[5.5rem] md:w-[30%] lg:bottom-[-8rem] lg:left-[6.5rem] xl:bottom-[-9rem] xl:left-[7.5rem] 2xl:bottom-[-10.5rem] 2xl:left-[9rem]' loading='lazy' />
    </div>
    {/* RIGHT SIDE TEXT */}
    <div className='flex flex-col gap-[2rem] mb-8 md:w-1/2 md:px-6 md:justify-center lg:px-8 xl:px-10 2xl:[px-14] xl:pl-[4rem]'>
     <h2 className='font-poppins font-bold text-3xl'>What is the THS Open?</h2>
     <p className='text-sm md:text-md lg:text-[1rem] xl:text-[1rem] lg:leading-8 2xl:text-[1.1rem]'>The THS Open aims to bring together our community for a day of fun, competition, and fundraising. Many of our store employees are avid golfers, and we believe this is a fantastic way to unite people for a great cause. By participating, you will help us raise essential funds to support the Canucks Autism Network (CAN)&apos;s mission of providing critical resources and opportunities for individuals with autism and their families. Join us on the green as we make a positive impact. Swing for a cause!</p>
     <Link to={'/register'} className="border px-6 py-4 rounded-md hover:bg-white hover:text-black duration-300 text-center lg:w-2/3 md:mt-8">Register Now</Link>
    </div>
   </section>
  </>
 )
}

export default AboutThsOpen