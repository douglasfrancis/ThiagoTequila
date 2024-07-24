import React from 'react'
import './UseCoffee.css'
import { useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';
import Cocktail from './Cocktail';

export default function UseCoffee({ data }) {

  return (
    <div>
       <ProductProvider data={data}>
              <Coffee />
        </ProductProvider>
    </div>
  )
}

function Coffee() {
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
    <div id='coffee-product'>
      <div id='coffee-img-container'>
        <img id='coffee-img' src={product?.node.images.edges[0].node.src}/>

      </div>

      <div id='coffee-description-container'>
        <p id='coffee-title'>{product?.node.title}</p>


        {lines.map((line, i) => {
          return (
            <p key={i} className='coffee-description'>{i=== 1 ? `Perfect${line}` : line}</p>
          )
        })}


        <button onClick={handleAddToCart} id='coffee-btn'>
          Pre Order Now
        </button>
      </div>
      
      
    </div>
    <Cocktail flavour={'coffee'}/>
    </>
  );
}