import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const productData = productsData[productId];
    if (productData) {
      setProduct(productData);
      setSelectedImage(0);
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="product-page">
      <Topbar />
      <Navbar />

      <div className="product-container">
        {/* Left Side - Images */}
        <div className="product-images-section">
          <div className="main-image-container">
            <img
              src={product.images[selectedImage]}
              alt={`${product.name} - View ${selectedImage + 1}`}
              className="main-product-image"
            />
          </div>

          <div className="thumbnail-gallery">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? 'active' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="product-details-section">
          <div className="product-name-header">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-subtitle">{product.subtitle}</p>
          </div>

          <div className="shipping-info">
            <div className="shipping-icon">🚚</div>
            <span>{product.shippingInfo}</span>
          </div>

          <div className="add-to-cart-section">
            <button className="add-to-cart-btn">ADD TO CART</button>
          </div>

          <div className="product-description">
            <h2>{product.description.title}</h2>
            <p>{product.description.content}</p>
          </div>

          <div className="specifications-section">
            <h3>VEHICLE SPECIFICATIONS</h3>

            {Object.entries(product.specifications).map(
              ([sectionName, specs]) => {
                if (sectionName === 'VEHICLE SPECIFICATIONS') return null;

                return (
                  <div key={sectionName} className="spec-category">
                    <div
                      className="spec-header"
                      onClick={() => toggleSection(sectionName)}
                    >
                      <span>{sectionName}</span>
                      <span
                        className={`arrow ${
                          expandedSection === sectionName ? 'expanded' : ''
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {expandedSection === sectionName && (
                      <div className="spec-content">
                        {Object.entries(specs).map(([key, value]) => (
                          <div key={key} className="spec-item">
                            <span className="spec-label">{key}:</span>
                            <span className="spec-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              },
            )}
          </div>

          <div className="contact-section">
            <button className="contact-btn">CONTACT US!</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
