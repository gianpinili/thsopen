import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/thsopenlogo.png';

function Nav() {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const location = useLocation();

 const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
 };

 const getNavLinkClass = (path) => {
  return location.pathname === path ? 'border-b border-white scale-125' : 'hover:border-b border-white hover:scale-125';
 };

 return (
  <>
   <div className='font-spacemono fixed top-0 flex justify-between items-center pt-6 pb-6 px-[4rem] md:mb-14 z-20 bg-black bg-opacity-60 w-full max-h-[10rem]'>
    <div className='hidden md:flex gap-6'>
     <Link to={'/events'} className={`${getNavLinkClass('/events')} duration-200`}>Event</Link>
     <Link to={'/merch'} className={`${getNavLinkClass('/merch')} duration-200`}>Merch</Link>
     <Link to={'/sponsorship'} className={`${getNavLinkClass('/sponsorship')} duration-200`}>Sponsor</Link>
    </div>
    <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex justify-center'>
     <img className='w-[50%] md:max-w-[150px] max-h-[80px] mr-[6rem] lg:mr-[6rem] z-50' src={Logo} alt="THS Open Logo" />
    </Link>
    <div className='hidden md:block'>
     <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0' target='_blank' className='border-white border py-2 px-4 hover:bg-slate-200 hover:text-black duration-200 rounded-md hover:scale-110'>Register</a>
    </div>
    <div className='md:hidden'>
     <Menu onClick={toggleModal} className='mr-[-2rem] cursor-pointer hover:scale-125 duration-200' />
    </div>
   </div>

   {isModalOpen && (
    <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-40'>
     <div className=' w-full h-full p-2 rounded shadow-lg'>
      <X className='top-8 right-8 absolute cursor-pointer hover:scale-125 duration-200' onClick={toggleModal} />
      <div className='flex flex-col gap-5 m-3 pt-[4rem]'>
       <Link to={'/events'} onClick={toggleModal} className='text-3xl'>Event</Link>
       <Link to={'/merch'} onClick={toggleModal} className='text-3xl'>Merch</Link>
       <Link to={'/sponsorship'} onClick={toggleModal} className='text-3xl'>Sponsorship</Link>
       <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0'} target='_blank' className='text-3xl'>Register</Link>
      </div>
     </div>
    </div >
   )}
  </>
 );
}

export default Nav;
