export const TechStack = () => {
  const languages = [
    { name: "HTML5",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Reactjs",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Expressjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Nodejs",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
    { name: "BootStrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { name: "GitHub",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <div className="Techstack-container">
      <div className="orbit-center">
        <h1 className="TechStack-heading">Our Tech Stack</h1>
        <div className="orbit-wrapper">
          {languages.map((lang, idx) => (
            <div
              key={lang.name}
              className={`orbit-lang lang-${idx}`}
              style={{
                '--i': idx,
              }}
            >
              <img 
                src={lang.icon} 
                alt={`${lang.name} icon`} 
                style={{ width: "22px", height: "22px", verticalAlign: "middle", marginRight: "8px" }} 
                loading="lazy"
              /> 
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
