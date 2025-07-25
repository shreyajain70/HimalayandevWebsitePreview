import React from "react";
import { motion } from "framer-motion";

const aboutContent = [
  {
    title: "Who We Are",
    text: "A tribe of frontend specialists, backend engineers, UI/UX designers, and creative thinkers — we’re united by our passion for building amazing experiences. We don’t just develop — we elevate.",
    color: "sky",
    delay: 0,
  },
  {
    title: "Our Journey",
    text: "Founded in the heart of the Himalayas, we began with a mission to bring mountain-grade stability and clarity to digital products. Over time, we evolved into a team of passionate developers, designers, and dreamers.",
    color: "rose",
    delay: 0.2,
  },
  {
    title: "Our Philosophy",
    text: "We believe code is not just syntax — it’s an experience. At The Himalayan Devs, we focus on clean UI, user-first design, and scalable solutions that feel as peaceful and powerful as the mountains we’re named after.",
    color: "purple",
    delay: 0.4,
  },
  {
    title: "How We Work",
    text: "We collaborate deeply with every client, understand their needs, and build smart, elegant, and fast products. We follow agile principles, believe in clear communication, and deliver on time — every time.",
    color: "emerald",
    delay: 0.6,
  },
];

function AboutUs() {
  return (
    <div className="relative min-h-screen" id="about">
      {/* Radial Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(80,80,80,0.2),black)]"></div>
      {/* main section */}
      <section id="about" className="py-24 px-4 sm:px-8 text-white">
        <div className="max-w-6xl mx-auto space-y-20 text-center">
          {/* heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-6">
            Born in the Himalayas, Built for the World
          </h2>
          <p className="text-gray-400 text-md sm:text-lg leading-relaxed mb-12">
            We are not just developers. We are creators shaped by the serenity
            and strength of the mountains — driven to build meaningful digital
            experiences that reach beyond the clouds.
          </p>
          {/* Reusable Card Component */}

          <section
            id="about"
            className="bg-black text-white py-24 px-4 sm:px-8"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
              {aboutContent.map((item) => (
                <motion.div
                  key={item.title}
                  className={`relative w-full flex flex-col items-start justify-start rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border-2 border-${item.color}-800 hover:border-${item.color}-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-${item.color}-500 transition-all duration-500 p-6 sm:p-8 hover:scale-[1.02]`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: item.delay }}
                  viewport={{ once: true }}
                >
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-semibold font-serif tracking-wide text-${item.color}-400 mb-4 transition-colors duration-300 group-hover:text-${item.color}-300`}
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
