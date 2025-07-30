import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import AboutUs from "./AboutUs";
import CursorFollower from "./CursorFollower";
import { Footer } from "./Footer";
import HeroSection from "./HeroSection";
import OurProcess from "./OurProcess";
import { Ourservices } from "./OurServices";
import TechStack from "./TechStack";
import { OurTeam } from "./OurTeam";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";
import { ClientReview } from "./ClientReview";
import { ProjectCounters } from "./ProjectCounter";
import { ContactUsPage } from "./ContactUsPage";

function App() {
  const [showContactPage, setShowContactPage] = useState(false);

  const openContactPage = () => setShowContactPage(true);
  const closeContactPage = () => setShowContactPage(false);

  return (
    <>
      <CursorFollower />
      {showContactPage ? (
        // ONLY contact page shown, Footer and others hidden
        <ContactUsPage onBack={closeContactPage} />
      ) : (
        <>
          {/* Main homepage components */}
          <HeroSection />
          <AboutUs />
          <OurProcess />
          <Ourservices />
          <TechStack />
          <WhatWeOffer />
          <ProjectCounters />
          <ClientReview />
          <WhyChooseUs />
          <OurTeam />
          {/* Footer with contact click handler */}
          <Footer onContactClick={openContactPage} />
        </>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
