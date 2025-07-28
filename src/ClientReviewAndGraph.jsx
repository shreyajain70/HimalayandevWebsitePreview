import React, { useEffect, useState } from "react";


export const ClientReviewAndGraph = () => {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projectData = [
    { title: "Portfolio", percent: 90 },
    { title: "Landing Page", percent: 85 },
    { title: "Website", percent: 80 },
    { title: "Figma Design", percent: 75 },
    { title: "App Development", percent: 70 },
    { title: "Graphic Designing", percent: 65 },
  ];

  const clients = [
    {
      name: "Ananya Mehra",
      feedback: "Brilliant work with modern UI/UX. Highly professional.",
    },
    {
      name: "Ravi Sharma",
      feedback: "Top-notch development and seamless experience.",
    },
    {
      name: "Sneha Patil",
      feedback: "Loved the design and delivery speed. Highly recommend!",
    },
  ];

  return (
    <div className="main-wrapper">
      {/* Left Section: Client Reviews */}
      <div className="client-section slide-in-left">
        <h2 className="section-title">✨ What Clients Say</h2>
        <div className="client-cards">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <h3>{client.name}</h3>
              <p>{client.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Project Graph */}
      <div className="graph-section slide-in-right">
        <h2 className="section-title">📊 Projects Completed</h2>
        <div className="bar-chart">
          {projectData.map((project, index) => (
            <div className="bar-item" key={index}>
              <div className="bar-label">{project.title}</div>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{
                    width: animateBars ? `${project.percent}%` : "0%",
                    transitionDelay: `${index * 0.15}s`,
                  }}
                ></div>
              </div>
              <span className="bar-percent">{project.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
