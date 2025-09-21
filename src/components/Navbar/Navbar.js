import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import hoopoeLogo from '../../assets/images/logos/Hoopoe.jpg';

const Navbar = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
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
