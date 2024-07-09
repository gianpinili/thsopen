import MitchMerch from '../assets/mitchmerch.jpg';
import MerchGallery from '../components/MerchGallery';

function MerchPage() {
 return (
  <>
   <section className="my-[2rem] md:my-[10rem] lg:my-[8rem] xl:my-[6rem] flex flex-col-reverse md:flex-row m-4 font-spacemono md:gap-4 lg:mx-10 xl:mx-[3rem] 2xl:mx-[4rem] relative">
    <div className="flex flex-col justify-center gap-[1.25rem] md:w-1/2 md:mt-[0rem] mb-[2rem] md:mx-6 lg:pr-10 xl:pr-20 z-10 mt-[-10rem]">
     <h1 className="text-5xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] uppercase tracking-tighter md:mb-8 lg:leading-[3rem] xl:leading-[3.5rem] mb-[7rem]">THS Open Merch</h1>
     <p className='text-sm xl:text-md 2xl:text-lg'>At the heart of our latest initiative lies a commitment to making a difference. All proceeds from our merchandise go to the Canucks Autism Network (CAN), an organization dedicated to raising awareness and providing essential support for individuals with autism and their families. Each item in our collection is made to order</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>Our merchandise collection proudly features in-house embroidered THS Open logos, a symbol of excellence and dedication. These logos are meticulously crafted onto premium Nike Dri-Fit polos and Nike Lagacy 91 caps ensuring quality, durability and comfort. Whether you&apos;re on the golf course or attending a casual event, our collection has something for everyone. The moisture wicking fabric ensures you stay dry and comfortable, even on the hottest days.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>By purchasing these items, you are not only getting high quality, stylish apparel but also contributing to a cause that makes a real impact in the lives of those affected by autism. Your support helps fund programs, services, and events that empower individuals with autism, promote inclusion, and foster understanding within our communities.</p>
     <p className='text-sm xl:text-md 2xl:text-lg'>Join us in making a difference. Wear your THS Open merchandise with pride, knowing that your purchase helps support the Canucks Autism Network and its mission to create a more inclusive world for all.</p>
     <a href="https://www.thehockeyshop.com/collections/ths-open" target='_blank' className='border px-6 py-4 rounded-md hover:bg-white hover:text-black duration-300 text-center lg:w-2/3 md:mt-8'>Shop THS Merch</a>
    </div>
    <div className='md:w-1/2 flex items-center relative mt-[5rem] md:mt-0'>
     <img src={MitchMerch} alt="The Hockey Shop" className='rounded-md md:h-[100vh] object-cover' />
    </div>
   </section>
   <MerchGallery />
  </>
 )
}

export default MerchPage