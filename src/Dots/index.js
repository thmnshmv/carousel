import React from 'react'
import './styles.css'

const Dots = ({onDotClick,length, selectedIndex}) => {

  return(
  <div className="dots">
      {new Array(length).fill(null).map(( _, i) => (
        <button className={(i === selectedIndex) ? 'active-dot' : 'dot'} id={i} key={i}  onClick={onDotClick(i)}/>
      ))}
  </div>
  )
};

export default Dots;
