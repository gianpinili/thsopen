import SponsorDescription from "../components/SponsorDescription"

function SponsorForm() {
 return (
  <>
   <SponsorDescription />
   <h1 className="bg-[#1c1c1c] pt-10 font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem] text-center">Sponsorship Form</h1>
   <div className="bg-[#1c1c1c] px-4 py-10 flex justify-center">
    <form action="" className=" py-14 flex flex-col gap-4 rounded-lg" >
     {/* first and last name */}
     <div className="flex flex-col gap-4">
      <div className="">
       <label htmlFor="firstName" className="md:text-[1.2rem] 2xl:text-[1.35rem]">First Name</label>
       <input type="text" id="firstName" className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none" placeholder="First" />
      </div>
      <div className="">
       <label htmlFor="lastName" className="md:text-[1.2rem] 2xl:text-[1.35rem]" >Last Name</label>
       <input type="text" id="lastName" className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none" placeholder="Last" />
      </div>
     </div>
     {/* email */}
     <div className="">
      <label htmlFor="email" className="md:text-[1.2rem] 2xl:text-[1.35rem]">Email</label>
      <input type="email" id="email" className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none" placeholder="example@company.com" />
     </div>
     {/* number */}
     <div className="">
      <label htmlFor="number" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">Phone Number</label>
      <input type="text" id="number" className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none" placeholder="Phone #" />
     </div>
     {/* company */}
     <div className="">
      <label htmlFor="companyName" className="w-1/3 md:text-[1.2rem] 2xl:text-[1.35rem]">Company Name</label>
      <input type="text" id="companyName" className="bg-transparent border rounded-md w-full p-2 focus:border-[#cefac6] focus:outline-none" placeholder="Company Name" />
     </div>
     {/* sponsorship package checkboxes */}
     <div className="flex flex-col gap-1">
      <p className="md:text-[1.2rem] 2xl:text-[1.35rem]">What type of Sponsorship Package are you interested in?</p>
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
      <p className="md:text-[1.2rem] 2xl:text-[1.35rem]">Best way for us to contact you?</p>
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