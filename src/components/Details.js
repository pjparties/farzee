import React from 'react'
import Navbar from './Navbar'
import flowchart from '../assets/flowchart.png'
import protocol from '../assets/protocol.png'
import roadmap from '../assets/roadmap.png'
import '../styles/Details.css'

function Details() {
    return (
        <div className='container'>
            <Navbar />
            <div className="title">
                <h1>CITATION</h1>
            </div>
            <div className="body">
                <img className='img1' src={protocol} alt="protocol flowchart" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt eius rem quae quas minima, perferendis assumenda, suscipit ad impedit nulla animi delectus quidem dolores ipsum veniam voluptate mollitia corporis?</p>
            </div>

            <div className="flowchart"></div>
        </div>
    )
}

export default Details