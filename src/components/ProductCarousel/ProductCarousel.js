import './ProductCarousel.css';
import { Carousel } from 'antd';
const ProductCarousel = () => {
  const contentStyle = {
    height: '80vh',
    color: '#fff',
    lineHeight: '80vh',
    textAlign: 'center',
    background: '#364d79',
    width: '100vw',
  };

  const carouselStyle = {
    height: '80vh',
    width: '100vw',
  };

  return (
    <div style={carouselStyle}>
      <Carousel autoplay autoplaySpeed={2000}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
