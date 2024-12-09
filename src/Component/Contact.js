import React, { useState } from "react";
import "./ContactUs.css"; // Import the CSS file

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [popup, setPopup] = useState(false); // State to control popup visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setPopup(true); // Show popup if all fields are filled
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {popup && (
        <div className="popup">
          <p>Details Submitted Successfully!</p>
          <button onClick={() => setPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;