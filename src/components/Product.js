import React from 'react'
import './Products.css'
import icon from '../Images/icon.png'

export default function Product({item}) {
  return (
    <div className='product-container'>
      <img className='icon' src={icon} alt='Icon'/>
       <h3 className='product-title'>{item.name}</h3>
       <img className='product-img' src={item.img} alt={item.name} />
    </div>
  )
}
