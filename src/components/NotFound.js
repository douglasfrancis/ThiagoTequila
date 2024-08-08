import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../Assets/logo-new.webp'

const stylesheet ={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function NotFound() {
  return (
    <div style={stylesheet}>

      <img style={{width: 400, marginTop: 100, maxWidth: '90vw'}} src={logo} alt='logo'/>
      <h1 style={{color:'white'}}>Oops page not found!</h1>

      <Link style={{color:'white', textDecoration:'underline'}} to='/'>Return to Home</Link>
    </div>
  )
}
