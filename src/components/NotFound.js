import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../Images/logo.png'

const stylesheet ={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function NotFound() {
  return (
    <div style={stylesheet}>

      <img src={logo} alt='logo'/>
      <h1>Oops page not found!</h1>

      <Link to='/'>Return to Home</Link>
    </div>
  )
}
