import React from 'react'
import video from '../Images/agave.mp4'
import './OurStory.css'
import arandas from '../Images/arandas.png'

export default function OurStory() {
  return (
    <main>
        <div id="vid-container">
                <div className="full-gradient" />
                

                <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>

        <div id='process'>
        <div className="gradient" />


        </div>

        <div id='origins'>
        <div className="gradient" />


        </div>

        <div id='journey'>
        <div className="full-gradient" />


        </div>

    </main>
  )
}
