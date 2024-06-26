import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2024 Pet Psychic Scheduler. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem 0',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
  }
};

export default Footer;