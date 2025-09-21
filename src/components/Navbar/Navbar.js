import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import hoopoeLogo from '../../assets/images/logos/Hoopoe.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToProducts = () => {
    // Check if we're on the home page
    if (location.pathname === '/') {
      // If on home page, just scroll to products section
      const productsSection = document.querySelector('.products-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page first, then scroll
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const productsSection = document.querySelector('.products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <Link to="/">
            <img src={hoopoeLogo} alt="Hoopoe Bikes" className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li>
              <button onClick={scrollToProducts} className="nav-link-button">
                ELECTRIC BIKES
              </button>
            </li>
            <li>
              <Link to="/accessories" className="nav-link">ACCESSORIES</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
