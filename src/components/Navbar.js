import React from 'react'
import small from '../assets/logo-small.png';
import '../styles/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <div className='navbar'>
          <img className = 'navbar-logo' src={small} alt='logo' />
        <div className='navbar-links'>
          <Link to="/" className='links'>Home</Link>
          <Link to="/Details" className='links'>Details</Link>
          <Link to="/About" className='links'>About</Link>
        </div>
    </div>
  )
}

export default Navbar