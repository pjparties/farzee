import React from 'react'
import Navbar from './Navbar'
import Output from '../data/output.json'

function About() {
    return (
        <div className='container'>
            <Navbar />
            <p>About</p>
            <h1>{Output}</h1>
        </div>
    )
}

export default About