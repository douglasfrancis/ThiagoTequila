import React from 'react'
import barrels from '../Images/barrels.mp4'

export default function Section1() {
  return (
    <div id='section1'>

        <div className='gradient' style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>

          <h1 id='motto'>Savour the Spirit of Exquisite Craftsmanship</h1>
        </div>

        {//<img className='background' src={background} alt='Tequila background'/>
}
        <video className='background' autoPlay muted loop playsInline >
                <source src={barrels} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>

    </div>
  )
}
