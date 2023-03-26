import React, { useState } from 'react'
import Navbar from './Navbar'
import big from '../assets/logo-big.png'

import '../styles/Home.css'

function Home() {
  const [inp, setInp] = useState('')
  const reset = (e) => {
    e.preventDefault();
    setInp('');
  }
  return (
    <div className='bg'>
      <Navbar />
      <img className='logo' src={big} alt='logo' />
      <div className='text_box'>
        <form action="#">
          {/* <input value={inp} type="text" onChange={e=>setInp(e.target.value)} placeholder="Check if your SMS or phone number is in data breach" className='box' /> */}
          <textarea value={inp} id="box" onChange={e=>setInp(e.target.value)} placeholder="Check if your SMS or phone number is in data breach">
            
          </textarea>
          <div className='submission'>
            <button onClick={reset} >Reset</button>
            <button type='submit'>Check</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home