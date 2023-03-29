import React from 'react'
import Navbar from './Navbar'
import {obj} from '../data/output.js'

function About() {  
    return (
        <div className='container'>
            <Navbar />
            <p>About</p>
            <p>{obj.label}</p>
            <p>{obj.score}</p>
            
        </div>
    )
}

export default About