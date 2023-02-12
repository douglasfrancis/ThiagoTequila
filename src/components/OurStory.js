import React from 'react'
import video from '../Images/agave.mp4'
import './OurStory.css'
import { Link } from 'react-router-dom'
import farmer from '../Images/farmer.jpg'
export default function OurStory() {
  return (
    <main>
        <div id="vid-container">
                <div className="magic-gradient" >
                  <div id='magic-of-thiago' className='wow fadeInUp' data-wow-duration="2s">
                    <h2 className='story-header'>The Magic of Thiago</h2>
                    <p>1. High Altitude - Our Agave is grown high up in the mountains</p>
                    <p>2. Red Soil - Higher the altitude the redder the soil </p>
                    <p>3. Sweet Agave - Redder th soil the sweeter the Agave</p>
                    <p>4. Smooth Tequila - The sweeter the Agave the smoother the Tequila</p>

                    <Link to='/products'><button id='shop-now-btn'>Shop Now</button></Link>

                  </div>
                 
                </div>
                

                <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>

        <div id='process'>
          <div id="process-gradient">
            <div id='process-info' className='wow fadeInUp' data-wow-duration="2s">
                <h2 className='story-header'>Our Process</h2>
                <p className='our-story-p'>The process of making tequila involves harvesting mature blue agave plants, cooking the piñas (the core of the agave plant), crushing them to extract the juice, fermenting the juice with yeast, and then distilling the fermented juice twice. The resulting liquid is then aged in oak barrels, which imparts unique flavors to the tequila. The aging process can vary from a few months to several years, and the final product is then bottled and sold as tequila.</p>
            </div>

            <img className='wow fadeInUp' data-wow-duration="2s" id='farmer' src={farmer} alt='Farmer'/>
            
          </div>
          


        </div>

        <div id='origins'>
          <div className="gradient">
            < div id='origins-info' className='wow fadeInUp' data-wow-duration="2s">
                <h2 className='story-header'>Our Origins</h2>
                <p>With the arrival of the Spanish conquerors in the 16th century, The Spanish brought horses with them to Mexico as they colonized the country and established large estates known as haciendas. These haciendas relied heavily on the use of horses for transportation, communication, and agricultural work. Over time, horse breeding became an important part of the local economy in Arandas and the surrounding areas. Today, horses are still an important part of the culture in Arandas, and the area is known for producing some of the finest horses in Mexico.</p>
               
            </div>
          </div>


        </div>

        <div id='journey'>
          <div className="full-gradient">
            <div id='journey-info' className='wow fadeInUp' data-wow-duration="2s">
                <h2 className='story-header'>Our Journey</h2>
                <p>Sed sollicitudin massa pretium accumsan semper. Aenean felis eros, pharetra vitae nibh eget, consequat fringilla metus. Donec felis nisi, eleifend ac hendrerit non, sagittis quis orci. Vestibulum maximus massa eu sem pellentesque interdum. Praesent at pharetra quam. Aliquam erat volutpat. Maecenas convallis, odio ut aliquam convallis, neque quam hendrerit arcu, id tempor sem mauris quis neque. Sed elit lectus, consectetur id iaculis in, tempus quis ligula.</p>

              </div>
          </div>
        </div>

    </main>
  )
}
