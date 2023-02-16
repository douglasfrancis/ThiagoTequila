import React from 'react'
import './Basket.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Basket({basketOpen, setBasketOpen}) {

  const url = process.env.REACT_APP_MAILCHIMP_URL;


   function closeNav() {
       setBasketOpen(false)
  }

  return (
        <div id="mySidenav" className={basketOpen ? 'sidenav-open' : 'sidenav'}>

            <button className="closebtn" onClick={closeNav}>X</button>
            
            <h1 style={{fontFamily:'GreenGroveBold'}}>Store coming soon</h1>

          <div>
            <p style={{fontFamily:'Gotham'}}>Sign up to our mailing list so we can keep you posted</p>

            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div >
                  <form id='basket-form'  onSubmit={(e) =>{ e.preventDefault(); subscribe({EMAIL: e.target[0].value})}}>
                    <input id='basket-input' type='text' placeholder='Email Address' />
                    <button className='subscribe-btn' type='submit'>Subscribe</button>
                  </form>
                  {status === "sending" && <div style={{ color: "blue", margin: 20, fontWeight:'bold' }}>sending...</div>}
                  {status === "error" && <div style={{ color: "red", margin: 20,fontWeight:'bold' }} dangerouslySetInnerHTML={{__html: message}}/>}
                  {status === "success" && <div style={{ color: "green", margin: 20,fontWeight:'bold' }}>Subscribed !</div>}
            </div>
          )}
        />

           
          </div>
            
        </div>
        )
}
