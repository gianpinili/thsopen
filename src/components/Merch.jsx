import hatImage from '../assets/hatimage2.png';
import hatImageW from '../assets/hatimage2.webp';
import hatImageMD from '../assets/hatimage2-md.webp';
import hatImageLG from '../assets/hatimage2-lg.webp';
import hatImageXL from '../assets/hatimage2-xl.webp';
import hatImage2xl from '../assets/hatimage2-2xl.webp';
import hatImage1 from '../assets/hatimage1.png';
import hatImage1W from '../assets/hatimage1.webp';
import hatImage1MD from '../assets/hatimage1-md.webp';
import hatImage1LG from '../assets/hatimage1-lg.webp';
import hatImage1XL from '../assets/hatimage1-xl.webp';
import hatImage12xl from '../assets/hatimage1-2xl.webp';
import shirtImage from '../assets/shirtimage2.png';
import shirtImageW from '../assets/shirtimage2.png';
import shirtImage1 from '../assets/shirtimage3.png';
import shirtImage1W from '../assets/shirtimage3.webp';
import { useState } from 'react';
import { X } from 'lucide-react';

import useIntersectionObserver from '../useIntersectionObserver';

function Merch() {
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.2,
 });

 //function to open up image modal when image is clicked
 const [showModal, setShowModal] = useState(false);
 const [selectedImage, setSelectedImage] = useState(null);

 const toggleModal = (imageSrc) => {
  setSelectedImage(imageSrc);
  setShowModal(!showModal);
 }

 return (
  <div
   ref={ref}
   className={`py-12 bg-black text-white px-[1.5rem] md:px-[2rem] lg:px-[3rem] font-spacemono 2xl:px-[8rem] transition-opacity duration-[1s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   <div className='mt-[1rem] mb-12 flex flex-col-reverse lg:flex-row-reverse md:items-center md:gap-10 md:justify-center'>
    <div className='md:w-1/2 lg:px-[3rem] mt-[3rem]  lg:mt-[-3rem] xl:mt-[-5rem]'>
     <h1 className="font-poppins font-bold text-[4rem] md:text-[6rem] uppercase tracking-tighter">MERCH</h1>
     <p className="my-3 mb-10 md:text-xl">Swing for a cause. All proceeds go to Canucks Autism Network (CAN), helping to raise awareness and support for autism.</p>
     <a className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black hover:font-bold duration-200" target='_blank' href="https://www.thehockeyshop.com/collections/ths-open">Shop THS Open</a>
    </div>
    <div className='grid grid-cols-2 gap-4 m-auto'>
     <picture>
      <source
       srcSet={`${hatImageW} 2048w,
      ${hatImageMD} 768w, 
      ${hatImageLG} 1024w, 
      ${hatImageXL} 1280w, 
      ${hatImage2xl} 1536w`}
       sizes='(max-width: 768px) 768px,
             (max-width: 1024px) 1024px,
             (max-width: 1280px) 1280px,
             (max-width: 1536px) 1536px,
             2048px'
       type="image/webp" />
      <img src={hatImage} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(hatImage)} width={500}
       height={500} />
     </picture>
     <picture>
      <source
       srcSet={`${hatImage1W} 2048w,
      ${hatImage1MD} 768w,
      ${hatImage1LG} 1024w,
      ${hatImage1XL} 1280w,
      ${hatImage12xl} 1536w`}
       sizes='(max-width: 768px) 768px,
             (max-width: 1024px) 1024px,
             (max-width: 1280px) 1280px,
             (max-width: 1536px) 1536px,'
       type="image/webp" />
      <img src={hatImage1} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(hatImage1)} width={500}
       height={500} />
     </picture>
     <picture>
      <source srcSet={shirtImage1W} type="image/webp" />
      <img src={shirtImage1} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(shirtImage1)} width={500}
       height={500} />
     </picture>
     <picture>
      <source srcSet={shirtImageW} type="image/webp" />
      <img src={shirtImage} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(shirtImage)} width={500}
       height={500} />
     </picture>
    </div>
   </div>

   {showModal && (
    <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-40 p-[2rem] sm:p-[3rem] md:p-[5rem] lg:p-[8rem]'>
     <X className='top-8 right-8 absolute cursor-pointer hover:scale-125 duration-200 text-white' onClick={toggleModal} />
     <img src={selectedImage} alt="Selected Merch" className='max-w-full max-h-full' width={500}
      height={500} />
    </div >
   )}
  </div>
 );
}

export default Merch;
