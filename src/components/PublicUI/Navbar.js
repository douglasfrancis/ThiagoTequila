import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo-new.webp'
import { Link, useLocation } from 'react-router-dom'
import basket from '../../Assets/icons/basket.webp'

export default function Navbar({ open, setOpen, setBasketOpen }) {

  const location = useLocation()
  const { pathname } = location;


  return (
    <nav>
      {console.log(pathname)}
        <img id='mobile-basket-icon' src={basket} onClick={() => setBasketOpen(true)} />

        <Link to={'/'}>
          <img 
            id='header-logo'
            src={logo} 
            alt='Thiago Tequila UK Flavoured Tequila Logo'
            style={(pathname === '/terms' || pathname === '/privacy') ? {filter: 'invert(1)'}: {}}
          />
        </Link>

        <div style={{display:'flex', alignItems:'center'}}>
          <img id='basket-icon' src={basket} onClick={() => setBasketOpen(true)} />

          <div id='burger' className={open ? 'open-menu' : ''} onClick={() => setOpen(!open)}>
              <div className='burger-line'/>
              <div className='burger-line'/>
              <div className='burger-line'/>
              <div className='burger-line'/>
              <div className='burger-line'/>
          </div>
        </div>
        
        
    </nav>
  )
}
