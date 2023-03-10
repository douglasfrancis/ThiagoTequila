import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

export default function SideNav({open, setOpen}) {
  return (
    <div id='sideNav' className={open ? 'nav-open': 'nav-closed'}>
        <Link to='/' className='' onClick={()=>setOpen(false)}>Home</Link>
        <Link to='/products' className='' onClick={()=>setOpen(false)}>Products</Link>
        <Link to='/our-story' className='' onClick={()=>setOpen(false)}>Our Story</Link>
        <Link to='/wholesale' className='' onClick={()=>setOpen(false)}>Wholesale</Link>

    </div>
  )
}
