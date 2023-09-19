import React, { useState } from 'react';
import './styles/ContentCarousel.css';

const Carousel = ({ content, itemsPerSlide }) => {
  // State to track the starting index of the displayed content for each slide
  const [startIndex, setStartIndex] = useState(0);

  // Calculate the last index for the current slide
  const endIndex = Math.min(startIndex + itemsPerSlide, content.length);

  // Move to the next slide
  const nextSlide = () => {
    // If we're at the end, go back to the first item
    setStartIndex(endIndex >= content.length ? 0 : endIndex);
  };

  // Move to the previous slide
  const prevSlide = () => {
    // If we're at the start, go to the last possible start index
    setStartIndex(startIndex === 0 ? content.length - (content.length % itemsPerSlide) : startIndex - itemsPerSlide);
  };

  return (
    <div className="Carousel-container">
      <button className="ContentCarousel-button" onClick={prevSlide}>
        Prev
      </button>
      <div className="Carousel-content">
        {content.slice(startIndex, endIndex)}
      </div>
      <button className="Carousel-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
