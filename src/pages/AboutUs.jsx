import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="history">
        <h2>About Pet Psychic Scheduler</h2>
        <p>
          Pet Psychic Scheduler was founded in 2022 with the mission to help pet owners connect with their pets on a deeper, mystical level. Our unique platform offers psychic readings, daily mood forecasts, personalized horoscopes, aura photography, and a vibrant community forum. We are dedicated to bringing a touch of magic to the lives of pets and their owners.
        </p>
        <h3>Our Team</h3>
        <p>
          Our team is comprised of experienced pet enthusiasts, psychics, and tech experts who share a common passion for enhancing the bond between pets and their owners. Meet our founders:
        </p>
        <ul>
          <li><strong>Jane Doe</strong> - CEO & Co-Founder</li>
          <li><strong>John Smith</strong> - CTO & Co-Founder</li>
          <li><strong>Emily Johnson</strong> - Chief Pet Psychic</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
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
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@petpsychicscheduler.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Pet Psychic Way, Mystic Town, CA 90210</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
