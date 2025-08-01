import React, { useState } from "react";
import axios from "axios";

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
        📞 <strong>Phone:</strong> <span className="Note-contact-number">7591035124</span>
      </p>
      <p>
        📧 <strong>EmailId:</strong>{" "}
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
  const [phoneError, setPhoneError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [EmailId, setEmailId] = useState("");

  // Clear errors/warnings on input change
  const handleInputChange = (setter, errorSetter) => (e) => {
    setter(e.target.value);
    if (errorSetter) errorSetter("");
  };

  const SubmitData = async () => {
    try {
      // Use POST instead of GET to send data in body
      const response = await axios.post(
        "http://127.0.0.1:7777/user",
        {
          FirstName,
          LastName,
          PhoneNumber,
          EmailId,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Submitted Data:", response.data);
    } catch (err) {
      console.error("Error Submitting:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (PhoneNumber.length !== 10 || !/^\d{10}$/.test(PhoneNumber)) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!EmailId.toLowerCase().endsWith("@gmail.com")) {
      setEmailWarning("Please use a valid Gmail address ending with @gmail.com.");
      return;
    }

    // If validation passes, submit form and show thank you note
    SubmitData();
    setShowNote(true);
  };

  return (
    <div className="ContactUs-MainPage">
      {!showNote ? (
        <>
          <h1 className="ContactUs-Heading">Contact Us</h1>
          <form className="ContactUs-Form" onSubmit={handleSubmit} noValidate>
            <label className="ContactUs-Label" htmlFor="FirstName">
              FirstName :
            </label>
            <input
              className="ContactUs-Input"
              id="FirstName"
              name="FirstName"
              type="text"
              value={FirstName}
              required
              onChange={handleInputChange(setFirstName)}
            />

            <label className="ContactUs-Label" htmlFor="LastName">
              LastName :
            </label>
            <input
              className="ContactUs-Input"
              id="LastName"
              name="LastName"
              type="text"
              value={LastName}
              required
              onChange={handleInputChange(setLastName)}
            />

            <label className="ContactUs-Label" htmlFor="PhoneNumber">
              Phone Number :
            </label>
            <input
              className="ContactUs-Input"
              id="PhoneNumber"
              name="PhoneNumber"
              type="text"
              value={PhoneNumber}
              maxLength={10}
              required
              onChange={handleInputChange(setPhoneNumber, setPhoneError)}
            />
            {phoneError && <div className="ContactUs-ErrorMessage">{phoneError}</div>}

            <label className="ContactUs-Label" htmlFor="EmailId">
              EmailId :
            </label>
            <input
              className="ContactUs-Input"
              id="EmailId"
              name="EmailId"
              type="email"
              value={EmailId}
              required
              onChange={handleInputChange(setEmailId, setEmailWarning)}
            />
            {emailWarning && <div className="ContactUs-WarningMessage">{emailWarning}</div>}

            <button className="ContactUs-SubmitButton" type="submit">
              Submit
            </button>
          </form>

          <div className="ContactUs-ContactInfo" style={{ marginTop: "1rem" }}>
            <p>
              📞 Contact Us: <span className="Note-contact-number">7591035124</span>
            </p>
            <p>
              📧 EmailId:{" "}
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
