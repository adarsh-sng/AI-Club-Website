import React from 'react';
import Image from '../assets/AI-Image.jpg';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className='Container'>
      <div className='text-container'>
        <p className='Heading'>Join the innovation revolution at AI Club!</p>
        <button className='button'>Join Now</button>
      </div>
      <img className='image' src={Image} alt="Hero" />
    </div>
  );
}

export default Hero;
