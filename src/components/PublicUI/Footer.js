import React, { useState} from 'react'
import instagram from '../../Assets/icons/insta.webp'
import tiktok from '../../Assets/icons/tiktok.webp'
import fb from '../../Assets/icons/fb.webp'
import './Footer.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import logo from '../../Assets/blue-logo.webp'

export default function Footer() {

    const url = process.env.REACT_APP_MAILCHIMP_URL;

    const [ email, setEmail] = useState("")

  return (
    <footer>

      <div id='footer-container'>
        <img id='footer-logo' src={logo}/>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div >
              <p id='join-the-party'>Join the party</p>
              <form id='footer-form' onSubmit={(e) =>{ e.preventDefault(); subscribe({EMAIL: e.target[0].value})}}>
                  <input id='footer-input' type='text' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <button id='footer-btn' type='submit'>Sign Up</button>
              </form>
              {status === "sending" && <div style={{ color: "blue", margin: 20, fontWeight:'bold' }}>sending...</div>}
              {status === "error" && <div style={{ color: "red", margin: 20,fontWeight:'bold' }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "green", margin: 20,fontWeight:'bold' }}>Subscribed !</div>}
            </div>
          )}
        />
      </div>

   

    <div id='socials-container'>
        <a href='https://www.instagram.com/thiagotequila' target='_blank'><img className='social-icon' src={instagram} alt='instagram' /></a>
        <a href='https://www.facebook.com/profile.php?id=100087116185778' target='_blank'><img className='social-icon' src={tiktok} alt='instagram' /></a>
        <a href='https://www.facebook.com/profile.php?id=100087116185778' target='_blank'><img className='social-icon' src={fb} alt='instagram' /></a>
        <div id='footer-links'>
        <p className='footer-link'>PRIVACY POLICY</p>

        <p className='footer-link'>TERMS & CONDITIONS</p>

    </div>
    </div>

    <p style={{fontSize: '0.6rem'}}>COPYRIGHT © {new Date().getFullYear()} THIAGO TEQUILA CO. YOU MUST BE 21 OR OLDER TO CONSUME ALCOHOL. PLEASE DRINK RESPONSIBLY.</p>

   

    <a href='https://www.frantech.org.uk' style={{color: '#FB4622',marginBottom: 20, fontSize: '0.5rem', position: 'absolute', bottom: 0, left: 0}}>WEBSITE BY FRANTECH</a>
</footer>
  )
}
