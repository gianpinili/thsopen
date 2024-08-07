import { v4 as uuidv4 } from 'uuid';

function SponsorDescription() {
 const sponsorLevels = [
  {
   id: uuidv4(),
   level: "Bronze Sponsor",
   activation: [
    "Logo, name and website listed on THS Open website and tournament communications.",
    "No presence on the day of the tournament.",
   ],
   contribution: ["$250 Donation to CAN"],
  },
  {
   id: uuidv4(),
   level: "Silver Sponsor (6 Spots Available)",
   activation: [
    "Hole Sponsorship - activation on 1 hole during the tournament.",
    "Presence at the tournament is encouraged! Feel free to bring snacks, drinks or swag for golfers to make the tee box memorable and fun. THS staff can assist with hole activation if you're unable to staff the hole on the day of the tournament.",
    "Logo, name and website listed on THS Open website and tournament communications.",
   ],
   contribution: ["$500 Donation to CAN"],
  },
  {
   id: uuidv4(),
   level: "Gold Sponsor (5 Spots Available)",
   activation: [
    "Cart Sponsor A - name and logo on every hole A cart.",
    "Cart Sponsor B - name and logo on every hole B cart.",
    "Burger and Beer Sponsor - name and logo on every table during dinner.",
    "Scorecard Sponsor - name and logo on score keeping app during the round.",
    "Trophy Sponsor - name and logo listed on the trophy plate for winning team.",
    "All include logo, name and website listed on THS Open website and tournament communications.",
   ],
   contribution: ["$1000 Donation to CAN"],
  },
  {
   id: uuidv4(),
   level: "Title Sponsor - The Hockey Shop",
   activation: [
    "Title sponsor named in all tournament communication and signage.",
    "THS Open presented by The Hockey Shop.",
   ],
   contribution: [
    "$5000 Donation to CAN",
    "Proceeds of all THS Open Merch Sales",
    "Tee gifts.",
   ],
  },
 ];

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
    {sponsorLevels.map((sponsor) => (
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
