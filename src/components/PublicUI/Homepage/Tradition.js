import React from 'react'
import './Tradition.css'
import tradition from '../../../Assets/tradition.webp'
import { Link } from 'react-router-dom'

export default function Tradition() {
  return (
    <div id='tradition'>
        <div></div>

        <div id='tradition-container'>
          <p id='tradition-header'>Tradition with a</p>
          <p id='revolution'>twist</p>

          <p className='tradition-txt'>Our journey starts in the heart of Jalisco, Mexico, where the finest blue agave basks under the Mexican sun. We use traditional methods to create a smooth, premium reposado tequila, then infuse it with naturally sourced flavours that shatter expectations.</p>

          <Link className='thiago-btn' to={'products'}>
              Buy Now
          </Link>
        </div>

        <img src={tradition} id='tradition-img'/>

  
    </div>
  )
}
