import React, { useState } from 'react'
import Navbar from './Navbar'
import big from '../assets/logo-big.png'

import '../styles/Home.css'

function Home() {
  const [input, setInput] = useState('')
  const reset = (e) => {
    e.preventDefault();
    setInput('');
  }
  return (
    <div className='bg'>
      <Navbar />
      <img className='logo' src={big} alt='logo' />
      <div className='text_box'>
        <form action="#">
          <textarea value={input} className="box1" onChange={e=>setInput(e.target.value)} placeholder="Check if the SMS you received is spam or not...">
            
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