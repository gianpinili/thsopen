import { useState } from 'react';
import { Alert, Snackbar, AlertTitle } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import emailjs from 'emailjs-com';

function SponsorForm() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [number, setNumber] = useState('');
 const [companyName, setCompanyName] = useState('');
 const [contact, setContact] = useState('');
 const [sponsor, setSponsor] = useState({
  bronze: false,
  silver: false,
  gold: false,
  title: false,
  other: false
 });
 const [alert, setAlert] = useState({ open: false, severity: '', message: '' });

 const handleSubmit = async (e) => {
  e.preventDefault();

  const sponsorSelected = Object.values(sponsor).some((value) => value);
  if (!name || !email || !number || !companyName || !contact || !sponsorSelected) {
   setAlert({
    open: true,
    severity: 'error',
    message: 'Looks like you missed something. Please fill in all required fields.',
    title: 'Uh-Oh!'
   });
   return;
  }

  const serviceId = 'service_ibimpz9';
  const templateId = 'template_y29i8l1';
  const userId = '2FUujzUnE_rq_sE64';

  const templateParams = {
   name,
   email,
   number,
   companyName,
   sponsorship: Object.keys(sponsor).filter((key) => sponsor[key]).join(', '),
   contact
  };

  try {
   await emailjs.send(serviceId, templateId, templateParams, userId);
   setAlert({
    open: true,
    severity: 'success',
    message: 'Thank you for inquiring about sponsoring! We will get back to you as soon as possible.',
    message2: 'Shop THS Open Merch here: <a href="https://www.thehockeyshop.com/collections/ths-open" target="_blank" rel="noopener noreferrer">THS Open Merch</a>',
    title: 'Hooray!'
   });
   setName('');
   setEmail('');
   setNumber('');
   setCompanyName('');
   setContact('');
   setSponsor({
    bronze: false,
    silver: false,
    gold: false,
    title: false,
    other: false
   });
  } catch (error) {
   setAlert({
    open: true,
    severity: 'error',
    message: 'There was an error submitting the form. Please try again later.',
    title: 'Error'
   });
  }
 };

 const handleSponsorChange = (e) => {
  setSponsor({ ...sponsor, [e.target.name]: e.target.checked });
 };

 const handleClose = () => {
  setAlert({ ...alert, open: false });
 };

 return (
  <>
   <h1 className="bg-[#1c1c1c] pt-10 font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem] text-center">
    Sponsorship Form
   </h1>
   <div className="bg-[#1c1c1c] px-4 py-10 flex justify-center">
    <form
     className="py-14 flex flex-col gap-4 rounded-lg w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
     onSubmit={handleSubmit}
    >
     <div className="flex flex-col gap-4">
      <div className="">
       <label htmlFor="firstName" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
        First Name <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="firstName"
        className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       />
      </div>
     </div>
     <div className="">
      <label htmlFor="email" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       Email <span className="text-red-500">*</span>
      </label>
      <input
       type="email"
       id="email"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="example@company.com"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
     </div>
     <div className="">
      <label htmlFor="number" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Phone Number <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="number"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="Phone #"
       value={number}
       onChange={(e) => setNumber(e.target.value)}
      />
     </div>
     <div className="">
      <label htmlFor="companyName" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Company Name <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="companyName"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="Company Name"
       value={companyName}
       onChange={(e) => setCompanyName(e.target.value)}
      />
     </div>
     <div className="flex flex-col gap-1">
      <p className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       What type of Sponsorship Package are you interested in? <span className="text-red-500">*</span>
      </p>
      <div className="flex gap-1">
       <input
        type="checkbox"
        id="bronze"
        name="bronze"
        checked={sponsor.bronze}
        onChange={handleSponsorChange}
       />
       <label htmlFor="bronze" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Bronze Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input
        type="checkbox"
        id="silver"
        name="silver"
        checked={sponsor.silver}
        onChange={handleSponsorChange}
       />
       <label htmlFor="silver" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Silver Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input
        type="checkbox"
        id="gold"
        name="gold"
        checked={sponsor.gold}
        onChange={handleSponsorChange}
       />
       <label htmlFor="gold" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Gold Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input
        type="checkbox"
        id="title"
        name="title"
        checked={sponsor.title}
        onChange={handleSponsorChange}
       />
       <label htmlFor="title" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Title Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input
        type="checkbox"
        id="other"
        name="other"
        checked={sponsor.other}
        onChange={handleSponsorChange}
       />
       <label htmlFor="other" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Other (Donation or any other way you want to help)</label>
      </div>
     </div>
     <div>
      <p className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       Best way for us to contact you? <span className="text-red-500">*</span>
      </p>
      <div className="flex gap-1">
       <input
        type="radio"
        id="emailContact"
        name="contact"
        value="email"
        checked={contact === 'email'}
        onChange={(e) => setContact(e.target.value)}
       />
       <label htmlFor="emailContact" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Email</label>
      </div>
      <div className="flex gap-1">
       <input
        type="radio"
        id="phoneContact"
        name="contact"
        value="phone"
        checked={contact === 'phone'}
        onChange={(e) => setContact(e.target.value)}
       />
       <label htmlFor="phoneContact" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Phone</label>
      </div>
     </div>
     <div className="flex justify-center">
      <button className="border border-black bg-white mt-4 text-black px-8 py-2 rounded-lg hover:text-white hover:bg-black duration-300  font-semibold">
       Submit
      </button>
     </div>
    </form>
   </div>
   <Snackbar
    open={alert.open}
    autoHideDuration={8000}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // For manual positioning, you might prefer to use style prop instead
    style={{ top: '70%', left: '50%', transform: 'translateX(-50%)' }} // Adjust this to your needs
    className="w-full" // Tailwind CSS classes to adjust the width
   >
    <Alert
     onClose={handleClose}
     severity={alert.severity}
     variant='filled'
     icon={<CheckIcon fontSize="inherit" />}
     className="text-xl p-8" // Tailwind CSS classes for custom styling
    >
     <AlertTitle className="font-bold">{alert.title}</AlertTitle>
     {alert.message}<br></br>
     <span dangerouslySetInnerHTML={{ __html: alert.message2 }} />
    </Alert>
   </Snackbar>

  </>
 );
}

export default SponsorForm;