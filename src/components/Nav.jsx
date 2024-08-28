import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LogoW from '../assets/thsopenlogo.webp';
import PropTypes from 'prop-types';


function Nav({ textColor, logoSrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'border-b border-white scale-125' : 'hover:border-b border-white hover:scale-125';
  };

  const paths = ['/sponsorship', '/sponsor-form', '/merch', '/contact', '/register', '/about', '/events'];

  if (paths.includes(location.pathname)) {
    textColor = 'text-white';
    logoSrc = LogoW;
  }


  return (
    <>
      <div className={`font-spacemono fixed top-0 flex justify-between items-center pt-6 pb-6 md:mb-14 z-20 bg-transparent bg-opacity-95 w-full max-h-[10rem] text-white textColor ${textColor}`}>
        <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex mr-[4rem] justify-between'>
          <img className='w-[40%] md:max-w-[150px] max-h-[70px] ml-[3rem] z-50 hover:scale-110 duration-300' src={logoSrc} alt="THS Open Logo" width={500}
            height={500} />
        </Link>
        <div className='hidden md:flex gap-6 ml-[-7rem] xl:text-lg'>
          <Link to={'/about'} className={`${getNavLinkClass('/about')} duration-200`}>About</Link>
          <Link to={'/sponsorship'} className={`${getNavLinkClass('/sponsorship')} duration-200`}>Sponsor</Link>
          <Link to={'/events'} className={`${getNavLinkClass('/events')} duration-200`}>Events</Link>
          <Link to={'/merch'} className={`${getNavLinkClass('/merch')} duration-200`}>Merch</Link>
          <Link to={'/contact'} className={`${getNavLinkClass('/contact')} duration-200`}>Contact</Link>
        </div>
        <div className='hidden md:block'>
          <Link to={'/register'} className='border-white border py-2 px-4 hover:bg-slate-200 hover:text-black duration-200 rounded-md hover:scale-110 mr-10'>Register</Link>
        </div>
        <div className='md:hidden'>
          <Menu onClick={toggleModal} className='mr-[2rem] cursor-pointer hover:scale-125 duration-200' />
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-40'>
          <div className=' w-full h-full p-2 rounded shadow-lg'>
            <X className='top-8 right-8 absolute cursor-pointer hover:scale-125 duration-200' onClick={toggleModal} />
            <div className='flex flex-col gap-5 m-3 pt-[4rem] items-center'>
              <Link to={'/about'} onClick={toggleModal} className='text-3xl'>About</Link>
              <Link to={'/events'} onClick={toggleModal} className='text-3xl'>Events</Link>
              <Link to={'/merch'} onClick={toggleModal} className='text-3xl'>Merch</Link>
              <Link to={'/sponsorship'} onClick={toggleModal} className='text-3xl'>Sponsorship</Link>
              <Link to={'/register'} onClick={toggleModal} className='text-3xl'>Register</Link>
              <Link to={'/contact'} onClick={toggleModal} className='text-3xl'>Contact</Link>
            </div>
            <div className=' mt-[10rem]'>
              <Link to={'/'} onClick={toggleModal} className='flex justify-center'><img src={LogoW} alt="THS Open Logo" className='w-[30%]' loading='lazy' /></Link>
            </div>
          </div>
        </div >
      )
      }
    </>
  );
}

Nav.propTypes = {
  textColor: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired
}

export default Nav;
