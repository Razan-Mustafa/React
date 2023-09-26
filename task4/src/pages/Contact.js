import React from "react";
import '../App.css';

const ContactUs = () => {
  return (
    <div id="contact">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to get in touch with us
        using the contact information below.
      </p>

      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <ul>
          <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
          <li>Phone: <a href="tel:+123456789">+1 (123) 456-789</a></li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Contact Form</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
