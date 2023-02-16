import React, { useRef, useState, useEffect } from 'react'
import './Retail.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

export default function Retail() {

  const form = useRef();
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(error){
      toast.error(error)
    }
  }, [error])

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    setLoading(true)

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setSent(true)
          setLoading(false)
      }, (error) => {
          console.log(error.text);
          setSent(false)
          setError(error.text)
          setLoading(false)
      });
  };

  return (
    <main id='retail-page'>
      <div id='retail-container'>
        <div>
          <h1 id='wholesale-header'>Wholesale</h1>
          <p id='retail-info'>Take control of your wholesale buying experience by registering for an account. By filling out our simple and quick form, you will gain access to exclusive features, benefits, custom pricing options and more. Our team will get in touch to set up your account and ensure a seamless experience. Start now and experience the difference for yourself.</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input className='retail-input' placeholder='Company Name' name='Company'/>
          <input className='retail-input' placeholder='Contact Name' name='Name'/>
          <input className='retail-input' placeholder='Email' name='Email'/>
          <input className='retail-input' placeholder='Phone Number' name='Number' />

          <p className='form-header'>Products Interested In</p>

          <div id='product-checkboxes'>
            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Blanco" name="Blanco" value="Blanco" />
              <label htmlFor="Blanco">Blanco</label>
            </div>
            
            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Reposado" name="Reposado" value="Reposado" />
              <label htmlFor="Reposado">Reposado</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Cherry" name="Cherry" value="Cherry" />
              <label htmlFor="Cherry">Cherry</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Vanilla" name="Vanilla" value="Vanilla" />
              <label htmlFor="Vanilla">Vanilla</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Spiced" name="Spiced" value="Spiced" />
              <label htmlFor="Spiced">Spiced</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Punch" name="Punch" value="Punch" />
              <label htmlFor="Punch">Punch</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="checkbox" id="Seltzer" name="Seltzer" value="Seltzer" />
              <label htmlFor="Seltzer">Seltzer</label>
            </div>
          </div>

          <p className='form-header'>Order Amount</p>

          <div id='product-checkboxes'>
            <div className='checkbox-container'>
              <input className='checkbox' type="radio" id="0-100" name="qty" value="0-100" />
              <label htmlFor="0-100">0 &gt; 100</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="radio" id="101-500" name="qty" value="101-500" />
              <label htmlFor="101-500">101 &gt; 500</label>
            </div>

            <div className='checkbox-container'>
              <input className='checkbox' type="radio" id="501+" name="qty" value="501+" />
              <label htmlFor="501+">501 +</label>
            </div>
          </div>
         


          <button className='submit-btn' type='submit' disabled={loading}>Submit</button>

          <p id='consent'>By submitting this form I consent for Thiago Tequila to store the information provided above to contact me regarding any products and services offered by Thiago Tequila.</p>
          
        </form>
      </div>
    </main>
  )
}
