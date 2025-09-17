import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCarousel from '../components/ProductCarousel';
import bannerImage from '../assets/images/banners/bikes.png';
import './Home.css';

const Home = () => {
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

      <main className="home-content">
        <div className="content-spacer">
          {/* This creates space to better showcase the footer */}
          <h2>Discover Our Products</h2>
          <p>
            Premium electric bikes designed for adventure and urban mobility.
          </p>
        </div>
      </main>

      {/* Product Carousel Section */}
      <ProductCarousel />

      <Footer />
    </div>
  );
};

export default Home;
