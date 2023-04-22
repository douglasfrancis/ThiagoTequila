import React from 'react'
import video from '../Images/agave.mp4'
import './OurStory.css'
import { Link } from 'react-router-dom'
import farmer from '../Images/farmer.jpg'
import arandas from '../Images/arandas.png'
import city from '../Images/city.png'

export default function OurStory() {
  return (
    <main>
        <div id="vid-container">
                <div className="magic-gradient" >
                  <div id='magic-of-thiago' className='wow fadeInUp' data-wow-duration="2s">
                    <h2 className='story-header'>The Magic of Thiago</h2>
                    <p>1. High Altitude - Our Agave is grown high up in the mountains</p>
                    <p>2. Red Soil - The higher the altitude the redder the soil </p>
                    <p>3. Sweet Agave - The redder the soil the sweeter the Agave</p>
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
                <p className='our-story-p'>Our process of making tequila involves harvesting mature blue agave plants, cooking the piñas (the core of the agave plant), crushing them to extract the juice, fermenting the juice with yeast, and then distilling the fermented juice twice. The resulting liquid is then aged in oak barrels, which imparts unique flavours to the tequila. The ageing process can vary from a few months to several years, and the final product is then bottled and sold as Tequila.</p>
            </div>

            <img className='wow fadeInUp' data-wow-duration="2s" id='farmer' src={farmer} alt='Farmer'/>
            
          </div>
          


        </div>

        <div id='origins'>
          <div className="gradient">
            < div id='origins-info' className='wow fadeInUp' data-wow-duration="2s">
                <h2 className='story-header'>Our Origins</h2>
                <p >With the arrival of the Spanish conquerors in the 16th century, The Spanish brought horses with them to Mexico as they colonised the country and established large estates known as haciendas. These haciendas relied heavily on the use of horses for transportation, communication, and agricultural work. Over time, horse breeding became an important part of the local economy in the area. Today, horses are still an important part of the culture, and the area is known for producing some of the finest horses in Mexico.</p>
            </div>
          </div>


        </div>

        <div id='journey'>
          <div className="full-gradient">
            <img id='arandas' className='wow fadeInUp' data-wow-delay="0.5s" data-wow-duration="2s" src={arandas} alt='Arandas Polaroid'/>
            <img id='city' className='wow fadeInUp' data-wow-duration="2s"  src={city} alt='City Polaroid'/>

            <div id='journey-info' className='wow fadeInUp' data-wow-duration="2s">
                
                <h2 className='story-header'>Our Journey</h2>
                <p className='our-story-p'> Our journey to find the best Tequila and create the perfect drink was a thrilling and exciting adventure. It required a deep appreciation for the rich cultural heritage of Mexico and a passion for discovering the finest ingredients. To start, one must visit the heart of tequila country in Jalisco, Mexico, where agave plants are grown and harvested. From there, it's about exploring the different surrounding areas, distilleries and tasting the various styles of tequila, from the smooth and sweet blanco to the bold and complex añejo. As we tried different tequilas, we quickly understood what we wanted to create and then slowly perfected the drink we produce today. Our journey to find the best tequila and create the perfect drink was a journey worth taking.</p>

              </div>
          </div>
        </div>

    </main>
  )
}
