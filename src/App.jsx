import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import EventsList from './pages/EventsList';
import Open2024 from './pages/Open2024';
import MerchPage from './pages/MerchPage';
import SponsorPage from './pages/SponsorPage';
import SponsorFormPage from './pages/SponsorFormPage';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [navTextColor, setNavTextColor] = useState('text-white');
  const [logoSrc, setLogoSrc] = useState('./assets/thsopenlogo.png');

  return (
    <BrowserRouter>
      <Nav textColor={navTextColor} logoSrc={logoSrc} />
      <Routes>
        <Route path="/" element={<Home setNavTextColor={setNavTextColor} setLogoSrc={setLogoSrc} />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/thsopen2024" element={<Open2024 />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/sponsorship" element={<SponsorPage />} />
        <Route path="/sponsor-form" element={<SponsorFormPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home setNavTextColor={setNavTextColor} setLogoSrc={setLogoSrc} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
