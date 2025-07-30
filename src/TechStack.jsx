import React, { useEffect, useRef, useState } from "react";

const techStackData = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "BootStrap", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYblUcIW4H3tPxRrLVOCKstsEWPUveoaPk1w&s" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const intervalId = setInterval(() => {
      setRotationY((prev) => prev + 0.4);
    }, 30);
    return () => clearInterval(intervalId);
  }, [visible]);

  const numItems = techStackData.length;
  const radius = 350;

  return (
    <div className="main-card-container">
      <div className="main-techcontainer">
        <div
          ref={sectionRef}
          className={`Techstack-container${visible ? " visible" : ""}`}
          style={{ perspective: "1200px", height: "500px" }}
        >
          <h2 className="TechStack-heading">Tech Stack</h2>
          <div
            ref={carouselRef}
            className="tech-carousel"
            style={{
              position: "relative",
              width: "700px",
              height: "500px",
              transformStyle: "preserve-3d",
              transform: `translateZ(-${radius}px) rotateY(${rotationY}deg)`,
              transition: "transform 0.1s linear",
              margin: "auto",
            }}
          >
            {techStackData.map((tech, i) => {
              const angle = (360 / numItems) * i;
              const transform = `
                rotateY(${angle}deg)
                translateZ(${radius}px)
              `;
              return (
                <div key={tech.name} className="tech-card" style={{ transform }}>
                  <img src={tech.logo} alt={tech.name} className="tech-icon" />
                  <span className="tech-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
