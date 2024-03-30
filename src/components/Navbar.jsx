import React from 'react';
import logo from "../assets/club_logo - icon.png";

import "../styles/Navbar.css"; 

function Navbar() {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className='Header'>
      <img className="Image" src={logo} alt="logo"/>
      <div className="Headings">
        <a href="#home" onClick={(event) => scrollToSection("home", event)}>Home</a>
        <a href="#about" onClick={(event) => scrollToSection("about", event)}>About Us</a>
        <a href="#event" onClick={(event) => scrollToSection("event", event)}>Event</a>
        <a href="#contact" onClick={(event) => scrollToSection("contact", event)}>Contact</a>
         
        <button className="JoinButton">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
