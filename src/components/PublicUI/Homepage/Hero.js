import React from 'react'
import './Hero.css'

export default function Hero() {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='hero'>

        <p id='hero-txt'>A bold new tequila experience</p>
        <button className='thiago-btn' onClick={() => handleClickScroll('flavour-revolution')}>
            Learn More
        </button>
    </div>
  )
}
