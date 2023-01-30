import React from 'react'
import './Retail.css'

export default function Retail() {
  return (
    <main id='retail-page'>

      <div id='overlay'>

      </div>

      <div id='retail-container'>
        <div>
          <p style={{color:'white'}}>Join the wholesale community and take control of your buying experience by registering for an account. By filling out our simple and quick form, you will gain access to exclusive features, benefits, custom pricing options and more. Our team will get in touch to set up your account and ensure a seamless experience. Start now and experience the difference for yourself.</p>
          <p>Step 1. Register for an account</p>
          <p>Step 2. We will get in touch to arrange custom pricing</p>
          <p>Step 3. Upload your label artwork for the bottles</p>
          <p>Step 4. Place your order</p>
          <p>Step 5. Sit back whilst we take care of the rest</p>

        </div>
        <form>
          <input className='retail-input' placeholder='Company Name' />
          <input className='retail-input' placeholder='Contact Name' />
          <input className='retail-input' placeholder='Email' />
          <input className='retail-input' placeholder='Phone Number' />
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </main>
  )
}
