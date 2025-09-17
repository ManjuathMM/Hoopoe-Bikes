import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import hoopoeLogo from '../../assets/images/logos/Hoopoe.jpg';
import orangeBike from '../../assets/images/products/Orange/05-1.png';
import greenBike from '../../assets/images/products/SeaGreen/01-1.png';
import silverBike from '../../assets/images/products/Silver/05-1.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAccessoriesDropdown, setShowAccessoriesDropdown] = useState(false);

  const bikeProducts = [
    {
      id: 1,
      name: 'BASE',
      subtitle: 'THE ORANGE RIDER',
      price: '$2295 - $3345',
      image: orangeBike,
      alt: 'Orange Electric Bike',
    },
    {
      id: 2,
      name: 'MID',
      subtitle: 'THE URBAN EXPLORER',
      price: '$2645 - $2995',
      image: greenBike,
      alt: 'Green Electric Bike',
    },
    {
      id: 3,
      name: 'PRO',
      subtitle: 'THE TRAILBLAZER',
      price: '$3995 - $4995',
      image: silverBike,
      alt: 'Silver Electric Bike',
    },
  ];

  return (
    <nav
      className="navbar"
      onMouseLeave={() => {
        setShowDropdown(false);
        setShowAccessoriesDropdown(false);
      }}
    >
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src={hoopoeLogo} alt="Hoopoe Bikes" className="navbar-logo" />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li
              className="dropdown-item"
              onMouseEnter={() => {
                setShowDropdown(true);
                setShowAccessoriesDropdown(false);
              }}
            >
              <Link to="/">ELECTRIC BIKES</Link>
              {showDropdown && (
                <div className="mega-dropdown">
                  <div className="dropdown-content">
                    <div className="products-grid">
                      {bikeProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.name.toLowerCase()}`}
                          className="product-card-link"
                          onClick={() => setShowDropdown(false)}
                        >
                          <div className="product-card">
                            <div className="product-image">
                              <img src={product.image} alt={product.alt} />
                            </div>
                            <div className="product-info">
                              <h3 className="product-name">{product.name}</h3>
                              <p className="product-subtitle">
                                {product.subtitle}
                              </p>
                              <p className="product-price">{product.price}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="discover-card">
                        <div className="discover-icon">⚡</div>
                        <div className="discover-info">
                          <h3 className="discover-name">DISCOVER</h3>
                          <p className="discover-subtitle">THE FULL LINEUP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className="dropdown-item"
              onMouseEnter={() => {
                setShowAccessoriesDropdown(true);
                setShowDropdown(false);
              }}
            >
              <a href="/accessories">ACCESSORIES</a>
              {showAccessoriesDropdown && (
                <div className="mega-dropdown1">
                  <div className="dropdown-content">
                    <div className="coming-soon-section">
                      <div className="coming-soon-content">
                        <h2 className="coming-soon-title">ACCESSORIES</h2>
                        <p className="coming-soon-subtitle">COMING SOON...</p>
                        <div className="coming-soon-description">
                          <p>
                            We're working hard to bring you the best electric
                            bike accessories.
                          </p>
                          <p>Stay tuned for exciting updates!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
