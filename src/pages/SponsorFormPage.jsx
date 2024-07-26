import SponsorDescription from "../components/SponsorDescription"
import SponsorForm from "../components/SponsorForm"

function SponsorFormPage() {

 //scroll to top on mount
 window.scrollTo(0, 0);


 return (
  <>

   <SponsorDescription />
   <div id="sponsor-form">
    <SponsorForm />
   </div>
  </>
 )
}

export default SponsorFormPage