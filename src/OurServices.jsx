import React, { useEffect, useRef, useState } from 'react';

export const Ourservices = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites tailored to your business needs.',
      icon: (
        <svg
          className="specialization-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18v4H3V4zm0 6h18v10H3V10zm7 4h4" />
        </svg>
      ),
      bg: 'bg-violet',
    },
    {
      title: 'App Development',
      description: 'Building mobile applications that provide seamless user experiences across platforms.',
      icon: (
        <svg
          className="specialization-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
      ),
      bg: 'bg-emerald',
    },
    {
      title: 'Digital Marketing',
      description: 'Enhancing your online presence and driving traffic through strategic marketing efforts.',
      icon: (
        <svg
          className="specialization-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      bg: 'bg-pink',
    },
    {
      title: 'Portfolio Creation',
      description: 'Designing personal portfolios that showcase your skills and projects beautifully.',
      icon: (
        <svg
          className="specialization-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      bg: 'bg-orange',
    },
    {
      title: 'UI/UX Design (Figma)',
      description: 'Crafting intuitive and modern interfaces with pixel-perfect precision using Figma.',
      icon: (
        <svg
          className="specialization-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="6" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="18" r="2" />
        </svg>
      ),
      bg: 'bg-cyan',
    },
    // NEW SERVICE ENTRY
    {
      title: 'Graphic Designing',
      description: 'Creating visually captivating designs including logos, banners, and branding materials to elevate your brand identity.',
      icon: (
        <svg
          className="specialization-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16v-1a4 4 0 014-4h10a4 4 0 014 4v1M16 8V4H8v4M8 4L3 9m18 0l-5-5"
          />
        </svg>
      ),
      bg: 'bg-rose', // new background color class, add in CSS
    },
  ];

  const cardsRef = useRef([]);
  const visibleCardsRef = useRef(new Set());
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let updated = false;
        const newVisibleCards = new Set(visibleCardsRef.current);

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardsRef.current.indexOf(entry.target);
            if (idx !== -1 && !newVisibleCards.has(idx)) {
              newVisibleCards.add(idx);
              observer.unobserve(entry.target);
              updated = true;
            }
          }
        });

        if (updated) {
          visibleCardsRef.current = newVisibleCards;
          setVisibleCards(new Set(newVisibleCards));
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="our-services-section" id="services">
      <div className="our-services-container">
        <h2 className="our-services-title">
          🚀 Our Services — Where Innovation Meets Execution
        </h2>
        <div className="services-grid">
          {services.map((item, idx) => {
            const isVisible = visibleCards.has(idx);

            // Split description into words to animate individually
            const words = item.description.split(' ');

            return (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`specialization-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${idx * 0.35}s` }} // stagger card appearance
              >
                <div className={`specialization-icon-bg ${item.bg}`}>{item.icon}</div>
                <h3 className="specialization-title">{item.title}</h3>
                <p className="specialization-desc">
                  {words.map((word, widx) => (
                    <span
                      key={widx}
                      className={`word ${isVisible ? 'visible' : ''}`}
                      style={{
                        animationDelay: `${idx * 0.35 + 0.6 + widx * 0.12}s`, // stagger word animation
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
