import React, { useState} from 'react'
import './Products.css'
import './Modal.css'
import Product from './Product'
import cherry from '../Images/cherry.webp'
import vanilla from '../Images/vanilla.webp'
import sour from '../Images/sour.webp'
import Modal from './Modal'

export default function Products() {

  const [open, setOpen] = useState(false)

  let list =[
    //{name: "Blanco", img: blanco, desc: "Introducing our premium Blanco tequila, crafted with the finest blue agave and distilled to perfection. Aged for just a few weeks, this tequila boasts a crisp, clean flavor profile with notes of citrus, vanilla and a hint of spice. Perfect for sipping or mixing in your favorite cocktails, this top-shelf tequila is the ultimate indulgence. Experience the smooth and sophisticated taste of our premium Blanco tequila, available now."},
    //{name: "Reposado", img: reposado, desc: "Our premium Reposado tequila is a smooth and complex blend of premium blue agave and the finest oak aging. It is aged for a minimum of 6 months, allowing the flavors to develop and mature to perfection. The aging process imparts notes of vanilla, caramel, and a hint of oak to the already rich and smooth tequila. Every sip reveals the intricacies of the aging process, with a smooth finish that leaves a lasting impression. It is perfect for sipping neat or in a classic cocktail, making it a top choice for tequila connoisseurs. Experience the luxury of premium reposado tequila, with every sip."},
    {name: "Black Cherry", img: cherry, desc: "Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. This tequila is perfect for sipping straight or in a luxurious cocktail. It is made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience."},
    {name: "Vanilla", img: vanilla, desc: "Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. This tequila is perfect for sipping straight or in a luxurious cocktail. It is made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience."},
    {name: "Sour", img: sour, desc: "Introducing the premium Anejo tequila, a masterful blend of only the finest agave plants, matured to perfection in oak barrels. Each sip delivers a smooth, rich and complex flavor profile, with notes of caramel, vanilla, and a hint of spice. This tequila is perfect for sipping straight or in a luxurious cocktail. It is made with meticulous attention to detail and with a passion for traditional distillation techniques, ensuring that each bottle is a true representation of Mexico's tequila-making heritage. Enjoy this premium anejo tequila for a truly elevated and sophisticated drinking experience."},

  ]
  return (
    <main id='product-page'>
            <div id='product-loaded'/>
            <div className='gradient'/>

      <div id='products-container'>
          {list.map((item, i)=>{
            return <Product item={item} key={i} setOpen={setOpen}/>
          })}
      </div>

      {open &&
       <Modal setOpen={setOpen}/>
      }
      
    </main>
  )
}
