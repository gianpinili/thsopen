import TheShop from '../assets/thehockeyshop.jpg';
import AboutThsOpen from '../components/AboutThsOpen.jsx';
// import GoogleMap from '../assets/map.png';
import Map from '../components/GoogleMaps.jsx';
import { useEffect } from 'react';

function About() {

 useEffect(() => {
  window.scrollTo(0, 0);
 })

 return (
  <>
   <section className="my-[1rem] md:my-[10rem] lg:my-[8rem] xl:my-[6rem] flex flex-col md:flex-row m-4 font-spacemono md:gap-4 lg:mx-10 xl:mx-[3rem] 2xl:mx-[4rem]">
    <div className="flex flex-col justify-center gap-[1.25rem] md:w-1/2 mt-[6rem] md:mt-[0rem] mb-[2rem] md:mx-6 lg:pr-10 xl:pr-20">
     <h1 className="text-5xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] lg:leading-[2.75rem] uppercase tracking-tighter md:mb-8">About Us</h1>
     <p className='text-sm xl:text-md 2xl:text-lg'>For the past 33 years, we have remained unwavering in our commitment to delivering exceptional service and expert advice to help our customers excel in their hockey endeavors. Since the day we first opened our doors, our focus has always been on ensuring that every player performs at their best.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>What started as a humble mom-and-pop store in Surrey, British Columbia, has evolved into an international hockey superstore, renowned for its quality and expertise. Despite our growth and expansion, we have never lost sight of our origins as a dedicated hockey pro shop. Our journey from a local establishment to a global presence is a testament to our passion for the game and our dedication to our customers.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>Our team consists of knowledgeable and dedicated staff members who are committed to helping you find the perfect fit from head to toe. Whether you&apos;re a newcomer to the game or a seasoned veteran, we are here to support you every step of the way. We understand the intricacies of hockey gear and are equipped to provide personalized recommendations that cater to your specific needs.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>Thank you for being a part of our story. Here&apos;s to many more years of helping you achieve your best on the ice!</p>

     <a href="https://www.thehockeyshop.com/" target='_blank' className='border px-6 py-4 rounded-md hover:bg-white hover:text-black duration-300 text-center lg:w-2/3 md:mt-8'>Visit Our Online Store</a>
    </div>
    <div className='md:w-1/2 flex items-center relative'>
     <a href="https://www.youtube.com/watch?v=0dNEJ6YoWWY&ab_channel=TheHockeyShop" target='_blank' className='absolute top-[10%] md:top-[15%] left-1/2 transform -translate-x-1/2 text-white -translate-y-1/2 border border-[#ffffff]  px-4 sm:px-8 md:px-14 md:py-4 py-3 rounded-md  hover:opacity-50 duration-300 opacity-70 uppercase text-center'>Store tour</a>
     <img src={TheShop} alt="The Hockey Shop" className='rounded-md' />
    </div>
   </section>
   <AboutThsOpen />
   <div className='my-[8rem]'>
    <div>
     <h1 className='text-5xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] lg:leading-[2.75rem] uppercase tracking-tighter md:mb-8 mx-4 md:mx-10 my-4 lg:mx-14 xl:mx-[4rem] 2xl:mx-[4.5rem] md:mt-20'>Our Location</h1>
     <Map />
     <p className='text-center font-spacemono mt-3'>20202 66 Ave Building F1, Langley, BC V2Y 1P3</p>
     {/* <div className='overflow-hidden relative'>
      <a href="https://www.google.com/maps/place/The+Hockey+Shop+Source+For+Sports/@49.1220325,-122.7062901,13z/data=!3m1!5s0x5485d82ad368e0e3:0xcf147e38754dbcc0!4m10!1m2!2m1!1sthe+hockey+shop!3m6!1s0x5485d82ad463e66d:0x34d1a44f690a7f44!8m2!3d49.1219802!4d-122.6649995!15sCg90aGUgaG9ja2V5IHNob3BaESIPdGhlIGhvY2tleSBzaG9wkgEUc3BvcnRpbmdfZ29vZHNfc3RvcmXgAQA!16s%2Fg%2F1xpwjgfv?entry=ttu" target='_blank' className='overflow-hidden relative w-80 h-80'>
       <img className='rounded-lg mx-auto h-[50vh] object-cover hover:scale-110 duration-300 transform transition-transform overflow-hidden' src={GoogleMap} alt="Google Maps" />
      </a>
     </div> */}
    </div>
   </div>
  </>
 )
}

export default About