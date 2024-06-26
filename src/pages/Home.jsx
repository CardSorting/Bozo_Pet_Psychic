// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>🌟 Pet Psychic Scheduler 🌟</h1>
        <p>Unlock Your Pet's Mystical Mind!</p>
      </header>
      <section className="features">
        <h2>What We Offer</h2>
        <ul>
          <li>🔮 Book psychic readings for your pets</li>
          <li>✨ Check daily mood forecasts</li>
          <li>🌟 Discover personalized pet horoscopes</li>
          <li>📸 Capture your pet's glowing aura with aura photography</li>
          <li>💬 Connect with other pet owners in our community forum</li>
        </ul>
      </section>
      <section className="cta">
        <h2>Ready to embark on this whimsical journey?</h2>
        <p>Sign up today and unlock your pet's mystical mind!</p>
        <Link to="/Register" className="btn">Sign Up</Link>
        <Link to="/About" className="btn">Learn More</Link>
      </section>
    </div>
  );
}

export default Home;