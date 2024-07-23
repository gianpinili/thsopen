import SponsorDescription from "../components/SponsorDescription"

function SponsorForm() {
 return (
  <>
   <SponsorDescription />
   <h1 className="bg-[#1c1c1c] pt-10 font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem] text-center">Sponsorship Form</h1>
   <div className="bg-[#1c1c1c] px-4 py-10 flex justify-center">
    <form action="" className="border py-14 px-[1rem] md:px-[3rem] flex flex-col gap-4 rounded-lg" >
     {/* first and last name */}
     <div className="flex flex-col gap-4">
      <div className="">
       <label htmlFor="firstName">First Name</label>
       <input type="text" id="firstName" className="bg-transparent border rounded-md w-full" />
      </div>
      <div className="">
       <label htmlFor="lastName" >Last Name</label>
       <input type="text" id="lastName" className="bg-transparent border rounded-md w-full" />
      </div>
     </div>
     {/* email */}
     <div className="">
      <label htmlFor="email" className="">Email</label>
      <input type="email" id="email" className="bg-transparent border rounded-md w-full" />
     </div>
     {/* number */}
     <div className="">
      <label htmlFor="number" className="w-1/3">Phone Number</label>
      <input type="text" id="number" className="bg-transparent border rounded-md w-full" />
     </div>
     {/* company */}
     <div className="">
      <label htmlFor="companyName" className="w-1/3">Company Name</label>
      <input type="text" id="companyName" className="bg-transparent border rounded-md w-full" />
     </div>
     {/* sponsorship package checkboxes */}
     <div className="flex flex-col gap-1">
      <p>What type of Sponsorship Package are you interested in?</p>
      <div className="flex gap-1">
       <input type="checkbox" /><label htmlFor="">Bronze Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input type="checkbox" /><label htmlFor="">Silver Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input type="checkbox" /><label htmlFor="">Gold Sponsor</label>
      </div>
      <div className="flex gap-1">
       <input type="checkbox" /><label htmlFor="">Title Sponsor</label>
      </div>
     </div>
     {/* question for client */}
     <div>
      <p>Best way for us to contact you?</p>
      <div className="flex gap-1">
       <input type="radio" /><label htmlFor="">Email</label>
      </div>
      <div className="flex gap-1">
       <input type="radio" /><label htmlFor="">Phone</label>
      </div>
     </div>
     <div className="flex justify-center">
      <button className="border border-black bg-white text-black px-8 py-2 rounded-lg hover:text-white hover:bg-black duration-300  font-semibold">Submit</button>
     </div>
    </form >
   </div>
  </>
 )
}

export default SponsorForm