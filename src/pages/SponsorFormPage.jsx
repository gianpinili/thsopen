import SponsorDescription from "../components/SponsorDescription"
import SponsorForm from "../components/SponsorForm"

function SponsorFormPage() {

 //scroll to top on mount
 window.scrollTo(0, 0);

 return (
  <>
   <SponsorDescription />
   <SponsorForm />
  </>
 )
}

export default SponsorFormPage