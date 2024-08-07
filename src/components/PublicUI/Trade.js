import React, { useState } from 'react'
import './Trade.css'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Trade() {

    const [choice, setChoice] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [venueName, setVenueName] = useState("")
    const [address, setAddress] = useState("")
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!choice || !name || !email || !venueName || !address){
            toast.error("Please add all fields")
        } else {
            setLoading(true)
            let payload = {
                choice, name, email, venueName, address, pending: true
            }
            axios.post(`${process.env.REACT_APP_API_URL}/thiago/new-trade-request`, payload)
            .then(() => {
                setSent(true)
            })
            .catch(() => {
                toast.error("Error sending form")
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }

    return (
        <div id='trade'>
            <div id='trade-overlay'/>

            <div id='trade-container-left'>
                <h1>Want to stock Thiago?</h1>

                <h3>Option 1 - Trade Account </h3>
                <p>Once approved, you will have access to our trade account portal, giving you access to custom pricing and offers.</p>

                <h3>Option 2 - LWC </h3>
                <p>We have partnered with distributor LWC to help us reach as many bars in the UK as we can. If you would like to use a distributor then please fill in the form and we will pass on your details and they will reach out to you to discuss stocking Thiago.</p>
            </div>

            <form id='trade-form'>
                {sent?
                <div>
                    <p style={{color: '#77FD78', fontSize: 32, textTransform: 'uppercase', letterSpacing: 2}}>Successfully sent</p>
                    <p>{choice === 'LWC' ? "We will now pass on your details to our partners LWC who will contact you to discuss the next steps." 
                        : 
                        "One of our team will be in touch soon to discuss the next steps "
                        }
                    </p>

                </div>
                :
                <>
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                        <label style={{fontSize:22}}>
                            <input 
                                type='radio' 
                                value='Trade Account' 
                                checked={choice === 'Trade Account'} 
                                onChange={(e) => setChoice(e.target.value)}
                            />
                            Trade Account
                        </label>

                        <label style={{fontSize:22}}>
                            <input 
                                type='radio' 
                                value='LWC' 
                                checked={choice === 'LWC'} 
                                onChange={(e) => setChoice(e.target.value)}
                            />
                            LWC
                        </label>
                    </div>

                    <input className='trade-signup-input' placeholder='Contact Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input className='trade-signup-input' placeholder='Contact Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='trade-signup-input' placeholder='Venue Name' value={venueName} onChange={(e) => setVenueName(e.target.value)}/>
                    <textarea id='trade-signup-txt-area' placeholder='Venue Address' value={address} onChange={(e) => setAddress(e.target.value)}/>

                    <button id='submit-trade-btn' onClick={handleSubmit} disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
                    <p style={{textAlign:'left', fontSize: 14}}>By submitting this form, you agree for us to either pass on your details to LWC or to preliminarily set up a trade account direct with Thiago Tequila where your details will be securely stored.</p>
                </>
                }
    
            </form>
        </div>
    )
}