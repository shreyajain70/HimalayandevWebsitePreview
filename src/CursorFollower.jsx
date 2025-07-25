import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const gradients = [
  "bg-gradient-to-br from-yellow-400 via-emerald-400 to-sky-400",
  "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-br from-purple-500 via-blue-400 to-green-300",
  "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500",
];

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gradientIndex, setGradientIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let lastMoveTime = Date.now();

    const handleMouseMove = (e) => {
      const now = Date.now();
      const delta = now - lastMoveTime;

      // Change gradient every 200ms of movement
      if (delta > 200) {
        setGradientIndex((prev) => (prev + 1) % gradients.length);
        lastMoveTime = now;
      }

      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer dynamic color ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: position.x - 30, y: position.y - 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className={`w-16 h-16 rounded-full opacity-70 shadow-xl animate-pulse ${gradients[gradientIndex]}`}
        />
      </motion.div>

      {/* Inner glowing dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: position.x - 6, y: position.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_20px_rgba(255,215,0,0.8)]" />
      </motion.div>
    </>
  );
}
