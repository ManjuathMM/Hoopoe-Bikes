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
      price: '₹34,999',
      image: silverBike,
      alt: 'Silver Electric Bike',
      range: '60km',
      speed: '25 Km/h',
      freeShipping: true,
      shopLink: 'BUY NOW',
    },
    {
      id: 2,
      name: 'MID',
      title: 'XO-RIDE STORM',
      price: '₹36,999',
      image: orangeBike,
      alt: 'Orange Electric Bike',
      range: '65km',
      speed: '25km/h',
      freeShipping: true,
      shopLink: 'BUY NOW',
    },
    {
      id: 3,
      name: 'PRO',
      title: 'XO-RIDE FIREFLY',
      price: '₹39,999',
      image: greenBike,
      alt: 'Green Electric Bike',
      range: '75km',
      speed: '25 km/h',
      freeShipping: true,
      shopLink: 'BUY NOW',
    },
  ];

  return (
    <div className="home">
      {/* <Topbar /> */}
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
          <p className="legacy-subtitle">Redefining Everyday Mobility</p>
          <h2 className="legacy-title">
            Introducing the Next Chapter of Hoopoe E-Bikes
          </h2>
          <p className="legacy-description">
            At Hoopoe, innovation doesn’t stop - it evolves. Over the past
            years, we’ve been listening, learning, and designing a ride that
            truly matches the needs of today’s riders. The result? Our latest
            Hoopoe lineup. It’s the same sleek and accessible design you love,
            now powered by smarter engineering, advanced safety, and refined
            performance. With quicker pick-up, improved range, and next-level
            comfort, every ride feels effortless.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-header">
          <h1 className="main-heading">Experience the future of E-Bikes</h1>
        </div>

        <div className="products-container">
          {bikeProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.name.toLowerCase()}`}
              className="bike-card-link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="bike-card">
                <div className="bike-card-content">
                  <h2 className="bike-name">{product.title}</h2>

                  <div className="bike-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="bike-image"
                    />
                  </div>

                  <div className="param-container">
                    <div className="param-item">
                      <div className="param-label">RANGE</div>
                      <div className="param-value">{product.range}</div>
                    </div>

                    <div className="param-item">
                      <div className="param-label">SPEED</div>
                      <div className="param-value">{product.speed}</div>
                    </div>

                    <div className="param-item">
                      <div className="param-label">PRICE</div>
                      <div className="param-value">{product.price}</div>
                    </div>
                  </div>

                  <div className="buy-button">
                    BUY NOW
                  </div>
                </div>
              </div>
            </Link>
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
