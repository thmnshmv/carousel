import React from 'react';
import Arrow from '../images/arrow.svg'
import './styles.css'

const LeftArrow = ({prevSlide,selectedIndex}) => {
  return (
    <div className="back-arrow"  onClick={prevSlide} >
      <button>
        <img  src={Arrow} alt="backArrow"/>
      </button>
    </div>
  );
};

export default LeftArrow;
