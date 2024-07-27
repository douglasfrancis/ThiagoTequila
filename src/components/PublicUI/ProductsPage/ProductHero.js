import React from 'react'
import './ProductHero.css'

export default function ProductHero() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id='product-hero'>
        <p id='product-hero-header'>Flavour</p>
        <p id='fiesta'>fiesta</p>
        <button id='products-learn-more' className='thiago-btn-purple' onClick={() => handleClickScroll('product-nav')}>
            Learn More
        </button>
    </div>
  )
}
