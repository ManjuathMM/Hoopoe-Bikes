import React, { useState, useEffect } from 'react';
import './AlertBanner.css';

const AlertBanner = () => {
  const alertMessages = [
    "ALERT: Tariffs are coming and will affect all new products beginning September 8th.",
    "NEW: Free shipping on all orders over $75 - Limited time offer!",
    "SALE: Get 20% off on selected e-bike accessories this week only.",
    "UPDATE: New showroom opening in Mumbai - Stay tuned for details!",
    "NOTICE: Extended warranty now available for all HoopoeBikes models."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation effect - switches every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === alertMessages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [alertMessages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? alertMessages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === alertMessages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="alert-banner">
      <div className="alert-content">
        <button className="alert-arrow alert-arrow-left" onClick={goToPrevious}>
          ←
        </button>
        <div className="alert-message">
          {alertMessages[currentIndex]}
        </div>
        <button className="alert-arrow alert-arrow-right" onClick={goToNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default AlertBanner;
