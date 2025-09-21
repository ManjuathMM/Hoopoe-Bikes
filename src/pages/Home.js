import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCarousel from '../components/ProductCarousel';
import bannerImage from '../assets/images/banners/bikes.png';
import orangeBike from '../assets/images/products/Orange/orange.png';
import greenBike from '../assets/images/products/SeaGreen/seagreen.png';
import silverBike from '../assets/images/products/Silver/silver.png';
import './Home.css';

const Home = () => {
  const bikeProducts = [
    {
      id: 1,
      name: 'BASE',
      title: 'XO-RIDE BEETLE',
      series: 'BASE SERIES',
      price: '₹34,999',
      image: silverBike,
      alt: 'Silver Electric Bike',
      mileRange: '25-45*',
      class: '20 MPH',
      freeShipping: true,
      shopLink: 'SHOP BASE SERIES',
    },
    {
      id: 2,
      name: 'MID',
      title: 'XO-RIDE STORM',
      series: 'MID SERIES',
      price: '₹36,999',
      image: orangeBike,
      alt: 'Orange Electric Bike',
      mileRange: '25-45*',
      class: '20 MPH',
      freeShipping: true,
      shopLink: 'SHOP MID SERIES',
    },
    {
      id: 3,
      name: 'PRO',
      title: 'XO-RIDE FIREFLY',
      series: 'PRO SERIES',
      price: '₹39,999',
      image: greenBike,
      alt: 'Green Electric Bike',
      mileRange: '40-55*',
      class: '28 MPH',
      freeShipping: true,
      shopLink: 'SHOP PRO SERIES',
    },
  ];

  return (
    <div className="home">
      <Topbar />
      <Navbar />

      {/* Full Screen Banner Section */}
      <div className="banner-section">
        <img
          src={bannerImage}
          alt="HoopoeBikes Banner"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1 className="banner-text">XO - RIDE</h1>
        </div>
      </div>

      {/* Legacy Series Section */}
      <div className="legacy-section">
        <div className="legacy-content">
          <p className="legacy-subtitle">
            WE'RE NOT REINVENTING THE WHEEL; WE'RE PERFECTING IT.
          </p>
          <h2 className="legacy-title">INTRODUCING THE XO - RIDE SERIES</h2>
          <p className="legacy-description">
            You asked, and we listened. Our team spent the last few years
            crafting a lineup that meets all of your needs. Enter... the Legacy
            Series. The form factor you know and love, paired with an evolved
            powertrain. Feel the difference with up to 30% more acceleration and
            other key performance upgrades.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-container">
          {bikeProducts.map((product) => (
            <div key={product.id} className="product-card-home">
              <div className="product-header">
                <h3 className="product-title">{product.title}</h3>
                <h2 className="product-series">{product.series}</h2>
                {product.freeShipping && (
                  <div className="free-shipping-badge">
                    <span>FREE</span>
                    <span>SHIPPING</span>
                  </div>
                )}
              </div>

              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-image-home"
                />
              </div>

              <div className="product-specs">
                <div className="spec-item">
                  <span className="spec-label">MILE RANGE</span>
                  <span className="spec-value">{product.mileRange}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">CLASS 2</span>
                  <span className="spec-value">{product.class}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">PRICE</span>
                  <span className="spec-value">{product.price}</span>
                </div>
              </div>

              <Link
                to={`/product/${product.name.toLowerCase()}`}
                className="shop-button"
              >
                {product.shopLink}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Product Carousel Section */}
      <ProductCarousel />

      <Footer />
    </div>
  );
};

export default Home;
