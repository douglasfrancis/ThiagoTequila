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
  console.log(lines)

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


        <button onClick={handleAddToCart} id='vanilla-btn'>
          Pre Order Now
        </button>
      </div>
      
      
    </div>
    <Cocktail flavour={'vanilla'}/>
    </>
  );
}