// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/landingPage.css'; // Import the CSS file for the footer

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-copyright">
          <p>Copyright &copy; 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

