import { Phone, AtSign, Facebook, Instagram, Youtube, Smartphone } from 'lucide-react';

function ContactInfo() {

 const user = 'thsopenbc';
 const domain = 'gmail.com';
 const email = `${user}@${domain}`;

 return (
  <div className='mx-[1rem] py-[3rem] md:mx-[2rem] lg:mx-[4rem] xl:mx-[6rem] 2xl:mx-[9rem]'>
   <h1 className='font-poppins font-bold text-3xl md:text-[3rem] xl:text-[4rem] md:mb-[3rem]'>How to Reach Us</h1>
   <div className='flex flex-col gap-10 md:flex-row items-center md:justify-evenly mt-[3rem] md:mt-[8rem]'>
    <div className="flex flex-col relative bg-black rounded-md w-full p-4 min-h-[10rem] text-center md:min-h-[13rem]">
     <h3 className="font-poppins font-bold mt-10 text-xl">Call Us</h3>
     <a href="tel:604-589-8299" className='hover:scale-110 duration-300'>604-589-8299</a>
     <div className='absolute border rounded-full px-2 py-2 bg-white text-black top-[-1rem] left-1/2 translate-x-[-50%]'>
      <Phone className='w-[30px] h-[30px]' />
     </div>
    </div>
    <div className="flex flex-col bg-black rounded-md w-full p-4 min-h-[10rem] md:min-h-[13rem] text-center gap-10">
     <h3 className="font-poppins font-bold text-xl">Check Out Our Social Media</h3>
     <div className='flex justify-evenly gap-4'>
      <a href="https://www.facebook.com/TheHockeyShop" target='_blank' className='hover:scale-125 duration-200 flex flex-col items-center gap-6 text-[.8rem]'><Facebook />Facebook</a>
      <a href="https://www.instagram.com/thehockeyshopbc" target='_blank' className='hover:scale-125 duration-200 flex flex-col items-center gap-6 text-[.8rem]'><Instagram />Instagram</a>
      <a href="https://www.youtube.com/@thehockeyshopbc" target='_blank' className='hover:scale-125 duration-200 flex flex-col items-center gap-6 text-[.8rem]'><Youtube />Youtube</a>
      <a href="https://www.tiktok.com/@thehockeyshop" target='_blank' className='hover:scale-125 duration-200 flex flex-col items-center gap-6 text-[.8rem]'><Smartphone />TikTok</a>
     </div>
    </div>
    <div className="flex flex-col relative bg-black rounded-md w-full p-4 min-h-[10rem] md:min-h-[13rem] text-center">
     <h3 className="font-poppins font-bold mt-10 text-xl">Email Us</h3>
     <a href={`mailto:${email}`} className='hover:scale-110 duration-300'>{email}</a>
     <div className='absolute border rounded-full px-2 py-2 bg-white text-black top-[-1rem] left-1/2 translate-x-[-50%]'>
      <AtSign className='w-[30px] h-[30px]' />
     </div>
    </div>
   </div>
  </div>
 )
}

export default ContactInfo