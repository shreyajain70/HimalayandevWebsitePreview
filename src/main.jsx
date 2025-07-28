import React from 'react';
import { createRoot } from 'react-dom/client'
import AboutUs from './AboutUs';
import CursorFollower from './CursorFollower';
import { Footer } from './Footer';
import HeroSection from './HeroSection';
import OurProcess from './OurProcess';
import { Ourservices } from './OurServices';
import TechStack from './TechStack';
import OurTeam from './OurTeam';
import OurPrice from './OurPrice';


function App() {
  return (
    <>
      <CursorFollower />
      <HeroSection />
      <AboutUs />
      <OurProcess />
   <Ourservices></Ourservices>
      <TechStack></TechStack>
      <OurPrice></OurPrice>
      <OurTeam></OurTeam>
      <Footer />



    </>
  );
}


createRoot(document.getElementById('root')).render(<App></App>)
