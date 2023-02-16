import React, { useState} from 'react'
import blanco from '../Images/blanco_shadow.png'
import reposado from '../Images/reposado_with_shadow.webp'
import cherry from '../Images/cherry_with_cherries.png'
import vanilla from '../Images/vanilla_with_vanilla.png'
import spiced from '../Images/spiced_with_spiced.png'
import transparent from '../Images/logo_transparent.png'
import './Section2.css'

let list =[
  {name: "Vanilla", img: vanilla, desc: "A perfect blend of rich vanilla flavour and premium tequila. Crafted from 100% pure blue agave and distilled to perfection, our tequila is rich in flavour and smooth on the palate. The perfect balance of sweetness and smoothness, this tequila is perfect for sipping on its own, or mixing into your favourite cocktails. Whether you're a fan of classic margaritas or looking for something new, this tequila is a must-try. Experience the rich, velvety flavour of vanilla with every sip, making this tequila the perfect addition to your bar collection. Perfect for sipping on a warm summer day, or enjoying with friends and family on special occasions, our Vanilla Premium Tequila is the choice for any tequila lover. So why wait? Grab a bottle today and taste the difference!"},
  {name: "Blanco", img: blanco, desc: "Introducing our premium Blanco tequila, crafted with the finest blue agave and distilled to perfection. Aged for just a few weeks, this tequila boasts a crisp, clean flavor profile with notes of citrus, vanilla and a hint of spice. Perfect for sipping or mixing in your favorite cocktails, this top-shelf tequila is the ultimate indulgence. Experience the smooth and sophisticated taste of our premium Blanco tequila, available now."},
  {name: "Reposado", img: reposado, desc: "Our premium Reposado tequila is a smooth and complex blend of premium blue agave and the finest oak aging. It is aged for a minimum of 6 months, allowing the flavors to develop and mature to perfection. The aging process imparts notes of vanilla, caramel, and a hint of oak to the already rich and smooth tequila. Every sip reveals the intricacies of the aging process, with a smooth finish that leaves a lasting impression. It is perfect for sipping neat or in a classic cocktail, making it a top choice for tequila connoisseurs. Experience the luxury of premium reposado tequila, with every sip."},
  {name: "Black Cherry", img: cherry, desc: "Introducing Black Cherry Premium Tequila, a unique blend of premium tequila and the rich, sweet flavour of ripe black cherries. This one-of-a-kind spirit is perfect for sipping straight or mixing into your favourite cocktails. Each bottle is handcrafted using only the finest blue agave and expertly infused with the essence of juicy black cherries, resulting in a smooth and delicious taste that is sure to satisfy. The deep, dark color of the tequila perfectly complements the bright, juicy notes of the cherries, making this a visually stunning spirit as well. Whether you're a tequila aficionado or simply love the taste of black cherries, Black Cherry Premium Tequila is a must-try for anyone looking for a truly exceptional drinking experience. So why wait? Order your bottle today and discover the delicious difference of Black Cherry Premium Tequila."},
  {name: "Spiced", img: spiced, desc: "Introducing our spiced premium tequila, the perfect blend of traditional Mexican tequila and bold, aromatic spices. Distilled from 100% blue agave, this tequila is carefully crafted to provide a smooth and delicious sipping experience. The distinct spices used in our spiced tequila add a depth of flavour that is unmatched by traditional tequilas. Notes of cinnamon, nutmeg, and clove meld perfectly with the natural sweetness of the agave, creating a unique and irresistible taste. Whether sipping on the rocks or mixed into a cocktail, this tequila will add a touch of excitement to any drink. It's the perfect addition to any home bar. So why settle for a bland, basic tequila when you can have a premium spiced tequila that will take your drinking experience to the next level? Try it today and taste the difference."},
]

export default function Section2() {
  const [clicked, setClicked] = useState('Black Cherry')

  return (
    <div id='section2'>
      <h1 className='wow fadeInUp' data-wow-duration="2s" style={{color:'white', marginBottom: '4rem', fontFamily:'GreenGroveBold'}}>Products</h1>

      <img id='transparent' src={transparent} alt='Transparent Logo'/>

      <div id='desktop'>
          <div style={{marginLeft: 30}} id='home-products' className='wow fadeInUp' data-wow-duration="2s">
            <img className={clicked === "Vanilla"? "clicked": "unclicked"} style={{marginRight:0}} src={vanilla} alt='Vanilla' onClick={()=>setClicked("Vanilla")}/>
            <img className={clicked === "Blanco"? "clicked": "unclicked"} style={{marginRight:0}} src={blanco} alt='Blanco' onClick={()=>setClicked("Blanco")}/>
            <img className={clicked === "Black Cherry"? "clicked": "unclicked"} src={cherry} alt='Black Cherry' onClick={()=>setClicked("Black Cherry")}/>
            <img className={clicked === "Reposado"? "clicked": "unclicked"} style={{marginLeft:0}} src={reposado} alt='Reposado' onClick={()=>setClicked("Reposado")}/>
            <img className={clicked === "Spiced"? "clicked": "unclicked"} style={{marginLeft:0}} src={spiced} alt='Spiced' onClick={()=>setClicked("Spiced")}/>
          </div>

        <div  className='wow fadeInUp more-product-info' data-wow-duration="2s">

          <div style={{width:'40%', height: 200}} >
            {list.map((item, i)=> {
              return clicked===item.name && 
              <h2 key={i} className='product-info-title'>{item.name}</h2>})}
            <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
          </div>

          <div className='more-product-desc' >
            {list.map((item, i)=>{
              return clicked== item.name && 
              <p key={i}>{item.desc}</p>}
            )}
          </div>

          <p style={{fontSize: '0.8rem', margin:'0 auto'}}><i>Images used for illustrative purposes only. Label and bottle design may vary.</i></p>

        </div>
      </div>

      <div id='mobile'>
              {list.map((item, i)=>{
                return <div key={i} className='wow fadeInUp' data-wow-duration="2s">
                <img style={item.name === 'Vanilla' ? {position:'relative', left: '-25px'}:item.name === 'Spiced' ? {position:'relative', left: '45px'}:{}} className="unclicked" src={item.img} alt={item.name} />
                <h2 className='product-info-title'>{item.name}</h2>
                <button className='product-btn' style={{width:"200px"}}>Coming Soon</button>
                <p>{item.desc}</p>
                </div>
              })}
      </div>
    </div>
  )
}
