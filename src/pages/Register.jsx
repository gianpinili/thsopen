import { useState, useEffect } from "react";
import RegisterHero from "../components/RegisterHero";
import PriceInfo from "../components/PriceInfo";
import GroupRegisterForm from "../components/GroupRegisterForm";
import SingleRegisterForm from "../components/SingleRegisterForm";
import { Helmet } from "react-helmet";

function Register() {
 // State to track which form is active
 const [isGroupRegistration, setIsGroupRegistration] = useState(true);

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
   element.scrollIntoView({ behavior: 'smooth' });
  }
 };

 const handleFormToggle = (isGroup) => {
  setIsGroupRegistration(isGroup);
 };

 return (
  <>
   <Helmet>
    <title>Register | THS Open</title>
    <meta name="description" content="Register for the THS Open." />
   </Helmet>
   <RegisterHero />
   <div className="mt-[5rem] font-spacemono flex flex-col md:flex-row mx-[1rem] gap-12 mb-12 sm:mx-[2rem] md:gap-4 lg:mx-[3rem] lg:gap-8 2xl:mx-[5rem]">
    <div className="flex flex-col gap-12 md:gap-[5rem] items-start md:w-1/2 md:pl-[1rem] lg:pl-[3rem]">
     <h1 className="font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem]">Register Your Team</h1>
     <div>
      <p>THS Open 2025 - July 3rd, 2025</p>
      <p>Redwoods Golf Course</p>
     </div>
     <button className="border px-14 py-2 rounded-md bg-white hover:bg-transparent hover:text-white text-black duration-300 cursor-pointer" onClick={() => scrollTo('register')}>Register Today</button>
    </div>
    <div className="flex flex-col gap-6 md:w-1/2 md:pr-[1rem] lg:text-[1.25rem] xl:text-[1.3rem]">
     <p><span className="font-bold">Format:</span> Texas Scramble</p>
     <p>Each player in the four-person scramble hits a drive. The team chooses the best drive and selects that position for the next shot. Each player hits from the chosen spot, and the process continues until someone from the team sinks a putt. The group records its score for the hole and moves on to the next teeing ground.</p>
     <p>Minimum of 3 drives per player must be used.</p>
     <div>
      <p className="font-bold">$1000 - Foursome</p>
      <p className="font-bold">$250 - Single</p>
     </div>
    </div>
   </div>
   <PriceInfo />
   <div id="register">
    <div className="bg-[#1c1c1c] flex justify-center gap-4 py-4">
     <button
      className={`py-2 px-4 ${isGroupRegistration ? 'bg-white text-black' : 'bg-transparent text-white'} hover:bg-white rounded-md hover:text-black duration-300`}
      onClick={() => handleFormToggle(true)}
     >
      Group Registration
     </button>
     <button
      className={`py-2 px-4 ${!isGroupRegistration ? 'bg-white text-black' : 'bg-transparent text-white'} hover:bg-white rounded-md hover:text-black duration-300`}
      onClick={() => handleFormToggle(false)}
     >
      Single Registration
     </button>
    </div>
    {/* Conditionally render the forms */}
    {isGroupRegistration ? <GroupRegisterForm /> : <SingleRegisterForm />}
   </div>
  </>
 );
}

export default Register;
