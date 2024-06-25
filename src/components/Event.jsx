import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Event() {
 return (
  <>
   <div className="bg-[#1c1c1c] font-spacemono pt-[3rem] px-[1.5rem] flex flex-col md:px-[2rem] lg:px-[3rem] h-[80vh] md:h-full 2xl:px-[8rem]">
    <div>
     <h1 className="font-poppins font-semibold text-3xl sm:text-5xl uppercase tracking-tighter">The Event</h1>
     <p className=" mt-[3rem] text-[.8rem] md:max-w-[300px] md:mt-[5rem] md:text-[.9rem] lg:max-w-[400px] lg:text-[1rem] xl:max-w-[500px] xl:text-[1.1rem] 2xl:max-w-[530px] 2xl:text-[1.2rem]">Get ready to tee off for a great cause at the <span className="font-bold text-[.9rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]">1st Annual THS Open,</span> proudly presented by The Hockey Shop! We&apos;re excited to invite you to join us at the stunning Newlands Golf and Country Club on <span className="font-bold text-[.9rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]">July 23, 2024,</span> for a day of fun, competition, and breathtaking scenery.</p>
    </div>
    <div className="relative w-full h-screen bg-[#1c1c1c]">
     {/* Image 1 */}
     <img
      src={image2}
      alt="Image 1"
      className="absolute top-[8rem] object-cover left-0 w-[50%] h-[40%] max-w-[500px] lg:left-20 xl:left-[4rem] xl:max-w-[600px] xl:h-[50%] 2xl:max-w-[690px]"
     />
     {/* Image 2 */}
     <img
      src={image1}
      alt="Image 2"
      className="absolute top-[30%] z-20 left-[50%] transform -translate-x-1/2 w-[60%] h-auto max-w-[800px] md:left-[60%] md:w-[50%] lg:left-[50%] xl:left-[60%] xl:top-[40%]"
     />
     {/* Image 3 */}
     <img
      src={image3}
      alt="Image 3"
      className="absolute top-10 right-0 min-w-[80px] w-[60%] md:top-[-12rem] md:right-[-1rem] md:h-[82%] object-cover h-[90%] min-h-[120px]"
     />
     {/* Coordinates */}
     <a href="https://www.google.com/maps?rlz=1C1ONGR_enCA1054CA1054&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyFggBEC4YgwEYrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDI4MTNqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KdMmNYm0z4VUMb_x0fIholZ8&daddr=21025+48+Ave,+Langley,+BC+V3A+3M3" target='_blank'>
      <div className="absolute bottom-[8em] left-[1rem] text-white text-md md:text-2xl font-bold md:bottom-[20rem] z-30 xl:left-[2rem] 2xl:left-[2.75rem] xl:bottom-[13rem] ">
       <div>49.090169926867986 N</div>
       <div>-122.64028039472198 W</div>
      </div>
      {/* Circle */}
      <div className="absolute bottom-[2rem] md:bottom-[12rem] md:left-[-.5rem] left-[-1rem] w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] border border-white rounded-full z-30 xl:left-[.5rem] 2xl:left-[1.57rem] xl:bottom-[5rem] hover:bg-white hover:opacity-40 duration-200"></div>
     </a>
     <div className='absolute border-b border-white w-[70%] top-20 md:top-10 md:w-[50%]'></div>
    </div>
   </div>

  </>
 )
}

export default Event