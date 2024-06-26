// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Registration from './pages/Register';
import Profile from './pages/Profile';
import ChatInterface from './components/ChatInterface';
import AboutUs from './pages/AboutUs'; // Import the AboutUs component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app" style={styles.app}>
        <Header />
        <div className="content-wrapper" style={styles.contentWrapper}>
          <main className="main-content" style={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat/:appointmentId" element={<ChatInterface />} />
              <Route path="/about" element={<AboutUs />} /> {/* Add the About Us route */}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Styles for the App component
const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrapper: {
    flex: 1,
    padding: '20px',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

export default App;