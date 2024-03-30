import React from 'react';
import InstagramIcon from '../assets/instagram.png';
import LinkedInIcon from '../assets/linkedin.png';
import GithubIcon from '../assets/github.png';
import Logo from "../assets/club_logo - icon.png";
import "../styles/Footer.css";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="column">
          <div className='logoSection'>
            <img className="logo" src={Logo} alt="logo"/>
            <p className="club-name">AI Club<br/> VIT Bhopal</p>
          </div>
        </div>

        <div className="column">
          <div className='useful-links'>
            <p className="links-heading">Some Useful Links</p>
            <a className="footer-link" onClick={() => scrollToSection('home')}>Home</a>
            <a className="footer-link" onClick={() => scrollToSection('about')}>About Us</a>
            <a className="footer-link" onClick={() => scrollToSection('event')}>Event</a>
            <a className="footer-link" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </div>

        <div className="column">
          <div className='My-Links'>
            <p className="find-me">Made by<br/> Adarsh Singh</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/adarsh-singh-90b572281/" target="_blank">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/adarsh.sng/" target="_blank">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="https://github.com/adarsh-sng" target="_blank">
                <img src={GithubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
