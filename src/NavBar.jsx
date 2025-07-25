import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/ynWFqg0r/Himalayan-Dev-logo.png"
            alt="The Himalayan Devs"
            className="h-12 w-auto object-contain"
          />
          {/* If you only want the image, remove the line below */}
          <span className="text-xl font-bold tracking-wide hidden sm:block">The Himalayan Devs</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-light tracking-wide">
          <li>
            <a href="#about" className="hover:text-sky-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-sky-400 transition duration-300">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition duration-300">Contact</a>
          </li>
           <li>
            <a href="#vision" className="hover:text-sky-400 transition">Vision</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="md:hidden  flex flex-col items-center bg-slate-800 py-4 space-y-3">
          <li>
            <a href="#about" className="hover:text-sky-400 transition">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-sky-400 transition">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          </li>
           <li>
            <a href="#vision" className="hover:text-sky-400 transition">Vision</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
