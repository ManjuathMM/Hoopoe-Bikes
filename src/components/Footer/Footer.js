import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // WhatsApp contact function
  const openWhatsApp = () => {
    const phoneNumber = '918861334320'; // WhatsApp number
    const message = 'Hello, I want to know more about Hoopoe Bikes';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, '_blank'); // opens in new tab
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/returns">Returns & Cancellations</a>
            </li>
            <li>
              <a href="/manuals">Product Manuals</a>
            </li>
            <li>
              <a href="/warranty">Warranty Information</a>
            </li>
            <li>
              <a href="/activate">Activate Your Warranty</a>
            </li>
            <li>
              <a href="/protection">Extend Product Protection</a>
            </li>
            <li>
              <a href="/safety">Product Safety Advisory</a>
            </li>
            <li>
              <a href="/ebike-safety">Ebike Safety</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>LOCATIONS</h3>
          <ul>
            <li>
              <a href="/showroom/irvine">Belgaum, Karnataka, India</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>HELPFUL LINKS</h3>
          <ul>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/personal-info">
                Make A Request About Your Personal Info
              </a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your e-mail"
              className="newsletter-input"
            />
            <button className="newsletter-button">→</button>
          </div>

          <div className="follow-us">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a
                href="https://x.com/HoopoeBikes"
                className="social-icon twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/hoopoe_e_bikes?igsh=MTEwOWFja2ZjZnB2ag=="
                className="social-icon instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@hoopoebikes?si=X9RlzmFg4GZWA-sm"
                className="social-icon youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/hoopoe-bikes/"
                className="social-icon linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© HoopoeBikes, Inc. All Rights Reserved.</p>
          <button className="contact-us-btn" onClick={openWhatsApp}>
            CONTACT US!
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
