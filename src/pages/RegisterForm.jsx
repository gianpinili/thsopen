import { useState } from 'react';
import { Alert, Snackbar, AlertTitle } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import emailjs from 'emailjs-com';
import ShopifyPayment from '../ShopifyPayment';

function RegisterForm() {
 const [firstPlayer, setFirstPlayer] = useState('');
 const [secondPlayer, setSecondPlayer] = useState('');
 const [thirdPlayer, setThirdPlayer] = useState('');
 const [fourthPlayer, setFourthPlayer] = useState('');
 const [contactPlayerOne, setContactPlayerOne] = useState('');
 const [contactPlayerTwo, setContactPlayerTwo] = useState('');
 const [contactPlayerThree, setContactPlayerThree] = useState('');
 const [contactPlayerFour, setContactPlayerFour] = useState('');
 const [food, setFood] = useState('');
 const [alert, setAlert] = useState({ open: false, severity: '', message: '' });
 const [isPaymentInitiated, setIsPaymentInitiated] = useState(false);
 const productId = 'gid://shopify/ProductVariant/7316169883714'; // Hardcoded product ID

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!firstPlayer || !secondPlayer || !thirdPlayer || !fourthPlayer || !contactPlayerOne || !contactPlayerTwo || !contactPlayerThree || !contactPlayerFour || !food) {
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
   contactPlayerOne,
   secondPlayer,
   contactPlayerTwo,
   thirdPlayer,
   contactPlayerThree,
   fourthPlayer,
   contactPlayerFour,
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
   setContactPlayerOne('');
   setContactPlayerTwo('');
   setContactPlayerThree('');
   setContactPlayerFour('');
   setFood('');

   // Initiate the Shopify payment
   setIsPaymentInitiated(true);
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

 return (
  <>
   {isPaymentInitiated && <ShopifyPayment productId={productId} />}
   <h1 className="bg-[#1c1c1c] pt-10 font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem] text-center">
    Registration Form
   </h1>
   <div className="bg-[#1c1c1c] px-4 py-10 flex justify-center">
    <form
     className="py-14 flex flex-col gap-4 rounded-lg w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
     onSubmit={handleSubmit}
    >
     <div className="flex flex-col gap-4">
      <div className="">
       <label htmlFor="firstPlayer" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
        First Player <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="firstPlayer"
        className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
        placeholder="First Player"
        value={firstPlayer}
        onChange={(e) => setFirstPlayer(e.target.value)}
       />
      </div>
      <div className="">
       <label htmlFor="contactPlayerOne" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
        Player One Contact Email <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="contactPlayerOne"
        className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
        placeholder="Player One Contact Email"
        value={contactPlayerOne}
        onChange={(e) => setContactPlayerOne(e.target.value)}
       />
      </div>
      <div className="">
       <label htmlFor="secondPlayer" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
        Second Player <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="secondPlayer"
        className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
        placeholder="Second Player"
        value={secondPlayer}
        onChange={(e) => setSecondPlayer(e.target.value)}
       />
      </div>
      <div className="">
       <label htmlFor="contactPlayerTwo" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
        Player Two Contact Email <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="contactPlayerTwo"
        className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
        placeholder="Contact Email"
        value={contactPlayerTwo}
        onChange={(e) => setContactPlayerTwo(e.target.value)}
       />
      </div>
     </div>
     <div className="">
      <label htmlFor="thirdPlayer" className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       Third Player <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="thirdPlayer"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="Third Player"
       value={thirdPlayer}
       onChange={(e) => setThirdPlayer(e.target.value)}
      />
     </div>
     <div className="">
      <label htmlFor="contactPlayerThree" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Player Three Contact Email <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="contactPlayerThree"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="Player Three Contact Email"
       value={contactPlayerThree}
       onChange={(e) => setContactPlayerThree(e.target.value)}
      />
     </div>
     <div className="">
      <label htmlFor="fourthPlayer" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Fourth Player <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="fourthPlayer"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="Fourth Player"
       value={fourthPlayer}
       onChange={(e) => setFourthPlayer(e.target.value)}
      />
     </div>
     <div className="">
      <label htmlFor="contactPlayerFour" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">
       Player Four Contact Email <span className="text-red-500">*</span>
      </label>
      <input
       type="text"
       id="contactPlayerFour"
       className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none"
       placeholder="Player Four Contact Email"
       value={contactPlayerFour}
       onChange={(e) => setContactPlayerFour(e.target.value)}
      />
     </div>
     <div>
      <p className="md:text-[1.2rem] 2xl:text-[1.35rem]">
       Food Allergies or Preferences? <span className="text-red-500">*</span>
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
       <input type="text" id="other" className="bg-transparent border-b w-full p-2 focus:border-[#cefac6] focus:outline-none" onChange={(e) => setFood(e.target.value)} value={food} />
      </div>
     </div>
     <div className="flex justify-center">
      <button className="border border-black bg-white mt-4 text-black px-8 py-2 rounded-lg hover:text-white hover:bg-black duration-300 font-semibold">
       Submit
      </button>
     </div>
     <p className='opacity-60 italic mt-2'>* Registration is not complete until payment of $900.00 per foursome is received. An email confirmation will be sent once confirmed. *</p>
    </form>
   </div>
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
