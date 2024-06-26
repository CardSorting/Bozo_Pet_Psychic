import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <span style={styles.logoIcon}>🔮</span>
        <span style={styles.logoText}>Pet Psychic</span>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/booking" style={styles.navLink}>Book a Reading</Link></li>
          <li style={styles.navItem}><Link to="/profile" style={styles.navLink}>Profile</Link></li>
          <li style={styles.navItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
          <li style={styles.navItem}><Link to="/register" style={styles.navLink}>Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: '2rem',
    marginRight: '0.5rem',
  },
  logoText: {
    color: '#ecf0f1',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
};

export default Header;