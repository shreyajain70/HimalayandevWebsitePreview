import React from "react";


export function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="footer-gradient"></div>

      <div className="footer-content">
        <p className="footer-watermark">
          The Himalayan Dev Company
        </p>

        <div className="footer-main">
          <h2 className="footer-title">
            Your Next Big Project{" "}
            <span>
              Deserves World-Class Code {"</>"}
            </span>
          </h2>

          <h3 className="footer-subtitle">
            LET’S TALK
          </h3>

          <a
            href="#contact"
            className="footer-contact-btn"
          >
            Contact Us
          </a>

          <div className="contact-details">
            <h3>📞 Contact-Number: 7591035124</h3>
            <h3>📧 Email: thehimalayndevs712@gmail.com</h3>
            <h3>🌐 Website: <a href="https://thehimalayandevs.com/">https://thehimalayandevs.com/</a></h3>
            <h3>🗂️ Portfolio: <a href="https://himalayandevsportfolio.netlify.app/">Portfolio</a></h3>
            <h3>🔗 LinkedIn: <a href="https://www.linkedin.com/in/the-himalayan-devs-264392376">LinkedIn</a></h3>
            <h3>📸 Instagram: <a href="https://www.instagram.com/thehimalayandevs712?igsh=cGJiYnJvMWwyN3lm">Instagram</a></h3>
          </div>


          <div className="footer-bottom">
            &copy; 2025 TheHimalaynDevs Website. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

