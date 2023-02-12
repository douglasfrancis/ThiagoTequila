import React from 'react'
import instagram from '../Images/insta.png'

export default function Footer() {
  return (
    <footer>
        <h1 style={{fontFamily: 'GreenGroveBold'}}>STAY UPDATED</h1>

        <input type='text' placeholder='Email address'/>

        <div id='socials-container'>
            <img className='social-icon' src={instagram} alt='instagram' />
        </div>

        <p style={{fontSize: '0.8rem'}}>COPYRIGHT © 2021 THIAGO TEQUILA CO. YOU MUST BE 21 OR OLDER TO CONSUME ALCOHOL. PLEASE SIP RESPONSIBLY.</p>

        <div id='footer-links'>
            <p>PRIVACY POLICY</p>

            <p>TERMS & CONDITIONS</p>

            <p>MEDIA INQUIRIES</p>

        </div>
    </footer>
  )
}
