import React from "react";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      {/* Navbar */}
      <nav className="hero-navbar">
        <Navbar />
      </nav>

      {/* Video Background and Overlay */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/MainVideo.mp4"
          className="hero-video"
        />
        <div className="hero-overlay-grid"></div>

        {/* Hero text centered over video */}
        <div className="hero-text-container">
          <div className="hero-text-inner">
            <motion.p
              className="hero-subline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Your subline text here */}
            </motion.p>

            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              {/* Add your headline here */}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Himalyan Devs text moves here, above button */}
      <motion.h2
        className="hero-company-name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        🏔️ The Himalayan Devs
      </motion.h2>

      {/* Button below the video */}
      <div className="hero-button-container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hero-cta-button"
        >
          Let's Build Something
        </motion.button>
      </div>
    </div>
  );
}

export default HeroSection;
