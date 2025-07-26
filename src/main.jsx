import React from 'react';
import { createRoot } from 'react-dom/client'
import AboutUs from './AboutUs';
import CursorFollower from './CursorFollower';
import { Footer } from './Footer';
import HeroSection from './HeroSection';
import OurProcess from './OurProcess';
import { OurSpecializations } from './Ourspecialization';
import { TechStack } from './TechStack';
import OurTeam from './OurTeam';
import OurPrice from './OurPrice';


function App() {
  return (
    <>
      <CursorFollower />
      <HeroSection />
      <AboutUs />
      <OurProcess />
      <OurSpecializations></OurSpecializations>
      <TechStack></TechStack>
      <OurPrice></OurPrice>
      <OurTeam></OurTeam>
      <Footer />



    </>
  );
}


createRoot(document.getElementById('root')).render(<App></App>)
