import React from 'react'
import video from '../Images/agave.mp4'
import './OurStory.css'
import { Link } from 'react-router-dom'

export default function OurStory() {
  return (
    <main>
        <div id="vid-container">
                <div className="full-gradient" >
                  <div id='magic-of-thiago' >
                    <h2 className='story-header'>The Magic of Thiago</h2>
                    <p>1 - High Altitude</p>
                    <p>2 - Redder the soil</p>
                    <p>3 - Sweeter the Agave</p>
                    <p>4 - Smoother th Tequila</p>

                    <Link to='/products'><button id='shop-now-btn'>Shop Now</button></Link>

                  </div>
                 
                </div>
                

                <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>

        <div id='process'>
          <div className="gradient">
            <div id='process-info'>
                <h2 className='story-header'>Our Process</h2>
                <p>1 - High Altitude</p>
                <p>2 - Redder the soil</p>
                <p>3 - Sweeter the Agave</p>
                <p>4 - Smoother th Tequila</p>

            </div>
          </div>



        </div>

        <div id='origins'>
          <div className="gradient">
            < div id='origins-info'>
                <h2 className='story-header'>Our Origins</h2>
                <p>Sed sollicitudin massa pretium accumsan semper. Aenean felis eros, pharetra vitae nibh eget, consequat fringilla metus. Donec felis nisi, eleifend ac hendrerit non, sagittis quis orci. Vestibulum maximus massa eu sem pellentesque interdum. Praesent at pharetra quam. Aliquam erat volutpat. Maecenas convallis, odio ut aliquam convallis, neque quam hendrerit arcu, id tempor sem mauris quis neque. Sed elit lectus, consectetur id iaculis in, tempus quis ligula.</p>
               
            </div>
          </div>


        </div>

        <div id='journey'>
          <div className="full-gradient">
            <div id='journey-info'>
                <h2 className='story-header'>Our Journey</h2>
                <p>Sed sollicitudin massa pretium accumsan semper. Aenean felis eros, pharetra vitae nibh eget, consequat fringilla metus. Donec felis nisi, eleifend ac hendrerit non, sagittis quis orci. Vestibulum maximus massa eu sem pellentesque interdum. Praesent at pharetra quam. Aliquam erat volutpat. Maecenas convallis, odio ut aliquam convallis, neque quam hendrerit arcu, id tempor sem mauris quis neque. Sed elit lectus, consectetur id iaculis in, tempus quis ligula.</p>

              </div>
          </div>
        </div>

    </main>
  )
}
