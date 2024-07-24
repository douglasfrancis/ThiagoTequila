import React from 'react'
import './ProductScroller.css'
import { useProductContext } from '../../../Context/ProductContext'


export default function ProductScroller() {

  const { products, loadingProducts } = useProductContext();

  return (
    <div id='product-scroller'>
        <p id='our-txt'>our</p>
        <p id='product-txt'>Products</p>
        <p id='products-desc'>Explore our range of daringly delicious, naturally flavoured tequilas.
            Each bottle is a vibrant adventure for your taste buds, waiting to be unleashed.
        </p>
        <div id='product-slider'>
          {loadingProducts ?

            <p>Loading...</p>
            :
            products.map((product, i) => {
              return (
                <div key={i} className='product-slider-container'>
                  <img className='product-slider-img' src={product.node.images.edges[0].node.src} alt={`Thiago Tequila flavoured with ${product.name}`}/>
                  <p className='product-slider-name'>{product.node.title}</p>
  
                </div>
              )
            })
          }
         
        </div>
    </div>
  )
}
