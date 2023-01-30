import React from 'react'
import video from '../Images/agave.mp4'
import './OurStory.css'
import arandas from '../Images/arandas.png'

export default function OurStory() {
  return (
    <main>
        <div id="vid-container">
                <div className="gradient">
                </div>

                <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>

        <div id='arandas-container' >

            <img id='arandas' src={arandas} alt='arandas' />

            <div >
                <h2>Finding the best source</h2>
                <p></p>
            </div>
        </div>
    </main>
  )
}
