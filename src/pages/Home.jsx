import Hero from "../components/Hero";
import Merch from "../components/Merch";
import Sponsor from "../components/Sponsor";
import Donation from "../components/Donation";

import Events from '../components/Events';

function Home() {
 return (
  <>
   <div>
    <Hero />
    <Events />
    <Sponsor />
    <Merch />
    <Donation />
   </div>
  </>
 )
}

export default Home