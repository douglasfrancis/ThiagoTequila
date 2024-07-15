import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo-new.webp'

export default function Navbar() {

    const [open, setOpen] = useState(false)

  return (
    <nav>

        {/*<div id='burger' className={open ? 'open-menu' : ''} onClick={() => setOpen(!open)}>
            <div className='burger-line'/>
            <div className='burger-line'/>
            <div className='burger-line'/>
            <div className='burger-line'/>
            <div className='burger-line'/>
  </div>*/}

        <img id='header-logo' src={logo} alt='Thiago Tequila UK Flavoured Tequila Logo'/>
        
    </nav>
  )
}
