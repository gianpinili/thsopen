import CanWhiteLogo from '../assets/canwhitelogo.png';
import useIntersectionObserver from '../useIntersectionObserver';

function Donation() {
 const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.2,
 });

 return (
  <div ref={ref} className={`transition-opacity duration-[2s] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
   <div className="marquee bg-[#1c1c1c] pt-[3rem]">
    <div className="marquee-content">
     <h1 className="uppercase font-poppins text-[6rem] font-bold">Swing for a cause</h1>
     <h1 className="uppercase font-poppins text-[6rem] font-bold">Swing for a cause</h1>
     <h1 className="uppercase font-poppins text-[6rem] font-bold">Swing for a cause</h1>
     {/* Duplicate the content */}
     <h1 className="uppercase font-poppins text-[6rem] font-bold">Swing for a cause</h1>
     <h1 className="uppercase font-poppins text-[6rem] font-bold">Swing for a cause</h1>
     <h1 className="uppercase font-poppins text-[6rem] font-bold">Swing for a cause</h1>
    </div>
   </div>
   <section className="bg-[#1c1c1c] font-spacemono py-[3rem] px-[1.5rem] flex flex-col md:px-[2rem] lg:px-[3rem] md:h-full 2xl:px-[8rem] gap-14 md:flex-row">
    <div className="flex flex-col gap-8 md:w-1/2 md:pl-[3rem]">
     <p>Canucks Autism Network (CAN) was founded in 2008 by Vancouver Canucks Co-owners, Paolo and Clara Aquilini, whose son is on the autism spectrum.</p>
     <p>CAN is dedicated to providing programs to individuals on the autism spectrum and their families, while promoting acceptance and inclusion through community engagement and training initiatives across BC and beyond.</p>
    </div>
    <div className='flex flex-col gap-8 items-center justify-center'>
     <a href="https://www.canucksautism.ca/about-us/" target='_blank' rel='noopener noreferrer'>
      <img src={CanWhiteLogo} alt="Canucks Autism Network Logo" className='hover:scale-110 duration-200' />
     </a>
     <a href="https://support.canucksautism.ca/site/TR/CANPro-Am/Pro-Am?team_id=3280&pg=team&fr_id=1280" target='_blank' rel='noopener noreferrer' className="border border-white px-12 py-3 rounded-md hover:bg-slate-100 hover:text-black duration-200 text-center">Donate</a>
    </div>
   </section>
  </div>
 );
}

export default Donation;
