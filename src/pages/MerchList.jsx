import hatImage from '../assets/hatimage.png';
import shirtImage from '../assets/shirtimage.png';
import { Dot } from 'lucide-react';
import useIntersectionObserver from '../useIntersectionObserver';
import { useEffect } from 'react';

function MerchList() {
 const products = [
  {
   name: "THS OPEN HAT",
   price: "$30.00",
   image: hatImage,
   features: [
    "100% polyester with Sphere Dry moisture control",
    "6-panel with double mesh insets",
    "Adjustable hook and loop closure",
    "Unstructured",
    "Low profile",
    "Embroidered logo",
    "Proceeds go to CAN Network",
    "Made to order"
   ]
  },
  {
   name: "THS OPEN POLO",
   price: "$45.00",
   image: shirtImage,
   features: [
    "8.8-oz, 100% Dri-FIT polyester with moisture management technology",
    "Rib-knit collar",
    "Tagless",
    "3-button placket",
    "Breathable",
    "Embroidered logo",
    "Proceeds go to CAN Network",
    "Made to order"
   ]
  }
 ];

 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.0,
 });

 //scroll to top on mount
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div className='font-spacemono'>
   {products.map((product, index) => {
    return (
     <div
      key={index}
      ref={ref}
      className={`my-[10rem] mx-8 transition-opacity duration-[3s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
     >
      <div className={`flex flex-col gap-8 md:gap-[5rem] items-center justify-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
       <img src={product.image} alt={product.name} className="w-[90%] md:w-[40%] md:max-w-[500px] h-auto" />
       <div className='flex flex-col gap-4 md:gap-8'>
        <h1 className='text-4xl font-poppins font-bold md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]'>{product.name}</h1>
        <p className='text-3xl md:text-4xl'>{product.price}</p>
        <ul>
         {product.features.map((feature, featureIndex) => (
          <li className='flex gap-3 text-[.9rem]' key={featureIndex}><Dot />{feature}</li>
         ))}
        </ul>
        <a href="" target='_blank' className='px-8 py-3 rounded-md font-semibold border hover:bg-slate-50 hover:text-black duration-300 hover:scale-110 flex w-1/2 justify-center' >Buy Now</a>
       </div>
      </div>
     </div>
    );
   })}
  </div>
 );
}

export default MerchList;
