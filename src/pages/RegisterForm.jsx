import { useState } from 'react';
import { Alert, Snackbar, AlertTitle } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import emailjs from 'emailjs-com';

function RegisterForm() {
 const [firstPlayer, setFirstPlayer] = useState('');
 const [secondPlayer, setSecondPlayer] = useState('');
 const [thirdPlayer, setThirdPlayer] = useState('');
 const [fourthPlayer, setFourthPlayer] = useState('');
 const [emailContact, setEmailContact] = useState('');
 const [food, setFood] = useState('');
 const [alert, setAlert] = useState({ open: false, severity: '', message: '', message2: '', title: '' });
 const [isValid, setIsValid] = useState(false);
 const [errors, setErrors] = useState({});

 const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};
  if (!firstPlayer) newErrors.firstPlayer = 'Player One is required';
  if (!secondPlayer) newErrors.secondPlayer = 'Player Two is required';
  if (!thirdPlayer) newErrors.thirdPlayer = 'Player Three is required';
  if (!fourthPlayer) newErrors.fourthPlayer = 'Player Four is required';
  if (!emailContact) newErrors.emailContact = 'Email is required';
  if (!food) newErrors.food = 'Food preference is required';

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
   setAlert({
    open: true,
    severity: 'error',
    message: 'Looks like you missed something. Please fill in all required fields.',
    title: 'Uh-Oh!'
   });
   return;
  }

  const serviceId = 'service_ibimpz9';
  const templateId = 'template_lsi2yzv';
  const userId = '2FUujzUnE_rq_sE64';

  const templateParams = {
   firstPlayer,
   emailContact,
   secondPlayer,
   thirdPlayer,
   fourthPlayer,
   food
  };

  try {
   await emailjs.send(serviceId, templateId, templateParams, userId);
   setAlert({
    open: true,
    severity: 'success',
    message: 'Thank you for registering! We are so excited to get on the green with you!',
    message2: 'Shop THS Open Merch here: <a href="https://www.thehockeyshop.com/collections/ths-open" target="_blank" rel="noopener noreferrer">THS Open Merch</a>',
    title: 'Hooray!'
   });
   setFirstPlayer('');
   setSecondPlayer('');
   setThirdPlayer('');
   setFourthPlayer('');
   setEmailContact('');
   setFood('');

   // Set the form as valid to show the link for payment
   setIsValid(true);

   setTimeout(() => {
    window.location.href = checkoutUrl;
   }, 0);

  } catch (error) {
   setAlert({
    open: true,
    severity: 'error',
    message: 'There was an error submitting the form. Please try again later.',
    title: 'Error'
   });
  }
 };

 const handleClose = () => {
  setAlert({ ...alert, open: false });
 };

 const checkoutUrl = "https://the-hockey-shop-cad.myshopify.com/cart/41551747186754:1?channel=buy_button";

 return (
  <>
   <h1 className="bg-[#1c1c1c] pt-10 font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem] text-center">
    Registration Form
   </h1>
   <div className="bg-[#1c1c1c] px-4 py-10 flex justify-center font-poppins">
    <form
     className="py-14 flex flex-col gap-4 rounded-lg w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
     onSubmit={handleSubmit}
    >
     <div className="flex flex-col gap-4">
      <div className="">
       <label htmlFor="firstPlayer" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
        Player One <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="firstPlayer"
        className={`bg-transparent border rounded-md w-full p-2 focus:outline-none ${errors.firstPlayer ? 'border-red-500' : 'focus:border-[#cefac6]'}`}
        placeholder="Player #1"
        value={firstPlayer}
        onChange={(e) => setFirstPlayer(e.target.value)}
       />
       {errors.firstPlayer && <p className="text-red-500 error-animation">{errors.firstPlayer}</p>}
      </div>
      <div className="">
       <label htmlFor="secondPlayer" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
        Player Two <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="secondPlayer"
        className={`bg-transparent border rounded-md w-full p-2 focus:outline-none ${errors.secondPlayer ? 'border-red-500' : 'focus:border-[#cefac6]'}`}
        placeholder="Player #2"
        value={secondPlayer}
        onChange={(e) => setSecondPlayer(e.target.value)}
       />
       {errors.secondPlayer && <p className="text-red-500 error-animation">{errors.secondPlayer}</p>}
      </div>
     </div>
     <div className="">
      <label htmlFor="thirdPlayer" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       Player Three <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="thirdPlayer"
       className={`bg-transparent border rounded-md w-full p-2 focus:outline-none ${errors.thirdPlayer ? 'border-red-500' : 'focus:border-[#cefac6]'}`}
       placeholder="Player #3"
       value={thirdPlayer}
       onChange={(e) => setThirdPlayer(e.target.value)}
      />
      {errors.thirdPlayer && <p className="text-red-500 error-animation">{errors.thirdPlayer}</p>}
     </div>
     <div className="">
      <label htmlFor="fourthPlayer" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Player Four <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="fourthPlayer"
       className={`bg-transparent border rounded-md w-full p-2 focus:outline-none ${errors.fourthPlayer ? 'border-red-500' : 'focus:border-[#cefac6]'}`}
       placeholder="Player #4"
       value={fourthPlayer}
       onChange={(e) => setFourthPlayer(e.target.value)}
      />
      {errors.fourthPlayer && <p className="text-red-500 error-animation">{errors.fourthPlayer}</p>}
     </div>
     <div className="">
      <label htmlFor="contactPlayerOne" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Email <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="contactPlayerOne"
       className={`bg-transparent border rounded-md w-full p-2 focus:outline-none ${errors.emailContact ? 'border-red-500' : 'focus:border-[#cefac6]'}`}
       placeholder="email@example.com"
       value={emailContact}
       onChange={(e) => setEmailContact(e.target.value)}
      />
      {errors.emailContact && <p className="text-red-500 error-animation">{errors.emailContact}</p>}
     </div>
     <div>
      <p className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       Food Allergies or Preferences (please list) <span className="text-red-500">*</span>
      </p>
      <div className="flex gap-1">
       <input
        type="radio"
        id="vegan"
        name="food"
        value="vegan"
        checked={food === 'vegan'}
        onChange={(e) => setFood(e.target.value)}
       />
       <label htmlFor="vegan" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Vegan</label>
      </div>
      <div className="flex gap-1">
       <input
        type="radio"
        id="vegetarian"
        name="food"
        value="vegetarian"
        checked={food === 'vegetarian'}
        onChange={(e) => setFood(e.target.value)}
       />
       <label htmlFor="vegetarian" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Vegetarian</label>
      </div>
      <div className="flex gap-1">
       <input
        type="radio"
        id="none"
        name="food"
        value="none"
        checked={food === 'none'}
        onChange={(e) => setFood(e.target.value)}
       />
       <label htmlFor="none" className="md:text-[1.1rem] 2xl:text-[1.25rem]">None</label>
      </div>
      <div className="flex gap-1 items-center">
       <input
        type="radio"
        id="other"
        name="food"
        value="other"
        checked={food === 'other'}
        onChange={(e) => setFood(e.target.value)}
       />
       <label htmlFor="other" className="md:text-[1.1rem] 2xl:text-[1.25rem]">Other</label>
      </div>
      <input type="text" id="other" className="bg-transparent border-b w-full p-2 focus:border-[#cefac6] focus:outline-none" onChange={(e) => setFood(e.target.value)} value={food} />
      {errors.food && <p className="text-red-500 error-animation">{errors.food}</p>}
     </div>
     <div className="flex justify-center">
      <button className="border border-black bg-white mt-4 text-black px-8 py-2 rounded-lg hover:text-white hover:bg-black duration-300 font-semibold">
       Submit & Pay
      </button>
     </div>
     <p className='opacity-60 italic mt-2 text-red-300 text-center'>* Registration is not complete until payment of $900.00 per foursome is received. An email confirmation will be sent once confirmed. *</p>
    </form>
   </div>
   {isValid && (
    <div className=" justify-center hidden">
     <a href={checkoutUrl} className="border border-black bg-white mt-4 text-black px-8 py-2 rounded-lg hover:text-white hover:bg-black duration-300 font-semibold">
      Submit & Pay
     </a>
    </div>
   )}
   <Snackbar
    open={alert.open}
    autoHideDuration={6000}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    style={{ top: '70%', left: '50%', transform: 'translateX(-50%)' }}
    className="w-full"
   >
    <Alert
     onClose={handleClose}
     severity={alert.severity}
     variant='filled'
     icon={<CheckIcon fontSize="inherit" />}
     className="text-xl p-8"
    >
     <AlertTitle className="font-bold">{alert.title}</AlertTitle>
     {alert.message}<br></br>
     <span dangerouslySetInnerHTML={{ __html: alert.message2 }} />
    </Alert>
   </Snackbar>
  </>
 );
}

export default RegisterForm;
