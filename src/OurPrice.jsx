import React from "react";

const pricingData = [
  // 5 standalone pricing items
  {
    title: "Personal Portfolio Creation",
    description: "A website to present your profile, work, and contact details.",
    price: "Starting from ₹5,999 (Negotiable)"
  },
  {
    title: "Figma Design",
    description: "Design mockups for websites or apps using Figma.",
    price: "Starting from ₹3,999 (Negotiable)"
  },
  {
    title: "Custom Website",
    description: "Fully tailored frontend and backend website solution.",
    price: "Starting from ₹49,999 (Negotiable)"
  },
  {
    title: "Mobile App UI/UX Design",
    description: "Modern design layouts for Android/iOS apps using Figma.",
    price: "Starting from ₹69,999 (Negotiable)"
  },

  // 3 two-part pricing cards
  {
    dual: true,
    parts: [
      {
        title: "Landing Page (Local Hosting)",
        description: "Simple page hosted locally for demos or testing.",
        price: "Starting from ₹13,999 (Negotiable)"
      },
      {
        title: "Landing Page (Domain & Hosting)",
        description: "Live landing page accessible via your own domain.",
        price: "Starting from ₹19,999 (Negotiable)"
      }
    ]
  },
  {
    dual: true,
    parts: [
      {
        title: "Custom Website (Local Hosting)",
        description: "Website with 4–5 sections for local presentation.",
        price: "Starting from ₹21,999 (Negotiable)"
      },
      {
        title: "Custom Website (Domain & Hosting)",
        description: "Public-facing website with 4–5 sections live online.",
        price: "Starting from ₹29,999 (Negotiable)"
      }
    ]
  },
  {
    dual: true,
    parts: [
      {
        title: "Poster Design (Graphic)",
        description: "Static graphic poster for digital or print use.",
        price: "Starting from ₹999 (Negotiable)"
      },
      {
        title: "Video Design (Graphic)",
        description: "Short animated or edited videos for promotions.",
        price: "Starting from ₹1,499 (Negotiable)"
      }
    ]
  }
];

const OurPrice = () => {
  return (
    <div className="our-price-container">
      <h1 className="our-price-heading">Our Pricing</h1>
      <div className="price-cards-wrapper">
        {pricingData.map((item, index) =>
          item.dual ? (
            <div className="price-card dual-card" key={index}>
              {item.parts.map((part, i) => (
                <div className="dual-part" key={i}>
                  <h2 className="price-title">{part.title}</h2>
                  <p className="price-description">{part.description}</p>
                  <p className="price-amount">{part.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="price-card" key={index}>
              <h2 className="price-title">{item.title}</h2>
              <p className="price-description">{item.description}</p>
              <p className="price-amount">{item.price}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OurPrice;
