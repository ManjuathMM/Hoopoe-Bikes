import React from 'react';
import './ProductCarousel.css';
import image1 from '../../assets/images/products/Moving_Section/1.jpg';
import image2 from '../../assets/images/products/Moving_Section/2.png';
import image3 from '../../assets/images/products/Moving_Section/3.png';
import image4 from '../../assets/images/products/Moving_Section/4.png';
import image5 from '../../assets/images/products/Moving_Section/5.png';
import image6 from '../../assets/images/products/Moving_Section/6.png';

const ProductCarousel = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="carousel-wrapper">
      {/* Top Brand Bar */}
      <div className="brand-bar brand-bar-top">
        <div className="brand-track">
          {Array(20).fill().map((_, index) => (
            <span key={index} className="brand-text">@ HOOPOE BIKES</span>
          ))}
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-slide">
          <div className="images-track">
            {/* Create continuous loop by duplicating images */}
            {[...images, ...images, ...images].map((image, index) => (
              <div key={index} className="image-item-continuous">
                <img 
                  src={image} 
                  alt={`Hoopoe Bike ${(index % images.length) + 1}`}
                  className="carousel-image-continuous"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Brand Bar */}
      <div className="brand-bar brand-bar-bottom">
        <div className="brand-track">
          {Array(20).fill().map((_, index) => (
            <span key={index} className="brand-text">@ HOOPOE BIKES</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
