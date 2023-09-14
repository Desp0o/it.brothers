import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
   <>
    <div className='navbar'>
        <div className='navbar_inner'>
            <p className='logo'>IT Brothers</p>

            <div className='navbar_menu'>
                <Link to="/">About Us</Link>
                <Link to="/">Services</Link>
                <Link to="/">Priecing</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Contact</Link>
            </div>

        </div>
    </div>
   </>
  )
}
