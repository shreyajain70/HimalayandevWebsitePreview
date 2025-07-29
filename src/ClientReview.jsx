import React, { useEffect, useRef, useState } from "react";

export const ClientReview = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const clients = [
    {
      name: "Malhotra RoadLines",
      feedback:
        "Malhotra RoadLines has been an outstanding partner, providing reliable logistics solutions with impressive professionalism and seamless collaboration, especially given their unique army collaboration.",
      imgSrc: "/MalhotraRoadlines.jpg",
    },
    {
      name: "Siddharth Enterprises",
      feedback:
        "Siddarth Enterprises offers exceptional services with a wide variety of products and remarkable customer care, making them a trusted general store in the community.",
      imgSrc: "/SiddharthEnterprises.jpg",
    },
    {
      name: "Fitlowkey Pvt Ltd.",
      feedback:
        "Fitlowkey Pvt Ltd. has revolutionized online clothing with trendy designs and top-notch quality apparel. Their customer-centric approach ensures great satisfaction.",
      imgSrc: "/FitLowKey.jpg",
    },
  ];

  return (
    <>
      <style>{`
        .client-section {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
          background: #000;
          padding: 60px 30px;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          overflow: hidden;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .client-section.fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 40px;
          text-align: center;
          animation: fadeTitle 1s ease-in-out forwards;
        }
        @keyframes fadeTitle {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .client-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          width: 100%;
        }
        .client-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px;
          max-width: 320px;
          flex: 1 1 300px;
          text-align: center;
          cursor: default;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(40px);
          animation-fill-mode: forwards;
        }
        .fade-in-up .client-card {
          animation-name: slideFadeIn;
          animation-duration: 0.8s;
          animation-timing-function: ease;
          animation-fill-mode: forwards;
        }
        .client-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
        .client-img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 15px;
          border: 3px solid #3b82f6;
          background: rgba(59, 130, 246, 0.1);
          padding: 5px;
          transition: box-shadow 0.3s ease;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        .client-card:hover .client-img {
          box-shadow: 0 0 18px rgba(59, 130, 246, 0.7);
        }
        .client-card h3 {
          font-size: 1.3rem;
          color: #60a5fa;
          margin: 10px 0;
        }
        .client-card p {
          font-size: 0.95rem;
          color: #d1d5db;
          line-height: 1.5;
        }
        @keyframes slideFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .client-card {
            max-width: 90vw;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`client-section ${visible ? "fade-in-up" : ""}`}
        aria-label="Client reviews"
      >
        <h2 className="section-title">✨ What Clients Say</h2>
        <div className="client-cards">
          {clients.map((client, index) => (
            <div
              className="client-card"
              key={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={client.imgSrc}
                alt={client.name}
                className="client-img"
                loading="lazy"
              />
              <h3>{client.name}</h3>
              <p>{client.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
