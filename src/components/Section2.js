import React, { useState} from 'react'
import white from '../Images/white.png'
import anejo from '../Images/anejo.png'
import reposado from '../Images/reposado.png'

export default function Section2() {
  const [clicked, setClicked] = useState('Reposado')

  return (
    <div id='section2'>
      <h1 style={{color:'white', marginBottom: 'rem'}}>Products</h1>

      <div id='home-products'>
      
          <img className={clicked == "Blanco"? "clicked": "unclicked"}  src={white} alt='white' onClick={()=>setClicked("Blanco")}/>
       
          <img className={clicked == "Reposado"? "clicked": "unclicked"} src={reposado} alt='white' onClick={()=>setClicked("Reposado")}/>
       
          <img className={clicked == "Anejo"? "clicked": "unclicked"} src={anejo} alt='white' onClick={()=>setClicked("Anejo")}/>
        
      </div>

      <div className='more-product-info'>
        <div style={{width:'40%', height: 200}} >
          {clicked== 'Blanco' && <h2 className='product-info-title'>Blanco</h2>}
          {clicked== 'Reposado' && <h2 className='product-info-title'>Reposado</h2>}
          {clicked== 'Anejo' && <h2 className='product-info-title'>Anejo</h2>}

          <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
        </div>
        <div className='more-product-desc' >
        {clicked== 'Blanco' && <>
        <p>Introducing our premium Blanco tequila, crafted with the finest blue agave and distilled to perfection.</p>
        <p>Aged for just a few weeks, this tequila boasts a crisp, clean flavor profile with notes of citrus, vanilla and a hint of spice.</p>
        <p>Perfect for sipping or mixing in your favorite cocktails, this top-shelf tequila is the ultimate indulgence.</p> 
        <p>Experience the smooth and sophisticated taste of our premium Blanco tequila, available now.</p></>}
        {clicked== 'Reposado' && 
        <p>Our premium Reposado tequila is a smooth and complex blend of premium blue agave and the finest oak aging.<br/> 
          It is aged for a minimum of 6 months, allowing the flavors to develop and mature to perfection.<br/> 
          The aging process imparts notes of vanilla, caramel, and a hint of oak to the already rich and smooth tequila.<br/> 
          Every sip reveals the intricacies of the aging process, with a smooth finish that leaves a lasting impression.<br/>  
          It is perfect for sipping neat or in a classic cocktail, making it a top choice for tequila connoisseurs.<br/> 
          Experience the luxury of premium reposado tequila, with every sip.</p>}
        {clicked== 'Anejo' && 
        <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
          Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
          This tequila is perfect for sipping straight or in a luxurious cocktail. 
          It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
          Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>}

        

        </div>
      </div>
    </div>
  )
}
