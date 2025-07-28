import React, { useEffect, useRef, useState } from "react";

// Card - no description on card itself, modal on hover
const TeamMemberCard = ({ imgSrc, alt, name, role, onHoverStart, onHoverEnd }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
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
      tabIndex={0}
      style={{ cursor: "pointer" }}
      aria-label={`View details for ${name}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
    >
      <img className="team-member-img" src={imgSrc} alt={alt} />
      <h2 className="team-member-name">{name}</h2>
      <h3 className="team-member-role">{role}</h3>
    </div>
  );
};

const teamMembers = [
  {
    imgSrc: "/ManthanImage.png",
    alt: "Manthan Sahonta",
    name: "Manthan Sahonta",
    role: "Founder, Full Stack Developer",
    description:
      "Manthan is an accomplished MERN stack developer and founder, specializing in building robust, scalable web applications. Manthan ensures seamless project delivery from conception to deployment. His collaborative nature and commitment to innovation drive the creation of high-quality digital solutions tailored to user needs and business goals.",
  },
  {
    imgSrc: "/ShreyaImage.jpg",
    alt: "Shreya Jain",
    name: "Shreya Jain",
    role: "Co-Founder, Figma Designer, Full Stack Developer",
    description:
      "Shreya is an expert MERN stack developer and Figma designer, skilled in building user-focused Web Developer. She leads both UI/UX design and full-stack development, combining creativity with technical excellence to deliver seamless, scalable digital solutions. Known for her collaborative approach, attention to detail, and strong problem-solving skills.",
  },
  {
    imgSrc: "/HarshImage.jpg",
    alt: "Harsh Dhiman",
    name: "Harsh Dhiman",
    role: "Co-Founder, Full Stack Developer",
    description:
      "Harsh is a proficient MERN stack developer with expertise in building scalable Web Developer. As a co-founder, he leads end-to-end development, from creating responsive front-end interfaces in React to designing robust APIs. Known for his problem-solving skills, clean code, and collaborative approach, Harsh is dedicated to delivering high-quality, user-focused digital solutions.",
  },
  {
    imgSrc: "/AbhishekImage.jpg",
    alt: "Abhishek Sharma",
    name: "Abhishek Sharma",
    role: "Human Resources",
    description:
      "Abhishek Sharma is a dedicated Human Resources professional known for effective talent management, employee engagement, and HR operations. While he specializes in HR, he equips him to bridge the gap between technical teams and organizational strategy. His skills include strong communication, recruitment, stakeholder management, and a collaborative approach. Abhishek’s blend of HR expertise and technical awareness ensures smooth coordination between departments and contributes to a culture of continuous learning and innovation",
  },
  {
    imgSrc: "/AniketImage.jpg",
    alt: "Aniket",
    name: "Aniket",
    role: "Financial Analyst",
    description:
      "Aniket is a results-driven Financial Analyst recognized for analytical acumen, financial modeling, and data-driven decision-making.Aniket’s skills include budgeting, forecasting, data visualization, and business intelligence—complemented by technical proficiency. His combination of financial insight and technical know-how supports effective cross-functional teamwork and innovative financial solutions.",
  },
  {
    imgSrc: "/KashishImage.jpg",
    alt: "Kashish Jain",
    name: "Kashish Jain",
    role: "Digital Marketing Manager",
    description:
      "Kashish is a skilled Digital Marketing Manager specializing in planning, executing, and optimizing digital marketing campaigns across channels such as SEO, SEM, social media, email marketing, and content marketing. She leverages data analysis and current marketing trends to enhance brand awareness, drive website traffic, and generate leads. Kashish combines creativity with strong strategic thinking and communication skills to lead campaigns that improve customer acquisition and retention. Known for her analytical mindset and teamwork, Kashish drives innovative, measurable marketing solutions aligned with business goals.",
  },
  {
    imgSrc: "/Shruti-Image.jpg",
    alt: "Shruti Pathania",
    name: "Shruti Pathania",
    role: "Social Media Manager",
    description:
      "Shruti is a skilled Social Media Manager responsible for developing and executing creative social media strategies to enhance brand presence and engage target audiences across platforms like Instagram, Facebook, Twitter, and LinkedIn. She excels in content creation, community management, influencer collaboration, and data-driven campaign optimization. With strong communication, creativity, and analytical skills, Shruti effectively monitors trends, analyzes performance metrics, and adapts strategies to maximize reach and engagement.",
  },
  {
    imgSrc: "/YashikaImage.png",
    alt: "Yashika Oberoi",
    name: "Yashika Oberoi",
    role: "Video Editor",
    description:
      "Yashika Oberoi is a talented Video Editor specializing in creating engaging, high-quality video content for diverse digital platforms. Although her primary role focuses on video content, Yashika possesses foundational knowledge in technical awareness enables her to collaborate effectively with development teams, understand digital product workflows, and contribute to integrated multimedia projects.",
  },
];

// Modal shown on hover
const PopupModal = ({ member }) => {
  if (!member) return null;
  return (
    <div className="popup-modal" role="dialog" aria-modal="true">
      <img className="popup-img" src={member.imgSrc} alt={member.alt} />
      <h2 className="popup-name">{member.name}</h2>
      <h3 className="popup-role">{member.role}</h3>
      <p className="popup-description">{member.description}</p>
    </div>
  );
};

const OurTeam = () => {
  const [hovered, setHovered] = useState(null);
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
            onHoverStart={() => setHovered(member)}
            onHoverEnd={() => setHovered(null)}
          />
        ))}
      </div>
      {hovered && (
        <PopupModal member={hovered} />
      )}
    </>
  );
};

export default OurTeam;
