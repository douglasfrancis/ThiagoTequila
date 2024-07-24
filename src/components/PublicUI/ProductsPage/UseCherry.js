import React from 'react'
import './UseCherry.css'
import { useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';
import Cocktail from './Cocktail';

export default function UseCherry({ data }) {

  return (
    <div>
       <ProductProvider data={data}>
              <Cherry />
        </ProductProvider>
    </div>
  )
}

function Cherry() {
  const { product } = useProduct();
  const { linesAdd } = useCart();

  const handleAddToCart = () => {
    try {
      linesAdd([{ merchandiseId: product.node.variants.edges[0].node.id, quantity: 1 }]);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  let lines = product?.node.description.split('Perfect')
  console.log(lines)

  return (
    <>
    <div id='cherry-product'>
      <div id='cherry-img-container'>
        <img id='cherry-img' src={product?.node.images.edges[0].node.src}/>

      </div>

      <div id='cherry-description-container'>
        <p id='cherry-title'>{product?.node.title}</p>


        {lines.map((line, i) => {
          return (
            <p key={i} className='cherry-description'>{i=== 1 ? `Perfect${line}` : line}</p>
          )
        })}


        <button onClick={handleAddToCart} id='cherry-btn'>
          Pre Order Now
        </button>
      </div>
      
      
    </div>
    <Cocktail flavour={'cherry'}/>
    </>
  );
}