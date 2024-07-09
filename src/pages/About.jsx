import TheShop from '../assets/thehockeyshop.jpg';
import AboutThsOpen from '../components/AboutThsOpen.jsx';
import GoogleMaps from '../components/GoogleMaps.jsx';
import { useEffect } from 'react';

function About() {

 //on mount, scroll to top
 useEffect(() => {
  window.scrollTo(0, 0);
 })

 return (
  <>
   <section className="my-[1rem] md:my-[10rem] lg:my-[8rem] xl:my-[6rem] flex flex-col md:flex-row m-4 font-spacemono md:gap-4 lg:mx-10 xl:mx-[3rem] 2xl:mx-[4rem]">
    <div className="flex flex-col justify-center gap-[1.25rem] md:w-1/2 mt-[5rem] md:mt-[0rem] mb-[2rem] md:mx-6 lg:pr-10 xl:pr-20">
     <h1 className="text-5xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] lg:leading-[2.75rem] uppercase tracking-tighter md:mb-8">About Us</h1>
     <p className='text-sm xl:text-md 2xl:text-lg'>Since we opened the doors 33 years ago, we&apos;ve been dedicated to providing our customers with the best possible service and advice to help them perform at their best.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>What began as a local mom-and-pop store located in Surrey, British Columbia has become an international hockey superstore. While we&apos;ve grown over the years, we&apos;ll always remain true to our roots as a pro hockey shop.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>Our team of knowledgeable and dedicated staff will help you get the proper fit from head to toe. Whether you&apos;re new to the game or a seasoned vet, we&apos;re here to help you with your journey.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>If hockey is your passion, you are in the right place!</p>
     <a href="https://www.thehockeyshop.com/" target='_blank' className='border px-6 py-4 rounded-md hover:bg-white hover:text-black duration-300 text-center lg:w-2/3 md:mt-8'>Visit Our Online Store</a>
    </div>
    <div className='md:w-1/2 flex items-center relative'>
     <a href="https://www.youtube.com/watch?v=0dNEJ6YoWWY&ab_channel=TheHockeyShop" target='_blank' className='absolute top-[10%] md:top-[15%] left-1/2 transform -translate-x-1/2 text-white -translate-y-1/2 border border-[#58a7db]  px-4 sm:px-8 py-3 rounded-md  hover:opacity-50 duration-300 opacity-30 uppercase'>Store tour</a>
     <img src={TheShop} alt="The Hockey Shop" className='rounded-md' />
    </div>
   </section>
   <AboutThsOpen />
   <div className='my-[8rem]'>
    <div>
     <h1 className='text-5xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] lg:leading-[2.75rem] uppercase tracking-tighter md:mb-8 mx-4 md:mx-10 my-4 lg:mx-14 xl:mx-[4rem] 2xl:mx-[4.5rem] md:mt-20'>Our Location</h1>
     <GoogleMaps />
    </div>
   </div>
  </>
 )
}

export default About