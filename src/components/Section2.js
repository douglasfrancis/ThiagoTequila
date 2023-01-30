import React from 'react'
import white from '../Images/white.png'
import anejo from '../Images/anejo.png'
import reposado from '../Images/reposado.png'

export default function Section2() {
  return (
    <div id='section2'>
      <h1 style={{color:'white'}}>Products</h1>

      <div id='home-products'>
        <div>
          <img style={{height: '400px'}} src={white} alt='white'/>
          <h2>Blanco</h2>
        </div>
        <div>
          <img style={{height: '450px'}} src={reposado} alt='white'/>
          <h2>Reposado</h2>
        </div>

        <div>
          <img style={{height: '450px'}} src={anejo} alt='white'/>
          <h2>Anejo</h2>
        </div>
      </div>
    </div>
  )
}
