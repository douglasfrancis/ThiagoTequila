import React, { useState, useRef} from 'react'
import barrels from '../Images/barrels.mp4'
import icon from '../Images/icon.png'

export default function Section1() {

  const [scroll, setScroll] = useState(false)

  window.addEventListener("scroll", function(e){
    if ( window.pageYOffset > 10 ) {
      setScroll(true)
  } else {
      setScroll(false)
  }});


  return (
    <div id='section1'>

        <div className='full-gradient' style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          <div>
            <h1 id='motto'>The <span id='flavoured'>flavoured</span> Tequila company</h1>
            <img id='motto-icon' src={icon} alt='icon'/>
            <h1 id='motto'> where tradition meets innovation</h1>
          </div>


          <div id='scroll-container'>
           {//<p id='scroll' className={scroll? 'scroll':'scroll-visible'}>Scroll To Explore</p>
            }
            <div className="arrow"></div>
          </div>


        </div>

        <video className='background' autoPlay muted loop playsInline controls={false}>
                <source src={barrels} type="video/mp4"/>
                Your browser does not support the video tag.
        </video>

    </div>
  )
}
