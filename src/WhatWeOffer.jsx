import React from "react";

// Icon mapping for sections and features
const iconMap = {
  "Personal Portfolio Creation": "💼",
  "Figma Design": "🎨",
  "Custom Website": "🌐",
  "Mobile App UI/UX Design": "📱",
  "Landing Page Services": "🚩",
  "Custom Website Packages": "🛠️",
  "Graphic Design Solutions": "🖼️",
  "Landing Page (Local Hosting)": "🖥️",
  "Landing Page (Domain & Hosting)": "🌍",
  "Custom Website (Local Hosting)": "🧩",
  "Custom Website (Domain & Hosting)": "🔗",
  "Poster Design (Graphic)": "📰",
  "Video Design (Graphic)": "🎬",
};

const pricingData = [
  {
    title: "Custom Website",
    description:
      "We build fully customized websites from the ground up — including both the design (frontend) and the functionality (backend). Ideal for businesses or individuals who want a unique, professional, and fully functional online platform.",
  },
  {
    title: "Mobile App UI/UX Design",
    description:
      "We design intuitive and visually appealing mobile app interfaces for Android and iOS. Our focus is on delivering smooth, user-friendly experiences that look great and function seamlessly.",
  },
  {
    title: "Personal Portfolio Creation",
    description:
      "We create a personalized portfolio website that showcases your skills, projects, and contact details in a modern and engaging way — perfect for freelancers, professionals, and creatives looking to build a strong online presence.",
  },
  {
    title: "Figma Design",
    description:
      "We design high-quality visual layouts for websites and apps using Figma. These mockups give you a clear, interactive preview of your project’s look and feel — before any coding begins.",
  },
  
  {
    dual: true,
    dualTitle: "Landing Page Services",
    parts: [
      {
        title: "Landing Page (Local Hosting)",
        description:
          "A simple, one-page website hosted on your local system — ideal for previews, presentations, or internal testing before going live.",
      },
      {
        title: "Landing Page (Domain & Hosting)",
        description:
          "A fully functional landing page published online with your own domain name — perfect for capturing leads or showcasing services publicly.",
      },
    ],
  },
  {
    dual: true,
    dualTitle: "Custom Website Packages",
    parts: [
      {
        title: "Custom Website (Local Hosting)",
        description:
          "A 4-5 section website designed for demonstration or offline use — great for showcasing layout and functionality before deployment.",
      },
      {
        title: "Custom Website (Domain & Hosting)",
        description:
          "A complete, multi-section website made live on your custom domain — tailored to your needs and accessible to everyone online.",
      },
    ],
  },
  {
    dual: true,
    dualTitle: "Graphic Design Solutions",
    parts: [
      {
        title: "Poster Design (Graphic)",
        description:
          "A professionally designed static poster — suitable for online sharing or high-quality printing for events, promotions, or branding.",
      },
      {
        title: "Video Design (Graphic)",
        description:
          "Engaging short videos — animated or edited — perfect for marketing, social media promotion, or brand storytelling.",
      },
    ],
  },
];

const WhatWeOffer = () => {
  return (
    <>
      <style>{`
        .our-price-container {
          background: #000;
          min-height: 100vh;
          padding: 40px 20px;
          color: #e1e8f7;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .our-price-heading {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: #349aff;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          user-select: none;
          text-align: center;
          text-shadow: 0 0 14px #3e72e1cc, 0 0 1px #4784ed;
        }
        .heading-ico {
          font-size: 2.2rem;
          filter: drop-shadow(0 0 10px #349affaa);
        }
        .timeline {
          position: relative;
          max-width: 700px;
          width: 100%;
          padding-left: 40px;
          border-left: 4px solid #349aff;
          box-sizing: border-box;
        }
        .timeline::before {
          content: "🚀";
          position: absolute;
          left: -32px;
          top: -20px;
          font-size: 40px;
          color: #4784ed;
          animation: rocket-glow 2.5s infinite alternate ease-in-out;
          text-shadow: 0 0 12px #349affcc;
        }
        @keyframes rocket-glow {
          from { text-shadow: 0 0 8px #60b7ffcc, 0 0 16px #4784edaa;}
          to { text-shadow: 0 0 30px #349aff, 0 0 20px #60b7ff; }
        }
        .event {
          position: relative;
          margin-bottom: 40px;
          cursor: default;
          transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow .3s;
        }
        .event:hover {
          transform: translateX(10px) scale(1.03);
          filter: drop-shadow(0 0 16px #349aff88);
        }
        /* Event marker */
        .event::before {
          content: "";
          position: absolute;
          left: -52px;
          top: 8px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg,#4784ed 60%,#60b7ff 100%);
          border-radius: 50%;
          box-shadow: 0 0 14px #349aff88, inset 0 0 12px #4784edde;
          transition: box-shadow 0.3s;
          z-index: 2;
        }
        .event:hover::before {
          box-shadow: 0 0 30px #349aff, inset 0 0 18px #4784ed;
        }
        .event .title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #349aff;
          margin-bottom: 10px;
          user-select: text;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .event .description {
          font-size: 1rem;
          color: #d1d9e6;
          line-height: 1.6;
          user-select: text;
        }
        /* Dual events styling [Enhanced & restructured] */
        .dual-event {
          background: rgba(26,40,63,0.91);
          border-radius: 18px;
          padding: 24px 25px 20px 25px;
          box-shadow: 0 3px 19px 0 rgba(52,154,255,0.16);
          margin-top: 18px;
          color: #f7f9fc;
          border: 1.5px solid #203459;
          display: flex;
          flex-direction: column;
          gap: 10px; /* space between heading and parts */
        }
        .dual-event-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: #60b7ff;
          margin-bottom: 16px;
          user-select: text;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-shadow: 0 0 5px #349aff44;
        }
        .dual-parts-row {
          display: flex;
          gap: 24px;
          width: 100%;
        }
        .dual-part {
          flex: 1;
          background: linear-gradient(125deg, #212d49 80%, #4784ed11 100%);
          border-radius: 12px;
          padding: 15px 21px;
          box-shadow: 0 0 0.5px #4784ed33, inset 0 0 20px #34547244;
          cursor: default;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: filter 0.2s, box-shadow 0.2s;
          border: 1.5px solid #29385088;
        }
        .dual-part:not(:last-child) {
          border-right: 4px solid #4784ed29;
        }
        .dual-part:hover {
          filter: drop-shadow(0 0 24px #349aff88) brightness(1.10);
        }
        .dual-part .title {
          font-size: 1.08rem;
          font-weight: 650;
          color: #349aff;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 7px;
          user-select: text;
        }
        .dual-part .description {
          font-size: 0.97rem;
          line-height: 1.4;
          color: #d3dae8;
          user-select: text;
          flex-grow: 1;
        }
        /* Price styling for single and dual parts (if used) */
        .price-amount {
          margin-top: 10px;
          font-weight: 700;
          color: #74c5fa;
          font-size: 1.05rem;
          user-select: text;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .timeline { padding-left: 30px; }
          .event::before { left: -40px; width: 16px; height: 16px; top: 10px; }
          .timeline::before { left: -28px; font-size: 32px; top: -16px; }
          .dual-parts-row { flex-direction: column; gap: 16px; }
        }
        @media (max-width: 480px) {
          .our-price-heading { font-size: 2rem; margin-bottom: 28px; }
          .dual-event { padding: 11px 10px 13px 10px; }
          .dual-part { padding: 9px 8px; }
        }
      `}</style>

      <div className="our-price-container">
        <h1 className="our-price-heading">
          <span className="heading-ico">🧊</span>
          What We Offer - Modern, Clear, &amp; Valued
        </h1>
        <div className="timeline">
          {pricingData.map((item, index) =>
            item.dual ? (
              <div className="event" key={index}>
                <div className="dual-event">
                  <h3 className="dual-event-title">
                    {iconMap[item.dualTitle] || "💡"} {item.dualTitle}
                  </h3>
                  <div className="dual-parts-row">
                    {item.parts.map((part, i) => (
                      <div className="dual-part" key={i}>
                        <div className="title">
                          <span>{iconMap[part.title] || "🔹"}</span>
                          {part.title}
                        </div>
                        <div className="description">{part.description}</div>
                        {part.price && (
                          <div className="price-amount">{part.price}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="event" key={index}>
                <div className="title">
                  <span>{iconMap[item.title] || "💡"}</span>
                  {item.title}
                </div>
                <div className="description">{item.description}</div>
                {item.price && (
                  <div className="price-amount">{item.price}</div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
