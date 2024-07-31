import { Link } from 'react-router-dom';
import MitchBall from '../assets/golfball.jpg';
import MitchEvent from '../assets/mitchpickup.jpg';

function Events() {
 return (
  <>
   <section id='events' className="font-spacemono relative px-4 pb-10 md:px-10 md:pb-20 lg:pb-[8rem] xl:pb-[10rem] lg:px-14 xl:px-[3rem] 2xl:px-[8rem] bg-[#1c1c1c]">
    <div className='flex flex-col md:flex-row-reverse relative'>
     <div className='relative flex-1'>
      <img src={MitchBall} alt="Newlands Golf" className='bnw-filter rounded-md z-20 absolute h-auto w-[50%] top-[17rem] -translate-x-1/2 translate-y-1/2 left-[27%] max-w-[500px] sm:top-[8rem] sm:w-[45%] md:top-[28rem] lg:top-[24rem] lg:left-[32%] xl:top-[22rem] 2xl:top-[20rem]' />
      <img src={MitchEvent} alt="THS Open" className='bnw-filter rounded-md absolute top-[10rem] right-0 h-auto w-[70%] max-w-[300px] sm:top-[8rem] sm:right-10 sm:max-w-[325px] md:top-[16rem] md:right-0 lg:top-[7rem] lg:max-w-[350px] xl:max-w-[400px] 2xl:top-[7rem] 2xl:max-w-[400px]' />
     </div>
     <div className='flex flex-col gap-10 items-center justify-center mt-[30rem] sm:mt-[28rem] md:mt-0 md:flex-1'>
      <h1 className="font-poppins z-20 pt-16 mt-[-32rem] mb-[26rem] pb-2 sm:pb-20 font-bold text-[5.2rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[10rem] uppercase tracking-tighter relative md:mt-0 md:mb-[-2rem]">EVENTS</h1>
      <p className='text-center text-sm lg:text-md xl:text-[1rem] leading-7 2xl:text-xl 2xl:px-6 md:mt-[-3rem] z-30'>Get ready to tee off for a great cause at the 1st Annual THS Open, proudly presented by The Hockey Shop! We&apos;re excited to invite you to join us at the stunning Newlands Golf and Country Club [Championship course] on September 16, 2024, for a day of fun, competition, and breathtaking scenery.</p>
      <p className="font-poppins font-semibold border-b pb-2 px-3">September 16, 2024</p>
      <div className='flex flex-col justify-center items-center'>
       <a href="https://www.google.com/maps?rlz=1C1ONGR_enCA1054CA1054&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBggJEEUYOagCALACAA&um=1&ie=UTF-8&fb=1&gl=ca&sa=X&geocode=KdMmNYm0z4VUMb_x0fIholZ8&daddr=21025+48+Ave,+Langley,+BC+V3A+3M3">
        <p className='text-center text-sm font-semibold hover:scale-105 hover:duration-300'>Newlands Golf and Country Club [Championship Course]</p>
       </a>
       <p className='mt-2 text-[.8rem]'>Langley, British Columbia</p>
      </div>
      <Link to={'/events'} className='border px-8 py-3 rounded-md mx-auto text-sm hover:bg-white hover:text-black hover:duration-300' aria-label='Go to events page' aria-description='Go to events page' aria-labelledby='Go to events page'>Learn More</Link>
     </div>
    </div>
   </section>
  </>
 )
}

export default Events;
