import React from 'react'
import './ProductNav.css'
import { useProductContext } from '../../../Context/ProductContext'

export default function ProductNav( { setProduct } ) {

    const { products, loadingProducts } = useProductContext();

  return (
    
    <div id='product-nav'>
        <p id='explore'>Explore</p>
        <p id='the-flavours'>the flavours</p>
        <p id='products-nav-desc'>
            Explore our range of daringly delicious, naturally flavoured reposado tequilas. Each bottle is a vibrant adventure for your taste buds, waiting to be unleashed.
        </p>
        <div id='product-nav-slider'>
          {loadingProducts ?

            <p>Loading...</p>
            :
            products.map((product, i) => {
              let name = product.node.title.split(" ")

              return (
                <div key={i} className='product-slider-container' onClick={(e) => setProduct(product.node.title)}>
                  <img className='product-slider-img' src={product.node.images.edges[0].node.src} alt={`Thiago Tequila flavoured with ${product.name}`}/>
                  <p className='product-slider-name'>{product.node.id === "gid://shopify/Product/9359166243163" ? name[1] :  product.node.title}</p>
  
                </div>
              )
            })
          }
         
        </div>
    
    </div>
  )
}
