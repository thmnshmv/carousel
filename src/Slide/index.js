import React from 'react';
import './styles.css'


const Slide = ({image, style,className}) => {

  return (
    <div className={className} style={style} >
      <img src={image}/>
    </div>

);
};

export default Slide;
