import RegisterHero from "../components/RegisterHero"
import { useEffect } from "react"

function Register() {

 useEffect(() => {
  window.scrollTo(0, 0);
 })

 return (
  <>
   <RegisterHero />
   <div className="mt-[5rem] font-spacemono flex flex-col md:flex-row mx-[1rem] gap-12 mb-12 sm:mx-[2rem] md:gap-4 lg:mx-[3rem] lg:gap-8 2xl:mx-[5rem]">
    <div className="flex flex-col gap-12 md:gap-[5rem] items-start md:w-1/2 md:pl-[1rem] lg:pl-[3rem]">
     <h1 className="font-poppins font-extrabold tracking-tight text-4xl sm:text-[2.5rem] uppercase md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[3.5rem] 2xl:leading-[3rem]">Register Your Team</h1>
     <div>
      <p>THS Open 2024 - Sep. 16</p>
      <p>Newlands Golf & Country Club [Championship Course]</p>
     </div>
     <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXnnFZA88NFBH-Fg546B_edYD9xTRObjKpZX3C82Igq5Ls4A/viewform?vc=0&c=0&w=1&flr=0" target="_blank" className="border px-14 py-2 rounded-md bg-white hover:bg-transparent hover:text-white text-black duration-300">Register Today</a>
     {/* <p className="border px-6 py-2 rounded-md hover:bg-white hover:text-black duration-300">Registration: August 10, 2024</p> */}
    </div>
    <div className="flex flex-col gap-6 md:w-1/2 md:pr-[1rem] lg:text-[1.25rem] xl:text-[1.3rem]">
     <p><span className="font-bold">Format:</span> Texas Scramble</p>
     <p>Each player in the four-person scramble hits a drive. The team chooses the best drive and selects that position for the next shot. Each player hits from the chosen spot, and the process continues until someone from the team sinks a putt. THe group records its score for the hole and moves on to the next teeing ground.</p>
     <p>Minimum of 3 drives per player must be used.</p>
     <p className="font-bold">$900 - Foursome</p>
    </div>
   </div>
  </>
 )
}

export default Register