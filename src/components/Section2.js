import React from 'react'
import white from '../Images/white.png'
import anejo from '../Images/anejo.png'

export default function Section2() {
  return (
    <div id='section2'>
              <h1 style={{color:'white'}}>Products</h1>

      <div>
      <img style={{height: '80%'}} src={white} alt='white'/>
        <h2>Blanco</h2>
      </div>

      <div>
      <img style={{height: '80%'}} src={anejo} alt='white'/>
        <h2>Anejo</h2>
        </div>
        
        


    </div>
  )
}
