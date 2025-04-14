import React from 'react';
import './FooterContent.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const FooterContent = () => {
  return (
    <div className="footer-content">
      <div className="footer-top">
        <div className="footer-column logo-column">
          <img
            src="logo-3.png"
            alt="Ideal Logo"
            className="footer-logo"
            height="65"
            width="150"
          />
          <p>SINCE 1975</p>
        </div>
        <div className="footer-column">
          <h4>Marketing Office</h4>
          <p>3rd Floor, Above Pabbas,</p>
          <p>Krishna Prasad Building,</p>
          <p>Lalbagh, Mangalore – 575 003.</p>
        </div>
        <div className="footer-column">
          <h4>Call Us</h4>
          <p>+91 810 530 9944</p>
        </div>
        <div className="footer-column">
          <h4>Hours of Operation</h4>
          <p>Monday – Saturday</p>
          <p>09:00 am – 05:00 pm</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-nav">
        <a href="#">Home</a>
        <span>|</span>
        <a href="#">About Us</a>
        <span>|</span>
        <a href="#">Products</a>
        <span>|</span>
        <a href="#">Parlour Clients</a>
        <span>|</span>
        <a href="#">Distributors</a>
        <span>|</span>
        <a href="#">Blog</a>
        <span>|</span>
        <a href="#">Contact Us</a>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <div className="footer-copy">
        <p>
          © 2018 Ideal Icecream Private Limited. All rights reserved. Powered
          by: <a href="https://www.server4sites.com">server4sites.com</a> | Designed
          by: <a href="https://www.treztec.com">treztec.com</a>
        </p>
        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
          <span>|</span>
          <a href="#">Google Disclosure</a>
          <span>|</span>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
