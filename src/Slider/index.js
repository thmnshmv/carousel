import React, { useState, useRef, useEffect } from 'react';
import Slide from '../Slide/index';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import Dots from '../Dots/index';
import './styles.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1573506717624-05d1df8324cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1573506717854-d9b24b74d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1573508110033-d71193493a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1572380492053-f43f59891d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60'
];


const Slider = () => {
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current && setSlideWidth(ref.current.clientWidth);
  }, []);
  useEffect(() => {
    if (ref.current.interval) {
      clearInterval(ref.current.interval);
    }
    ref.current.interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(ref.current.interval)
  }, [slideCurrentIndex]);

  const goToNextSlide = () => {
    if(slideCurrentIndex === IMAGES.length - 1 ){
      return
    }
    setSlideCurrentIndex(slideCurrentIndex + 1);
  };
  const goToPreviousSlide = () => {
    setSlideCurrentIndex(slideCurrentIndex - 1);
  };
  const handleDotClick = i => () => {
    setSlideCurrentIndex(i);
  };
  return (
    <div>
      <div className="slider" ref={ref}>
        <div className="slider-wrapper" style={{ transform: `translate(-${slideCurrentIndex * slideWidth}px)` }}>
          {IMAGES.map((image, i) => (
            <Slide className={`slide${i === slideCurrentIndex ? ' current-slide' : ' prev-next-slide'}`} key={i}
                   image={image} style={{ width: `${slideWidth}px` }} currentIndex={slideCurrentIndex}/>
          ))}
        </div>
        <LeftArrow prevSlide={goToPreviousSlide} selectedIndex={slideCurrentIndex}/>
        <RightArrow nextSlide={goToNextSlide} selectedIndex={slideCurrentIndex} length={IMAGES.length}/>
      </div>
      <Dots
        selectedIndex={slideCurrentIndex}
        length={IMAGES.length}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default Slider;
