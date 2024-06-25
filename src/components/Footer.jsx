import { Link } from 'react-router-dom';
import ColourLogo from '../assets/cancolourlogo.png';
import THS from '../assets/thslogo.png';
import ThoBlackLogo from '../assets/thsopenblacklogo.png';

function Footer() {


 return (
  <>
   <footer className="bg-white text-black py-5 font-spacemono px-[1.5rem]">
    <div className='flex flex-col gap-2 mt-12 mb-5 md:flex-row md:justify-evenly'>
     <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='hover:scale-110 md:hover:scale-125 duration-300 hover:ml-[1.5rem] md:hover:border-b border-black md:text-xl'>Home</Link>
     <Link to={'/events'} className='hover:scale-110 md:hover:scale-125 hover:ml-[1.5rem] md:hover:border-b border-black duration-300 md:text-xl'>Events</Link>
     <Link to={'/merch'} className='hover:scale-110 md:hover:scale-125 hover:ml-[1.5rem] duration-300 md:hover:border-b border-black md:text-xl'>Merch</Link>
     <Link to={'/sponsorship'} className='hover:scale-110 md:hover:scale-125 hover:ml-[1.5rem] duration-300 md:hover:border-b border-black md:text-xl'>Sponsor</Link>
     <Link to={'/contact'} className='hover:scale-110 md:hover:scale-125 hover:ml-[1.5rem] duration-300 md:hover:border-b border-black md:text-xl'>Contact</Link>
    </div>
    <div className='flex flex-col items-center justify-center gap-8 mb-10 md:flex-row md:my-12 md:gap-14'>
     <a href="https://www.thehockeyshop.com" target='_blank'>
      <img className='w-[150px] hover:scale-125 duration-300' src={THS} alt="The Hockey Shop" />
     </a>
     <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <img className='w-[125px] md:ml-[1.5rem] hover:scale-125 duration-300' src={ThoBlackLogo} alt="THS Open" />
     </Link>
     <a href="https://www.canucksautism.ca" target='_blank'>
      <img className='w-[200px] md:w-[175px] hover:scale-125 duration-300' src={ColourLogo} alt="Canucks Autism Network" />
     </a>
    </div>
    <div>
     <p className="text-center mt-[4rem] text-[.8rem] md:text-[.9rem] lg:text-[1rem]">© {new Date().getFullYear()} THS Open. All rights reserved.</p>
    </div>
   </footer >
  </>
 )
}

export default Footer