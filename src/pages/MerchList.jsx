import { useState } from 'react';
import { Dot } from 'lucide-react';
import useIntersectionObserver from '../useIntersectionObserver';
import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define your product images here (assuming you have multiple images for each product)
import hatImage from '../assets/hatimage.png';
import shirtImage from '../assets/shirtimage.png';
import hatImage1 from '../assets/hatimage1.png';
import shirtImage1 from '../assets/shirtimage1.png';
import hatImage2 from '../assets/hatimage2.png';
import shirtImage2 from '../assets/shirtimage2.png';
import hatImage3 from '../assets/hatimage3.png';
import shirtImage3 from '../assets/shirtimage3.png';

function MerchList() {
 const products = [
  {
   name: "THS OPEN HAT",
   price: "$34.99",
   href: "https://www.thehockeyshop.com/products/ths-open-nike-adjustable-hat",
   images: [hatImage, hatImage1, hatImage2, hatImage3], // Add multiple images here
   features: [
    "90/10 polyester/spandex",
    "Adjustable hook and loop closure",
    "Embroidered logo",
    "Moisture wicking",
    "Mid profile",
    "Structured",
    "6-panel",
    "Proceeds go to CAN Network",
    "Made to order"
   ]
  },
  {
   name: "THS OPEN POLO",
   price: "$59.99",
   href: "https://www.thehockeyshop.com/products/ths-open-nike-polo",
   images: [shirtImage, shirtImage1, shirtImage2, shirtImage3], // Add multiple images here
   features: [
    "7.2-oz, 100% Dri-FIT polyester with moisture management technology",
    "Contrast embroidered swoosh logo at left sleeve",
    "Nike embossed pearlized buttons",
    "Rolled forward shoulder seams",
    "Double needle hemmed bottom",
    "3-button placket",
    "Rib-knit collar",
    "Classic fit",
    "Breathable",
    "Tagless",
    "Proceeds go to CAN Network",
    "Made to order"
   ]
  }
 ];

 const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image index within each product

 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.0,
 });

 // Scroll to top on mount
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const nextImage = (productIndex) => {
  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products[productIndex].images.length);
 };

 const prevImage = (productIndex) => {
  setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? products[productIndex].images.length - 1 : prevIndex - 1));
 };

 return (
  <div className='font-spacemono bg-white text-[#1c1c1c]'>
   {products.map((product, index) => {
    return (
     <div
      key={index}
      ref={ref}
      className={`pt-[8rem] md:pt-[14rem] mx-8 transition-opacity duration-[.2s] ${isIntersecting ? 'opacity-100' : 'opacity-90'}`}
     >
      <div className={`flex flex-col gap-8 md:gap-[4rem] lg:gap-[6rem] items-center justify-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
       <div className='relative w-[90%] md:w-[90%] max-h-[600px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] flex justify-center items-center'>
        <img src={product.images[currentImageIndex]} alt={product.name} className=" h-auto rounded-md duration-500 mb-20 sm:mb-[3rem] max-w-[100%] sm:max-w-[60%] md:w-[100%] md:max-w-[100%]" loading='lazy' />
        <div className="flex items-center justify-center gap-[.5rem] sm:gap-[23rem] sm:top-1/2 absolute md:gap-[18rem] lg:gap-[24rem] bottom-[-1rem] left-1/2 -translate-x-1/2 -translate-y-1/2 xl:top-1/2 xl:gap-[32rem]">
         <button onClick={() => prevImage(index)} className="  duration-300 text-gray-800 font-semibold py-2 px-4 rounded-xl hover:scale-125 z-20">
          <ChevronLeft />
         </button>
         <button onClick={() => nextImage(index)} className=" duration-300 text-gray-800 font-semibold py-2 px-4 rounded-xl hover:scale-125 z-20">
          <ChevronRight />
         </button>
        </div>
       </div>
       <div className='flex flex-col gap-4 md:gap-8'>
        <h1 className='text-4xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] lg:leading-[2.75rem]'>{product.name}</h1>
        <p className='text-3xl md:text-4xl'>{product.price}</p>
        <ul>
         {product.features.map((feature, featureIndex) => (
          <li className='flex gap-3 text-[.9rem]' key={featureIndex}><Dot />{feature}</li>
         ))}
        </ul>

        <a href={product.href} target='_blank' rel="noopener noreferrer" className='px-4 sm:px-8 py-3 rounded-md font-semibold border border-black hover:bg-black hover:text-white duration-300 hover:scale-110 flex w-1/2 justify-center tracking-wider' >Buy Now</a>
       </div>
      </div>
     </div>
    );
   })}
  </div>
 );
}

export default MerchList;
