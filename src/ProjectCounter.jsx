import React, { useEffect, useState, useRef } from "react";

export const ProjectCounters = () => {
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateNumbers(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectData = [
    { title: "Portfolio", number: 20, plus: true },
    { title: "Website", number: 15, plus: true },
    { title: "Figma Design", number: 30, plus: true },
    { title: "Apps", number: 6, plus: true },
    { title: "Graphic Designing", number: 45, plus: true },
  ];

  const CountUpNumber = ({ target, plus }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateNumbers) return;

      let start = 0;
      const duration = 1000;
      const increment = target / (duration / 20);

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 20);

      return () => clearInterval(interval);
    }, [animateNumbers, target]);

    return (
      <span className="count-number">
        {count}
        {count >= target && plus ? "+" : ""}
      </span>
    );
  };

  return (
    <div ref={sectionRef} className="graph-section slide-in-right">
      <h2 className="section-title">📊 Projects Completed</h2>
      <div className="bar-chart-horizontal">
        {projectData.map((project, index) => (
          <div className="bar-item-horizontal" key={index}>
            <CountUpNumber target={project.number} plus={project.plus} />
            <span className="bar-label-horizontal">{project.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
