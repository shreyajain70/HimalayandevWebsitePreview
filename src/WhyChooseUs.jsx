import React from "react";


const features = [
  {
    title: "Responsive Design",
    description: "Your site looks perfect on any device, thanks to robust CSS and media queries.",
    delay: "0.1s",
  },
  {
    title: "Modern Animations",
    description: "Smooth fade-ins, slide-ups, and lively interactions keep your visitors engaged.",
    delay: "0.3s",
  },
  {
    title: "Strong Tech Stack",
    description: "React, REST APIs, and secure user authentication for performance and growth.",
    delay: "0.5s",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="fade-in">Why Choose Us</h2>
      <div className="features-container">
        {features.map(({ title, description, delay }, index) => (
          <div
            className="feature slide-up"
            style={{ animationDelay: delay }}
            key={index}
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
