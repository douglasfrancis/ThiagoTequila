import React from 'react'
import './UseCherry.css'
import { useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';
import Cocktail from './Cocktail';
import { useOutletContext } from 'react-router-dom';

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
        <p className='cherry-description'>£{price}</p>


        <button onClick={handleAddToCart} id='cherry-btn'>
          Pre Order Now
        </button>

        <p style={{fontSize: 12, fontFamily: 'Futura-pt', margin: 0}}>Estimated dispatch date 01st Sept 2024</p>

      </div>
      
      
    </div>
    <Cocktail flavour={'cherry'}/>
    </>
  );
}