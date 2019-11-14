import React from 'react';
import Arrow from '../images/arrow.svg';
import './styles.css'


const RightArrow = ({nextSlide,selectedIndex, length}) => {
  return (
    <div className={`next-arrow${selectedIndex === length -1 ? ' disabled' : ' '}`} onClick={nextSlide}>
      <button>
        <img  src={Arrow} alt="backArrow"/>
      </button>
    </div>
  );
};

export default RightArrow;
