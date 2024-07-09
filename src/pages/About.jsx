import TheShop from '../assets/thehockeyshop.jpg';

function About() {
 return (
  <>
   <section className="mt-[1rem] md:mt-[10rem] flex flex-col md:flex-row m-4 font-spacemono md:gap-4 lg:mx-10 xl:mx-[3rem] 2xl:mx-[4rem] h-[100vh]">
    <div className="flex flex-col justify-center gap-[1.25rem] md:w-1/2 mt-[5rem] md:mt-[0rem] mb-5[2rem] md:mx-6">
     <h1 className="text-5xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] lg:leading-[2.75rem] uppercase tracking-tighter md:mb-8">About Us</h1>
     <p className='text-sm'>Since we opened the doors 33 years ago, we&apos;ve been dedicated to providing our customers with the best possible service and advice to help them perform at their best.</p>
     <p className='text-sm'>What began as a local mom-and-pop store located in Surrey, British Columbia has become an international hockey superstore. While we&apos;ve grown over the years, we&apos;ll always remain true to our roots as a pro hockey shop.</p>
     <p className='text-sm'>Our team of knowledgeable and dedicated staff will help you get the proper fit from head to toe. Whether you&apos;re new to the game or a seasoned vet, we&apos;re here to help you with your journey.</p>
     <p className='text-sm'>If hockey is your passion, you are in the right place!</p>
     <a href="https://www.thehockeyshop.com/" target='_blank' className='border px-6 py-4 rounded-md hover:bg-white hover:text-black duration-300 text-center md:w-1/2 md:mt-8'>Visit Our Online Store</a>
    </div>
    <div className='md:w-1/2 flex items-center'>
     <img src={TheShop} alt="The Hockey Shop" className='rounded-md' />
    </div>
   </section>
   <div className='mt-10'>
    <p>location: 2something langley bc</p>
   </div>
  </>
 )
}

export default About