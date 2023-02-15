import React, { useState} from 'react'
import instagram from '../Images/insta.png'
import { toast } from 'react-toastify'
import axios from 'axios'
import './Footer.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Footer() {

  const url = "https://gmail.us21.list-manage.com/subscribe/post?u=6f7a40d650e7fa8643e994e39&amp;id=0d9fa09519&amp;f_id=007efbe1f0";

  const [ email, setEmail] = useState("")

  return (
    <footer>
        <h1 style={{fontFamily: 'GreenGroveBold'}}>STAY UPDATED</h1>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div >
              <form style={{margin: '0 auto'}} onSubmit={(e) =>{ e.preventDefault(); subscribe({EMAIL: e.target[0].value})}}>
                  <input id='footer-input' type='text' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
                 <button id='subscribe-btn' type='submit'>Subscribe</button>
              </form>
              {status === "sending" && <div style={{ color: "blue", margin: 20, fontWeight:'bold' }}>sending...</div>}
              {status === "error" && <div style={{ color: "red", margin: 20,fontWeight:'bold' }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "green", margin: 20,fontWeight:'bold' }}>Subscribed !</div>}
            </div>
          )}
        />

        <div id='socials-container'>
            <img className='social-icon' src={instagram} alt='instagram' />
        </div>

        <p style={{fontSize: '0.6rem'}}>COPYRIGHT © 2021 THIAGO TEQUILA CO. YOU MUST BE 21 OR OLDER TO CONSUME ALCOHOL. PLEASE DRINK RESPONSIBLY.</p>

        <div id='footer-links'>
            <p>PRIVACY POLICY</p>

            <p>TERMS & CONDITIONS</p>

            <p>MEDIA INQUIRIES</p>

        </div>
    </footer>
  )
}
