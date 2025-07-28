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
    <div ref={ref} className={`team-member-card ${visible ? "visible" : ""}`}>
      <img className="team-member-img" src={imgSrc} alt={alt} />
      <h2 className="team-member-name">{name}</h2>
      <h3 className="team-member-role">{role}</h3>
      <p className="team-member-description">{description}</p>
    </div>
  );
};

const teamMembers = [
  {
    imgSrc: "/ManthanImage.png",
    alt: "Manthan Sahonta",
    name: "Manthan Sahonta",
    role: "Founder, Full Stack Developer",
    description: "Description",
  },
  {
    imgSrc: "/ShreyaImage.jpg",
    alt: "Shreya Jain",
    name: "Shreya Jain",
    role: "Co-Founder, Figma Designer, Full Stack Developer",
    description: "Description",
  },
  {
    imgSrc: "/HarshImage.jpg",
    alt: "Harsh Dhiman",
    name: "Harsh Dhiman",
    role: "Co-Founder, Full Stack Developer",
    description: "Description",
  },
  {
    imgSrc: "/AbhishekImage.jpg",
    alt: "Abhishek Sharma",
    name: "Abhishek Sharma",
    role: "Human Resources",
    description: "Description",
  },
  {
    imgSrc: "/AniketImage.jpg",
    alt: "Aniket",
    name: "Aniket",
    role: "Financial Analyst",
    description: "Description",
  },
  {
    imgSrc: "/KashishImage.jpg",
    alt: "Kashish Jain",
    name: "Kashish Jain",
    role: "Digital Marketing Manager",
    description: "Description",
  },
  {
    imgSrc: "/Shruti-Image.jpg",
    alt: "Shruti Pathania",
    name: "Shruti Pathania",
    role: "Social Media Manager",
    description: "Description",
  },
  {
    imgSrc: "/YashikaImage.png",
    alt: "Yashika Oberoi",
    name: "Yashika Oberoi",
    role: "Video Editor",
    description: "Description",
  },
];

const OurTeam = () => {
  return (
    <>
      <h1 className="team-title">Our Team</h1>
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
