import React, { useState} from 'react'
import instagram from '../Images/insta.png'
import { toast } from 'react-toastify'
import axios from 'axios'
import './Footer.css'

export default function Footer() {

  const [ email, setEmail] = useState("")

  const subscribe = () =>{
    if(!email){
      toast.error('Please input email address')
    } else {
      axios.post("https://api.infusionsoft.com/crm/rest/v2/contacts?fields=email_addresses", 
        {email_addresses:[{ email:email, field:"EMAIL1", opt_in_reason:"Mailing List"}],
        contact_type: "Other"}, {headers:{'X-Keap-API-Key': process.env.REACT_APP_KEAP_KEY}})
      .then((res)=>{
        console.log(res.data)
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    
  }

  return (
    <footer>
        <h1 style={{fontFamily: 'GreenGroveBold'}}>STAY UPDATED</h1>

        <input id='footer-input' type='text' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button id='subscribe-btn' onClick={subscribe}>Subscribe</button>

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
