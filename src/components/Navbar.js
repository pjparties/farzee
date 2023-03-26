import React from 'react'
import small from '../assets/logo-small.png';
import '../styles/Navbar.css'
function Navbar() {
  return (
      <div className='navbar'>
          <img className = 'navbar-logo' src={small} alt='logo' />
        <div className='navbar-links'>
          <p className='links'>Home</p>
          <p className='links'>Details</p>
          <p className='links'>About</p>
        </div>
    </div>
  )
}

export default Navbar