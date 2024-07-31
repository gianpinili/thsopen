import SponsorDescription from "../components/SponsorDescription"
import SponsorForm from "../components/SponsorForm"
import { Helmet } from 'react-helmet';

function SponsorFormPage() {

 //scroll to top on mount
 window.scrollTo(0, 0);


 return (
  <>
   <Helmet>
    <title>Sponsor | THS Open</title>
    <meta name="description" content="Sponsorship sign up form for THS Open." />
   </Helmet>
   <SponsorDescription />
   <div id="sponsor-form">
    <SponsorForm />
   </div>
  </>
 )
}

export default SponsorFormPage