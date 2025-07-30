    import React, { useState } from "react";


const Note = () => (
  <div className="Note-container">
    <img
      src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
      alt="Thank you illustration"
      className="Note-image"
    />
    <h1 className="Note-heading">Thank You!!</h1>
    <p className="Note-message">
      Thank you for reaching out to us. We truly value your time and effort.
      Our team will get in touch with you as soon as possible.
    </p>

    <div className="Note-contact-info">
      <p>
        📞 <strong>Phone:</strong>{" "}
        <span className="Note-contact-number">7591035124</span>
      </p>
      <p>
        📧 <strong>Email:</strong>{" "}
        <a
          href="mailto:thehimalayandevs712@gmail.com"
          className="Note-contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          thehimalayandevs712@gmail.com
        </a>
      </p>
      <p>
        📸 <strong>Instagram:</strong>{" "}
        <a
          href="https://www.instagram.com/thehimalayandevs712?igsh=cGJiYnJvMWwyN3lm"
          target="_blank"
          rel="noopener noreferrer"
          className="Note-contact-link"
        >
          @thehimalayandevs712
        </a>
      </p>
    </div>
  </div>
);

export const ContactUsPage = ({ onBack }) => {
  const [showNote, setShowNote] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,10}$/.test(val)) {
      setPhoneNumber(val);
      if (phoneError) setPhoneError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailWarning) setEmailWarning("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!email.toLowerCase().includes("@gmail.com")) {
      setEmailWarning("Please use a valid Gmail address ending with @gmail.com.");
      return;
    }

    setShowNote(true);
  };

  return (
    <div className="ContactUs-MainPage">
      {!showNote ? (
        <>
          <h1 className="ContactUs-Heading">Contact Us</h1>
          <form className="ContactUs-Form" onSubmit={handleSubmit} noValidate>
            <label className="ContactUs-Label" htmlFor="firstName">
              FirstName :
            </label>
            <input
              className="ContactUs-Input"
              id="firstName"
              name="firstName"
              type="text"
              required
            />

            <label className="ContactUs-Label" htmlFor="lastName">
              LastName :
            </label>
            <input
              className="ContactUs-Input"
              id="lastName"
              name="lastName"
              type="text"
              required
            />

            <label className="ContactUs-Label" htmlFor="phoneNumber">
              Phone Number :
            </label>
            <input
              className="ContactUs-Input"
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
            />
            {phoneError && (
              <div className="ContactUs-ErrorMessage">{phoneError}</div>
            )}

            <label className="ContactUs-Label" htmlFor="email">
              Email :
            </label>
            <input
              className="ContactUs-Input"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailWarning && (
              <div className="ContactUs-WarningMessage">{emailWarning}</div>
            )}

            <button className="ContactUs-SubmitButton" type="submit">
              Submit
            </button>
          </form>

          <div className="ContactUs-ContactInfo" style={{ marginTop: "1rem" }}>
            <p>
              📞 Contact Us:{" "}
              <span className="Note-contact-number">7591035124</span>
            </p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:thehimalayandevs712@gmail.com"
                className="Note-contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                thehimalayandevs712@gmail.com
              </a>
            </p>
            <p>
              📸 Instagram:{" "}
              <a
                href="https://www.instagram.com/thehimalayandevs712?igsh=cGJiYnJvMWwyN3lm"
                target="_blank"
                rel="noopener noreferrer"
                className="Note-contact-link"
              >
                @thehimalayandevs712
              </a>
            </p>
          </div>

          <button onClick={onBack} className="ContactUs-BackButton" style={{ marginTop: "1rem" }}>
            Back
          </button>
        </>
      ) : (
        <>
          <Note />
          <button onClick={onBack} className="ContactUs-BackButton" style={{ marginTop: "1rem" }}>
            Back to Home
          </button>
        </>
      )}
    </div>
  );
};
