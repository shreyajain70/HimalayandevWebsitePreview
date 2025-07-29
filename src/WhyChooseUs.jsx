import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaMagic, FaCode, FaDollarSign, FaUserTie } from 'react-icons/fa';

const features = [
  {
    title: "Responsive Design",
    description: "Crafted to adapt flawlessly across all devices — from desktops to smartphones — using advanced CSS and adaptive media queries for a seamless user experience.",
    delay: 0.1,
    icon: <FaMobileAlt className="text-5xl text-sky-400 mb-4" />
  },
  {
    title: "Modern Animations",
    description: "Interactive motion effects like smooth fade-ins and subtle slide-ups breathe life into your UI, enhancing engagement without compromising performance.",
    delay: 0.3,
    icon: <FaMagic className="text-5xl text-pink-400 mb-4" />
  },
  {
    title: "Robust Tech Stack",
    description: "Powered by React, REST APIs, and secure user authentication — ensuring scalable, lightning-fast, and secure applications built for real-world growth.",
    delay: 0.5,
    icon: <FaCode className="text-5xl text-green-400 mb-4" />
  },
  {
    title: "Cost-Efficient, High-Impact Solutions",
    description: "Delivering powerful digital experiences using React, REST APIs, and secure authentication — all optimized to grow your business without breaking the bank.",
    delay: 0.7,
    icon: <FaDollarSign className="text-5xl text-yellow-400 mb-4" />
  },
  {
    title: "Client-Centric Delivery Excellence",
    description: "We prioritize your goals and user experience, ensuring top-tier performance, reliability, and satisfaction through modern tech like React and robust API integration.",
    delay: 0.9,
    icon: <FaUserTie className="text-5xl text-purple-400 mb-4" />
  }
];

const ChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-sky-400"
        >
          Why Choose Us?
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="marquee flex w-fit animate-marquee">
            {[...features, ...features].map(({ title, description, delay, icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#111827] hover:bg-[#1f2937] transition-all duration-300 text-white rounded-2xl shadow-2xl hover:shadow-sky-500/30 w-80 p-6 mx-4 my-4 flex-shrink-0 flex flex-col items-center text-center"
              >
                <div>{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Tailwind CSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ChooseUs;
