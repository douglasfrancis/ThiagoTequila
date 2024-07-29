import React from 'react'
import './CustomerService.css'
import agave from '../../Assets/customer-service.webp'

export default function CustomerService() {
  return (
    <div style={{display:'flex'}}>
        <img id='customer-service-agave' src={agave} alt='Thiago Tequila customer service'/>

        <div id='customer-service-container'>
            <h2 id='were-here'>We're here</h2>
            <h3 id='to-help'>to help</h3>

            <p style={{letterSpacing: 2}}>GOT A QUESTION OR NEED SOME ASSISTANCE?</p>

            <p>Fill out the form below and our friendly customer support team will be happy to help!</p>

            <form id='customer-form'>
                <input placeholder='Your name' className='customer-input' />
                <input placeholder='Your email' className='customer-input' />
                <textarea  placeholder='Message' className='customer-input' id='customer-textarea'/>
                <button id='customer-submit-btn'>Submit</button>
            </form>

        </div>

    </div>
  )
}
