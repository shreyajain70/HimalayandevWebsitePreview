import React, { useEffect, useRef, useState } from "react";

// Reusable card component with scroll animation
const TeamMemberCard = ({ imgSrc, alt, name, role, description }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // Animate once only
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`team-member-card ${visible ? "visible" : ""}`}
    >
      <img className="team-member-img" src={imgSrc} alt={alt} />
      <h2 className="team-member-name">{name}</h2>
      <h3 className="team-member-role">{role}</h3>
      <p className="team-member-description">{description}</p>
    </div>
  );
};

const teamMembers = [
  {
    imgSrc: "null",
    alt: "Manthan Sahonta",
    name: "Manthan Sahonta",
    role: "Owner",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Shreya Jain",
    name: "Shreya Jain",
    role: "Co-Founder, Figma Designer, Full Stack Developer",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Harsh Dhiman",
    name: "Harsh Dhiman",
    role: "Co-Founder, Full Stack Developer",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Abhishek Sharma",
    name: "Abhishek Sharma",
    role: "Human Resources",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Aniket",
    name: "Aniket",
    role: "Financial Analyst",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Kashish Jain",
    name: "Kashish Jain",
    role: "Digital Marketing Manager",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Shruti Pathania",
    name: "Shruti Pathania",
    role: "Social Media Manager",
    description: "Description",
  },
  {
    imgSrc: "null",
    alt: "Yashika Oberoi",
    name: "Yashika Oberoi",
    role: "Video Editor",
    description: "Description",
  },
];

const OurTeam = () => {
  return (
    <>
      <div className="team-details-div">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard
            key={idx}
            imgSrc={member.imgSrc}
            alt={member.alt}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </>
  );
};

export default OurTeam;
