import React from 'react'
import './UseCoffee.css'
import { useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';
import Cocktail from './Cocktail';
import { useOutletContext } from 'react-router-dom';

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
  const {setBasketOpen} = useOutletContext();

  const handleAddToCart = () => {
    try {
      linesAdd([{ merchandiseId: product.node.variants.edges[0].node.id, quantity: 1 }]);
      setBasketOpen(true)
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  let lines = product?.node.description.split('Perfect')

  // Step 1: Convert price string to a number
  let num = parseFloat(product?.node.priceRange.minVariantPrice.amount);

  // Step 2: Format the number to 2 decimal places
  let price = num.toFixed(2);

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
        <p className='coffee-description'>£{price}</p>

        <button onClick={handleAddToCart} id='coffee-btn'>
          Pre Order Now
        </button>

        <p style={{fontSize: 12, fontFamily: 'Futura-pt', margin: 0}}>Estimated dispatch date 01st Sept 2024</p>

      </div>
      
      
    </div>
    <Cocktail flavour={'coffee'}/>
    </>
  );
}