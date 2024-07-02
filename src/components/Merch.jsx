import hatImage from '../assets/hatimage2.png';
import hatImage1 from '../assets/hatimage1.png';
import shirtImage from '../assets/shirtimage2.png';
import shirtImage1 from '../assets/shirtimage3.png';
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
   className={`py-12 bg-white text-black px-[1.5rem] md:px-[2rem] lg:px-[3rem] font-spacemono 2xl:px-[8rem] transition-opacity duration-[1s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
  >
   {/* <h1 className="font-poppins font-semibold text-[2rem] md:text-5xl uppercase tracking-tighter">Shop the merch</h1> */}
   <div className='mt-[1rem] mb-12 flex flex-col-reverse lg:flex-row-reverse md:items-center md:gap-10 md:justify-center'>
    <div className='md:w-1/2 lg:px-[3rem] mt-[3rem]  lg:mt-[-3rem] xl:mt-[-5rem]'>
     <h1 className="font-poppins font-bold text-[4rem] md:text-[6rem] uppercase tracking-tighter">MERCH</h1>
     <p className="my-3 mb-10 md:text-xl">Swing for a cause. All proceeds go to Canucks Autism Network (CAN), helping to raise awareness and support for autism.</p>
     <a className="border border-black px-6 py-3 rounded-md hover:bg-[#1c1c1c] hover:text-white duration-200" target='_blank' href="https://www.thehockeyshop.com/collections/ths-open">Shop THS Open</a>
    </div>
    <div className='grid grid-cols-2 gap-4 m-auto'>
     <img src={hatImage} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(hatImage)} />
     <img src={hatImage1} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(hatImage1)} />
     <img src={shirtImage1} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(shirtImage1)} />
     <img src={shirtImage} alt="THS Open Merch" className='min-w-[9rem] md:max-w-[17.5rem] cursor-pointer hover:scale-105 duration-300' loading='lazy' onClick={() => toggleModal(shirtImage)} />
    </div>
   </div>

   {showModal && (
    <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-40 p-[2rem] sm:p-[3rem] md:p-[5rem] lg:p-[8rem]'>
     <X className='top-8 right-8 absolute cursor-pointer hover:scale-125 duration-200 text-white' onClick={toggleModal} />
     <img src={selectedImage} alt="Selected Merch" className='max-w-full max-h-full' />
    </div >
   )}
  </div>
 );
}

export default Merch;
