import Hero from "../components/Hero";
import Merch from "../components/Merch";
import Sponsor from "../components/Sponsor";
import Donation from "../components/Donation";
import Haus from "../components/HausOfGolf";

import Events from '../components/Events';

function Home() {
 return (
  <>
   <div>
    <Hero />
    <Events />
    <Sponsor />
    <Haus />
    <Merch />
    <Donation />
   </div>
  </>
 )
}

export default Home