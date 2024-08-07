import React from 'react'
import './FlavourRevolution.css'
import agave from '../../../Assets/agave.webp'
import { Link } from 'react-router-dom'

export default function FlavourRevolution() {
  return (
    <div id='flavour-revolution'>

      <img src={agave} id='revolution-agave'/>

      <div id='revolution-container'>
        <p id='a-flavour'>A Flavour</p>
        <p id='revolution'>revolution</p>

        <p className='revolution-txt'>Ditch the dusty old bottle and say hello to a tequila revolution! We're throwing out the rulebook and crafting a whole new tequila experience.</p>

        <p className='revolution-txt'>Forget the burn, forget the lime – this is tequila reinvented, bursting with vibrant taste that's perfect for kicking off good times and unforgettable memories.</p>

        <Link className='thiago-btn' to={'/products'}>
          Pre Order Now
        </Link>
      </div>

      <img src={agave} id='revolution-agave-mobile'/>

        
    </div>
  )
}
