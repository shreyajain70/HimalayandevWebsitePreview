import React from "react";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
// import heroVideo from '../assets/hero-bg.mp4'; // Uncomment if you use a local video

function HeroSection() {
  return (
    <div className="relative h-[80vh] w-full bg-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        // src={heroVideo} // Use this if importing local video
        src="/MainVideo.mp4" // Replace with your video path or url
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay grid on video */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-10"></div>
      
      {/* navbar */}
      <nav className="z-20 relative">       
          <Navbar />
      </nav>

      {/* hero line */}
      <div className="text-white min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 relative z-20">
        <div className="max-w-4xl text-center">
          {/* Subline */}
          <motion.p
            className="text-sm sm:text-lg md:text-xl font-light tracking-widest uppercase text-gray-400 font-montserrat shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Your Next Big Idea Deserves More Than Just Code —
          </motion.p>

          {/* Main line */}
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 leading-tight font-playfair drop-shadow-2xl hover:scale-105 hover:text-sky-400 transition duration-500 ease-in-out"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >

          </motion.h1>

          {/* Company name */}
          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl font-semibold  text-[#00000] mt-8 font-montserrat italic tracking-wide hover:text-sky-300 hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            🏔️ The Himalayan Devs
          </motion.h2>

          {/* Call to Action Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-6 py-3 bg-[#6c63ff] text-white text-sm sm:text-base rounded-full shadow-lg hover:bg-sky-600 transition duration-300 ease-in-out"
          >
            Let's Build Something
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
