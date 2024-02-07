import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Modal({setOpen}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [joining, setJoining] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let payload = {
            name, email, number
        }
        if(!name || !email){
            toast.error("Please add name and email")
        } else {
            setJoining(true)
            axios.post(`${process.env.REACT_APP_API_URL}/thiago/join-waitlist`, {payload})
            .then(() => {
                setSuccess(true)
                setJoining(false)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }

  return (
    <div className='modal'>
    <div className='modal-container'>
        <div className='modal-overlay'>
            

            <p style={{color:'white', fontSize: 18, padding: '20px 20px 10px 20px'}}>
                Be among the first to savour the rare craftsmanship and distinctive flavours of Thiago Tequila
            </p>

            <p style={{color:'white', fontSize: 22, padding: '20px 20px 10px 20px', fontWeight:'bold'}}>Sign up now for early access</p>
            <form>
                <input type='text' className='modal-input' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' className='modal-input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='modal-input' placeholder='Number (optional)' value={number} onChange={(e) => setNumber(e.target.value)}/>

                <button className='product-btn' onClick={handleSubmit}>
                    Join the waitlist
                </button>

                <p style={{color: '#f1f1f1', fontSize: 11}}>By submitting this form you are consenting for Thiago Tequila to store this data to be used for marketing purposes.</p>
            </form>
            
            <button onClick={() => setOpen(false)} style={{background: 'unset', border: '1px solid white', color: 'white', padding: '5px 10px'}}>
                CLOSE
            </button>
           
        </div>
      
    </div>
    
  </div>
  )
}
