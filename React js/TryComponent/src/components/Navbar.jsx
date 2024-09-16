import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react-router-logo.webp'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around'>
      <div>
        <img src={logo} alt="" className='h-16' />
      </div>
      <div>
        <ul className='flex gap-12'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
