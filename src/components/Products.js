import React from 'react'
import './Products.css'
import Product from './Product'
import blanco from '../Images/white.png'
import reposado from '../Images/reposado.png'
import anejo from '../Images/anejo.png'

export default function Products() {

  let list =[
    {name: "Blanco", img: blanco, desc: ""},
    {name: "Reposado", img: reposado, desc: ""},
    {name: "Anejo", img: anejo, desc: ""}
  ]
  return (
    <main id='product-page'>
      <div id='products-container'>
          {list.map((item, i)=>{
            return <Product item={item} key={i} />
          })}
      </div>
      
    </main>
  )
}
