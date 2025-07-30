import React from 'react';
import { createRoot } from 'react-dom/client'
import AboutUs from './AboutUs';
import CursorFollower from './CursorFollower';
import { Footer } from './Footer';
import HeroSection from './HeroSection';
import OurProcess from './OurProcess';
import { Ourservices } from './OurServices';
import TechStack from './TechStack';
import { OurTeam } from './OurTeam';
import WhatWeOffer from './WhatWeOffer';
import WhyChooseUs from './WhyChooseUs';
import { ClientReview } from './ClientReview';
import { ProjectCounters } from './ProjectCounter';


function App() {
  return (
    <>
      <CursorFollower />
      <HeroSection />
      <AboutUs />
      <OurProcess />
      <Ourservices></Ourservices>
      <TechStack></TechStack>
      <WhatWeOffer></WhatWeOffer>
      <ProjectCounters></ProjectCounters>
      <ClientReview></ClientReview>
      <WhyChooseUs></WhyChooseUs>
      <OurTeam></OurTeam>
      <Footer />



    </>
  );
}


createRoot(document.getElementById('root')).render(<App></App>)
