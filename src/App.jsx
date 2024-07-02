import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import EventsList from './pages/EventsList.jsx'
import Open2024 from './pages/Open2024.jsx'
// import MerchList from './pages/MerchList.jsx'
import SponsorForm from './pages/SponsorForm.jsx'
import Register from './pages/Register.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/thsopen2024" element={<Open2024 />} />
          {/* <Route path="/merch" element={<MerchList />} /> */}
          <Route path="/sponsorship" element={<SponsorForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
