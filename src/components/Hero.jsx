import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile.jpg'; // <-- import local image

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Hi, Angelito Cruz!</h1>
        <p>BSIS-3A</p>
        <img
          src={profilePic}  // <-- use imported local image
          alt="Profile"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
