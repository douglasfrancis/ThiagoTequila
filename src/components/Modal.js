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
            axios.post(`${process.env.REACT_APP_API_URL}/thiago/join-waitlist`, payload)
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

            {!success ?
            <>
            <p style={{color:'white', fontSize: 22, padding: '20px 20px 10px 20px', fontWeight:'bold'}}>Sign up now for early access</p>
            <form>
                <input type='text' className='modal-input' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' className='modal-input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='modal-input' placeholder='Number (optional)' value={number} onChange={(e) => setNumber(e.target.value)}/>

                <button className='product-btn' onClick={handleSubmit} disabled={joining}>
                    {joining ?
                    "Joining..."
                    :
                    "Join the waitlist"
                    }
                    
                </button>

                <p style={{color: '#f1f1f1', fontSize: 11}}>Your completion of this form indicates your consent for Thiago Tequila to responsibly retain this data for marketing purposes.</p>
            </form>
            </>
            :
            <div>

                <p style={{color:'white', fontSize: 28, padding: '20px 20px 10px 20px', fontWeight:'bold', lineHeight: 1.5}}>You've been added to the waitlist!</p>

                <p style={{color:'white', fontSize: 22, padding: '20px 20px 10px 20px'}}>We will be in touch as soon as we have the next batch ready to be shipped</p>
            </div>

            }
            
            <button onClick={() => setOpen(false)} style={{background: 'unset', border: '1px solid white', color: 'white', padding: '5px 10px'}}>
                CLOSE
            </button>
           
        </div>
      
    </div>
    
  </div>
  )
}
