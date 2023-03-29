import React from 'react'
import Navbar from './Navbar'
import Output from '../data/output.json'

function About() {
    return (
        <div className='container'>
            <Navbar />
            <p>About</p>
            {Object.keys(Output).map((key, index) => {
                return (
                    <div key={index}>
                        {/* <p>{key}</p> */}
                        <p>{Output[key]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default About