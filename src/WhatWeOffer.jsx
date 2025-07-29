import React from "react";

// You can use react-icons or SVGs; here's a solution with emojis for universal rendering.
// For production, consider installing react-icons and importing icons as needed.

const pricingData = [
  {
    title: "Personal Portfolio Creation",
    icon: "🧑‍💻",
    description:
      "We create a personalized portfolio website that showcases your skills, projects, and contact details in a modern and engaging way — perfect for freelancers, professionals, and creatives looking to build a strong online presence.",
  },
  {
    title: "Figma Design",
    icon: "🎨",
    description:
      "We design high-quality visual layouts for websites and apps using Figma. These mockups give you a clear, interactive preview of your project’s look and feel — before any coding begins.",
  },
  {
    title: "Custom Website",
    icon: "🌐",
    description:
      "We build fully customized websites from the ground up — including both the design (frontend) and the functionality (backend). Ideal for businesses or individuals who want a unique, professional, and fully functional online platform.",
  },
  {
    title: "Mobile App UI/UX Design",
    icon: "📱",
    description:
      "We design intuitive and visually appealing mobile app interfaces for Android and iOS. Our focus is on delivering smooth, user-friendly experiences that look great and function seamlessly.",
  },
  {
    dual: true,
    dualTitle: "Landing Page Services",
    icon: "🚀",
    parts: [
      {
        title: "Landing Page (Local Hosting)",
        icon: "💻",
        description:
          "A simple, one-page website hosted on your local system — ideal for previews, presentations, or internal testing before going live.",
      },
      {
        title: "Landing Page (Domain & Hosting)",
        icon: "🌍",
        description:
          "A fully functional landing page published online with your own domain name — perfect for capturing leads or showcasing services publicly.",
      },
    ],
  },
  {
    dual: true,
    dualTitle: "Custom Website Packages",
    icon: "📦",
    parts: [
      {
        title: "Custom Website (Local Hosting)",
        icon: "🖥️",
        description:
          "A 4-5 section website designed for demonstration or offline use — great for showcasing layout and functionality before deployment.",
      },
      {
        title: "Custom Website (Domain & Hosting)",
        icon: "🌎",
        description:
          "A complete, multi-section website made live on your custom domain — tailored to your needs and accessible to everyone online.",
      },
    ],
  },
  {
    dual: true,
    dualTitle: "Graphic Design Solutions",
    icon: "🖌️",
    parts: [
      {
        title: "Poster Design (Graphic)",
        icon: "🖼️",
        description:
          "A professionally designed static poster — suitable for online sharing or high-quality printing for events, promotions, or branding.",
      },
      {
        title: "Video Design (Graphic)",
        icon: "🎬",
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
          background-color: #000000;
          min-height: 100vh;
          padding: 40px 20px;
          font-family: 'Fira Code', 'Courier New', Courier, monospace;
          color: #d4d4d4;
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: text;
        }
        .our-price-heading {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #61dafb;
          text-shadow: 0 0 8px #61dafbaa;
          user-select: text;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-family: 'Fira Code', monospace;
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .offer-main-icon {
          font-size: 2.3rem;
          vertical-align: middle;
        }
        .price-cards-wrapper {
          background-color: #111111;
          border-radius: 12px;
          width: 96vw;
          max-width: 960px;
          box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.9);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          user-select: text;
          font-size: 1rem;
        }
        .editor-top-bar {
          background: #1a1a2a;
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          gap: 12px;
          border-bottom: 1.5px solid #333355;
          user-select: none;
        }
        .control-btn {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          box-shadow: inset 0 0 2px #00000090;
          display: inline-block;
        }
        .close-btn {
          background-color: #ff5f56;
        }
        .minimize-btn {
          background-color: #ffbd2e;
        }
        .zoom-btn {
          background-color: #27c93f;
        }
        .price-card {
          background: #000000;
          margin: 0 20px 20px 20px;
          border-radius: 8px;
          border: 1px solid #444444;
          padding: 20px 24px;
          box-shadow:
            inset 0 0 10px #555555cc;
          transition: box-shadow 0.3s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          user-select: text;
          position: relative;
        }
        .price-card .card-item-icon {
          font-size: 1.5rem;
          margin-right: 10px;
          vertical-align: middle;
        }
        .price-card:hover {
          box-shadow:
            0 0 18px #61dafb, inset 0 0 20px #61dafb;
          border-color: #61dafb;
          z-index: 3;
        }
        .dual-card {
          margin: 0 20px 20px 20px;
          background: #000000;
          border: 1px solid #444444;
          border-radius: 8px;
          padding: 24px 30px;
          box-shadow:
            inset 0 0 12px #444444cc;
          display: flex;
          gap: 24px;
          user-select: text;
          flex-direction: column;
        }
        .dual-card-heading {
          font-weight: 700;
          font-size: 1.35rem;
          color: #4ec9f5;
          margin-bottom: 18px;
          user-select: text;
          font-family: 'Fira Code', monospace;
          border-bottom: 1.5px solid #3b3b5a;
          padding-bottom: 6px;
          flex-basis: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .dual-card:hover {
          box-shadow:
            0 0 20px #61dafb, inset 0 0 22px #61dafb;
          border-color: #61dafb;
          z-index: 3;
        }
        .dual-parts-wrapper {
          flex-grow: 1;
          display: flex;
          gap: 20px;
          user-select: text;
        }
        .dual-part {
          flex: 1;
          background: #111111;
          border-radius: 6px;
          padding: 18px 20px;
          box-shadow: inset 0 0 10px #2f72b0;
          color: #c5cee4;
          font-family: 'Fira Code', monospace;
          user-select: text;
          cursor: default;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease;
          position: relative;
        }
        .dual-part .card-item-icon {
          font-size: 1.3rem;
          margin-right: 8px;
          vertical-align: middle;
        }
        .dual-part:hover {
          box-shadow: 0 0 20px #61dafbaa, inset 0 0 14px #61dafbbaa;
          z-index: 2;
        }
        .price-title {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: #9cdcfe;
          text-shadow: 0 0 6px #3799e9aa;
          user-select: text;
          font-family: 'Fira Code', monospace;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .price-description {
          font-size: 1rem;
          line-height: 1.5;
          color: #d4d4d4cc;
          user-select: text;
          flex-grow: 1;
          white-space: pre-wrap;
        }
        .price-amount {
          margin-top: 14px;
          font-weight: 700;
          font-family: 'Fira Code', monospace;
          font-size: 1.05rem;
          color: #b5cea8;
          user-select: text;
          padding-top: 6px;
          border-top: 1px solid #3b3b5a;
        }
        @media (max-width: 800px) {
          .dual-parts-wrapper {
            flex-direction: column;
            gap: 16px;
          }
        }
        @media (max-width: 400px) {
          .price-cards-wrapper {
            padding: 0 10px;
          }
          .price-card, .dual-card {
            margin: 0 5px 16px;
            padding: 16px 18px;
          }
        }
      `}</style>

      <div className="our-price-container" role="main">
        <h1 className="our-price-heading">
          <span className="offer-main-icon">💡</span>
          What We Offer&nbsp;—&nbsp;With Clarity & Value
        </h1>

        <div className="price-cards-wrapper" role="list">
          <div className="editor-top-bar" aria-hidden="true">
            <span className="control-btn close-btn" />
            <span className="control-btn minimize-btn" />
            <span className="control-btn zoom-btn" />
          </div>

          {pricingData.map((item, index) =>
            item.dual ? (
              <div className="price-card dual-card" key={index} role="listitem">
                <div className="dual-card-heading">
                  <span className="card-item-icon">{item.icon}</span>
                  {item.dualTitle}
                </div>
                <div className="dual-parts-wrapper">
                  {item.parts.map((part, i) => (
                    <div className="dual-part" key={i}>
                      <h3 className="price-title">
                        <span className="card-item-icon">{part.icon}</span>
                        {part.title}
                      </h3>
                      <p className="price-description">{part.description}</p>
                      {/* Optionally add price here: <p className="price-amount">{part.price}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="price-card" key={index} role="listitem">
                <h2 className="price-title">
                  <span className="card-item-icon">{item.icon}</span>
                  {item.title}
                </h2>
                <p className="price-description">{item.description}</p>
                {/* Optionally add price here: <p className="price-amount">{item.price}</p> */}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
