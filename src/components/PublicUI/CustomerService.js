import React, { useState } from 'react'
import './CustomerService.css'
import agave from '../../Assets/customer-service.webp'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CustomerService() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [subject, setSubject] = useState("")
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name || !email || !msg){
      alert("Please add all fields")
    } else {
      setSending(true)
      axios.post(`${process.env.REACT_APP_API_URL}/thiago/customer-service-request`, {name, email, subject, msg, resolved: false})
      .then((res) => {
        setSent(true)
      })
      .catch((e) => {
        alert("Error sending")
      })
      .finally(() => {
        setSending(false)
      })
    }
  }

  return (
    <div style={{display:'flex'}}>
        <img id='customer-service-agave' src={agave} alt='Thiago Tequila customer service'/>

        <div id='customer-service-container'>
            <h2 id='were-here'>We're here</h2>
            <h3 id='to-help'>to help</h3>

            {sent ?
            <div>
              <p style={{color: '#77FD78'}}>Successfully sent!</p>
              <p>We've received your message and our customer support team will be in touch with you as soon as possible</p>
              <p style={{marginBottom: 50}}>In the meantime, feel free to explore our website</p>
              <Link to={'/products'} id='customer-submit-btn' style={{padding: '10px 15px 5px 15px'}}>Explore Now</Link>

            </div>

            :
            <>
              <p style={{letterSpacing: 2}}>GOT A QUESTION OR NEED SOME ASSISTANCE?</p>

              <p>Fill out the form below and our friendly customer support team will be happy to help!</p>

              <form id='customer-form'>
                  <input placeholder='Your name' className='customer-input' value={name} onChange={(e) => setName(e.target.value)}/>
                  <input placeholder='Your email' className='customer-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input placeholder='Subject  ' className='customer-input' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                  <textarea  placeholder='Message' className='customer-input' id='customer-textarea' value={msg} onChange={(e) => setMsg(e.target.value)}/>
                  <button id='customer-submit-btn' onClick={handleSubmit}>{sending ? 'Sending' : 'Submit'}</button>
              </form>
            </>
            }

          <img id='customer-service-agave-mobile' src={agave} alt='Thiago Tequila customer service'/>


        </div>

    </div>
  )
}
