import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <div>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#about" style={styles.link}>About</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#282c34',
    color: 'white',
    alignItems: 'center'
  },
  logo: {
    margin: 0
  },
  link: {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none'
  }
};

export default Navbar;
