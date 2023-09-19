import React, { useState, useEffect } from 'react';
import './styles/Carousel.css';

const Carousel = ({ content, itemsPerSlide, title, maxWidth, maxHeight, style }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [animation, setAnimation] = useState('');

  const endIndex = Math.min(startIndex + itemsPerSlide, content.length);

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => setAnimation(''), 500); // Remove animation after 0.5s
      return () => clearTimeout(timer);
    }
  }, [animation]);

  const nextSlide = () => {
    setAnimation('slide-left'); // set animation class to slide-left
    setStartIndex(endIndex >= content.length ? 0 : endIndex);
  };

  const prevSlide = () => {
    setAnimation('slide-right'); // set animation class to slide-right
    setStartIndex(startIndex === 0 ? content.length - (content.length % itemsPerSlide) : startIndex - itemsPerSlide);
  };

  return (
    <div className="Carousel-container" style={style}>
      {title && <h1 className="Carousel-title">{title}</h1>}
      <button className="Carousel-button left" onClick={prevSlide}>Prev</button>
      <div className={`Carousel-content ${animation}`}>
        {content.slice(startIndex, endIndex).map((item, index) => (
          <div key={index} className="Carousel-item">
            {React.cloneElement(item, { style: { maxWidth, maxHeight } })}
          </div>
        ))}
      </div>
      <button className="Carousel-button right" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
