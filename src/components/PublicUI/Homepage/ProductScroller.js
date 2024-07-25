import React from 'react'
import './ProductScroller.css'
import { useProductContext } from '../../../Context/ProductContext'
import { Link } from 'react-router-dom';


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
                <Link key={i} className='product-slider-container' to={'products'}  state={{ selection: product.node.title }}>
                  <img className='product-slider-img' src={product.node.images.edges[0].node.src} alt={`Thiago Tequila flavoured with ${product.name}`}/>
                  <p className='product-slider-name'>{product.node.title}</p>
  
                </Link>
              )
            })
          }
         
        </div>
    </div>
  )
}
