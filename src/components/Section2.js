import React, { useState} from 'react'
import blanco from '../Images/blanco_shadow.png'
import reposado from '../Images/reposado_shadow.png'
import cherry from '../Images/cherry_shadow.png'
import vanilla from '../Images/vanilla_shadow.png'
import spiced from '../Images/spiced_shadow.png'
import transparent from '../Images/logo_transparent.png'
import './Section2.css'

export default function Section2() {
  const [clicked, setClicked] = useState('Cherry')

  return (
    <div id='section2'>
      <h1 style={{color:'white', marginBottom: '4rem'}}>Products</h1>

      <img id='transparent' src={transparent} alt='Transparent Logo'/>

      <div id='desktop'>
          <div id='home-products'>
          
          <img className={clicked === "Blanco"? "clicked": "unclicked"} style={{marginRight:0}} src={blanco} alt='Blanco' onClick={()=>setClicked("Blanco")}/>
          <img className={clicked === "Reposado"? "clicked": "unclicked"} style={{marginRight:0}} src={reposado} alt='Reposado' onClick={()=>setClicked("Reposado")}/>
          <img className={clicked === "Cherry"? "clicked": "unclicked"} src={cherry} alt='Black Cherry' onClick={()=>setClicked("Cherry")}/>
          <img className={clicked === "Vanilla"? "clicked": "unclicked"} style={{marginLeft:0}} src={vanilla} alt='Vanilla' onClick={()=>setClicked("Vanilla")}/>
          <img className={clicked === "Spiced"? "clicked": "unclicked"} style={{marginLeft:0}} src={spiced} alt='Spiced' onClick={()=>setClicked("Spiced")}/>

        
          </div>

        <div className='more-product-info'>

          <div style={{width:'40%', height: 200}} >
            {clicked=== 'Blanco' && <h2 className='product-info-title'>Blanco</h2>}
            {clicked=== 'Reposado' && <h2 className='product-info-title'>Reposado</h2>}
            {clicked=== 'Cherry' && <h2 className='product-info-title'>Black Cherry</h2>}
            {clicked=== 'Vanilla' && <h2 className='product-info-title'>Vanilla</h2>}
            {clicked=== 'Spiced' && <h2 className='product-info-title'>Spiced</h2>}

            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
          </div>

          <div className='more-product-desc' >
          {clicked== 'Blanco' && 
          <p>Introducing our premium Blanco tequila, crafted with the finest blue agave and distilled to perfection.
          Aged for just a few weeks, this tequila boasts a crisp, clean flavor profile with notes of citrus, vanilla and a hint of spice.
          Perfect for sipping or mixing in your favorite cocktails, this top-shelf tequila is the ultimate indulgence.
          Experience the smooth and sophisticated taste of our premium Blanco tequila, available now.</p>}
          {clicked== 'Reposado' && 
          <p>Our premium Reposado tequila is a smooth and complex blend of premium blue agave and the finest oak aging.
            It is aged for a minimum of 6 months, allowing the flavors to develop and mature to perfection.
            The aging process imparts notes of vanilla, caramel, and a hint of oak to the already rich and smooth tequila.
            Every sip reveals the intricacies of the aging process, with a smooth finish that leaves a lasting impression. 
            It is perfect for sipping neat or in a classic cocktail, making it a top choice for tequila connoisseurs.
            Experience the luxury of premium reposado tequila, with every sip.</p>}
          {clicked== 'Cherry' && 
          <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
            Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
            This tequila is perfect for sipping straight or in a luxurious cocktail. 
            It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
            Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>}
            {clicked== 'Vanilla' && 
          <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
            Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
            This tequila is perfect for sipping straight or in a luxurious cocktail. 
            It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
            Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>}
            {clicked== 'Spiced' && 
          <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
            Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
            This tequila is perfect for sipping straight or in a luxurious cocktail. 
            It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
            Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>}
          </div>

          <p style={{fontSize: '0.8rem', margin:'0 auto'}}><i>Images used for illustrative purposes only. Label and bottle design may vary.</i></p>

          </div>

          

      
      </div>

      <div id='mobile'>

            <img className="unclicked"   src={blanco} alt='Blanco' />
            <h2 className='product-info-title'>Blanco</h2>
            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
            <p>Introducing our premium Blanco tequila, crafted with the finest blue agave and distilled to perfection.
            Aged for just a few weeks, this tequila boasts a crisp, clean flavor profile with notes of citrus, vanilla and a hint of spice.
            Perfect for sipping or mixing in your favorite cocktails, this top-shelf tequila is the ultimate indulgence.
            Experience the smooth and sophisticated taste of our premium Blanco tequila, available now.</p>

            <img className="unclicked"  src={reposado} alt='reposado' />
            <h2 className='product-info-title'>Reposado</h2>
            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
            <p>Our premium Reposado tequila is a smooth and complex blend of premium blue agave and the finest oak aging.
            It is aged for a minimum of 6 months, allowing the flavors to develop and mature to perfection.
            The aging process imparts notes of vanilla, caramel, and a hint of oak to the already rich and smooth tequila.
            Every sip reveals the intricacies of the aging process, with a smooth finish that leaves a lasting impression. 
            It is perfect for sipping neat or in a classic cocktail, making it a top choice for tequila connoisseurs.
            Experience the luxury of premium reposado tequila, with every sip.</p>

            <img className="unclicked"  src={cherry} alt='Black Cherry' />
            <h2 className='product-info-title'>Black Cherry</h2>
            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
            <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
            Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
            This tequila is perfect for sipping straight or in a luxurious cocktail. 
            It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
            Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>

            <img className="unclicked"  src={vanilla} alt='Vanilla' />
            <h2 className='product-info-title'>Vanilla</h2>
            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
            <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
            Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
            This tequila is perfect for sipping straight or in a luxurious cocktail. 
            It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
            Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>

            <img className="unclicked"  src={spiced} alt='Spiced' />
            <h2 className='product-info-title'>Spiced</h2>
            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
            <p>Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. 
            Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. 
            This tequila is perfect for sipping straight or in a luxurious cocktail. 
            It's made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. 
            Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience.</p>
      </div>
    </div>
  )
}
