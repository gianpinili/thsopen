import { v4 as uuidv4 } from 'uuid';
import sponsorLevels from "../data/sponsorLevels";

function SponsorDescription() {

 //add uuids to each sponsor level
 const sponsorLevel = sponsorLevels.map(sponsor => ({
  ...sponsor,
  id: uuidv4()
 }))

 function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
   element.scrollIntoView({ behavior: "smooth" });
  }
 }

 return (
  <div className="mt-24 mx-4 font-poppins py-14 md:px-14 lg:px-[6rem] xl:px-[8rem] px-4 flex flex-col items-center">
   <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-center">
    THS Open Golf Tournament Sponsorship Inquiry
   </h3>
   <p className="text-center md:px-[3rem] lg:px-[5rem] 2xl:px-[18rem] xl:text-lg">
    We thank you for your interest in sponsoring our upcoming THS Open Golf
    Tournament. Your support plays a crucial role in the success of this
    event. We offer several sponsorship packages to choose from:
   </p>
   <button
    className="bg-white text-gray-800 font-semibold py-2 px-4 rounded shadow mt-4 hover:bg-black hover:border-white border hover:text-white duration-300"
    onClick={() => scrollTo("sponsor-form")}
   >
    Sign Up Now
   </button>

   <div className="mt-[rem]">
    <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mt-8">
     Sponsor Levels
    </h3>
    {sponsorLevel.map((sponsor) => (
     <div key={sponsor.id} className="my-4 md:pl-10 flex flex-col gap-3">
      <p className="font-semibold text-lg md:text-2xl border-b border-white">
       {sponsor.level}
      </p>
      {sponsor.level !== "Title Sponsor - The Hockey Shop" && (
       <>
        <p className="underline my-2 pl-6">Activation:</p>
        <ul className="list-disc md:pl-20 px-[2rem]">
         {sponsor.activation.map((item) => (
          <li key={item}>{item}</li>
         ))}
        </ul>
       </>
      )}
      <p className="underline my-2 pl-6">Contribution:</p>
      <ul className="list-disc md:pl-20 px-[2rem]">
       {sponsor.contribution.map((item) => (
        <li key={item}>{item}</li>
       ))}
      </ul>
     </div>
    ))}
    <p className="mt-10 italic">
     * All sponsors will be acknowledged on social media and tournament day
     signage.
    </p>
   </div>
  </div>
 );
}

export default SponsorDescription;
