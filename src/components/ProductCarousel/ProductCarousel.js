import './ProductCarousel.css';
import { Carousel } from 'antd';
import image1 from '../../assets/images/products/Moving_Section/1.jpg';
import image2 from '../../assets/images/products/Moving_Section/2.png';
import image3 from '../../assets/images/products/Moving_Section/3.png';
import image4 from '../../assets/images/products/Moving_Section/4.png';
import image5 from '../../assets/images/products/Moving_Section/5.png';
import image6 from '../../assets/images/products/Moving_Section/6.png';

const ProductCarousel = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="carousel-container">
      <Carousel autoplay autoplaySpeed={2000}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="carousel-slide">
              <div className="slide-content">
                <img 
                  src={image} 
                  alt={`Moving carousel ${index + 1}`}
                  className="carousel-image"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
