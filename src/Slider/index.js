import React, { useState, useRef, useEffect } from 'react';
import Slide from '../Slide/index';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import Dots from '../Dots/index';
import './styles.css';


const Slider = ({images}) => {
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
    if(slideCurrentIndex === images.length - 1 ){
      return setSlideCurrentIndex(0)
    }
    setSlideCurrentIndex(slideCurrentIndex + 1);
  };
  const goToPreviousSlide = () => {
    if (slideCurrentIndex === 0){
      return setSlideCurrentIndex(images.length -1)
    }
    setSlideCurrentIndex(slideCurrentIndex - 1);
  };
  const handleDotClick = i => () => {
    setSlideCurrentIndex(i);
  };
  return (
    <div>
      <div className="slider" ref={ref}>
        <div className="slider-wrapper" style={{ transform: `translate(-${slideCurrentIndex * slideWidth}px)` }}>
          {images.map((image, i) => (
            <Slide className={`slide${i === slideCurrentIndex ? ' current-slide' : ' prev-next-slide'}`} key={i}
                   image={image} style={{ width: `${slideWidth}px` }} currentIndex={slideCurrentIndex}/>
          ))}
        </div>
        <LeftArrow prevSlide={goToPreviousSlide} selectedIndex={slideCurrentIndex}/>
        <RightArrow nextSlide={goToNextSlide} selectedIndex={slideCurrentIndex} length={images.length}/>
      </div>
      <Dots
        selectedIndex={slideCurrentIndex}
        length={images.length}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default Slider;
