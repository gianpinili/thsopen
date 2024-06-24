import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/thsopenlogo.png';

function Nav() {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
 };

 return (
  <>
   <div className='flex justify-between items-center my-8 mx-[4rem]'>
    <div className='hidden md:flex gap-6'>
     <Link className='hover:border-b border-white hover:scale-125 duration-200'>Event</Link>
     <Link className='hover:border-b border-white hover:scale-125 duration-200'>Merch</Link>
     <Link className='hover:border-b border-white hover:scale-125 duration-200'>Sponsorship</Link>
    </div>
    <Link className='flex justify-center'>
     <img className='w-[50%] md:max-w-[400px] lg:mr-[6rem]' src={Logo} alt="THS Open Logo" />
    </Link>
    <div className='hidden md:block'>
     <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0' target='_blank' className='border-white border py-2 px-4 hover:bg-slate-200 hover:text-black duration-200 rounded-md hover:scale-110'>Register</a>
    </div>
    <div className='md:hidden'>
     <Menu onClick={toggleModal} className='text-2xl cursor-pointer hover:scale-125 duration-200' />
    </div>
   </div>

   {isModalOpen && (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center '>
     <div className=' w-full h-full p-2 rounded shadow-lg'>
      <X className='top-8 right-8 absolute cursor-pointer hover:scale-125 duration-200' onClick={toggleModal} />
      <div className='flex flex-col gap-5 m-3 pt-8'>
       <Link onClick={toggleModal} className='text-3xl'>Event</Link>
       <Link onClick={toggleModal} className='text-3xl'>Merch</Link>
       <Link onClick={toggleModal} className='text-3xl'>Sponsorship</Link>
       <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0'} target='_blank' className='text-3xl'>Register</Link>
      </div>
     </div>
    </div >
   )
   }
  </>
 );
}

export default Nav;
