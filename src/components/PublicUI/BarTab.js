import React from 'react'
import './BarTab.css'
import { Link } from 'react-router-dom'

export default function BarTab() {
  return (
    <Link to={'trade'} id='bar-tab'>
        <p>Are you a bar?</p>
    </Link>
  )
}
