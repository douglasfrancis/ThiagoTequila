import React from 'react'
import './Retail.css'

export default function Retail() {
  return (
    <main id='retail-page'>

      <div id='overlay'>

      </div>

      <div id='retail-container'>
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
