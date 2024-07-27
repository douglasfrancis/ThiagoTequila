import React from 'react'
import './UseVanilla.css'
import { useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';
import { useOutletContext } from 'react-router-dom';
import Cocktail from './Cocktail';

export default function UseVanilla({ data }) {

  return (
    <div>
       <ProductProvider data={data}>
              <Vanilla />
        </ProductProvider>
    </div>
  )
}

function Vanilla() {
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
    <div id='vanilla-product'>

      <div id='vanilla-img-container'>
        <img id='vanilla-img' src={product?.node.images.edges[0].node.src}/>
      </div>

      <div id='vanilla-description-container'>
        <p id='vanilla-title'>{product?.node.title}</p>


        {lines.map((line, i) => {
          return (
            <p key={i} className='vanilla-description'>{i=== 1 ? `Perfect${line}` : line}</p>
          )
        })}

        <img id='vanilla-img-mobile' src={product?.node.images.edges[0].node.src}/>


        <p className='vanilla-description'>£{price}</p>

        <button onClick={handleAddToCart} id='vanilla-btn'>
          Pre Order Now
        </button>

        <p style={{fontSize: 12, fontFamily: 'Futura-pt', margin: 0, marginTop: 10}}>Estimated dispatch date 01st Sept 2024</p>
      </div>
    </div>
    <Cocktail flavour={'vanilla'}/>
    </>
  );
}