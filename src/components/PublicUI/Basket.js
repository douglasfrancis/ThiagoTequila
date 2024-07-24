import React from 'react'
import './Basket.css'
import { CartProvider, useCart, ProductProvider, useProduct } from '@shopify/hydrogen-react';

export default function Basket({basketOpen, setBasketOpen}) {

  const { lines, linesRemove, linesUpdate, cost, checkoutUrl } = useCart();


   function closeNav() {
       setBasketOpen(false)
  }

  const removeItem = (id) => {
    console.log("Attempting to remove item with ID:", id);
    const itemToRemove = lines.find(item => item.merchandise.id === id);

    if (itemToRemove) {
      console.log("Item found:", itemToRemove);
      const newQuantity = itemToRemove.quantity - 1;

      if (newQuantity <= 0) {
        console.log("Removing item completely:", itemToRemove);
        linesUpdate([{ id: itemToRemove.id, quantity: 0 }])
      } else {
        console.log("Decreasing quantity for item:", itemToRemove);
        linesUpdate([{ id: itemToRemove.id, quantity: newQuantity }]);
      }
    } else {
      console.log("Item not found in the cart.");
    }
  };

  const addItem = (id) => {
    console.log("Attempting to add item with ID:", id);
    const itemToAdd = lines.find(item => item.merchandise.id === id);

    if (itemToAdd) {
      console.log("Item found:", itemToAdd);
      const newQuantity = itemToAdd.quantity + 1;

      linesUpdate([{ id: itemToAdd.id, quantity: newQuantity }]);
      
    } else {
      console.log("Item not found in the cart.");
    }
  };

  return (
        <div id="mySidenav" className={basketOpen ? 'sidenav-open' : 'sidenav'}>

            <div className="close-button" onClick={closeNav}></div>

          <div style={{marginTop: 50}}>
            <h2>Cart</h2>
            <table>

            {lines?.length > 0 ? (
                lines.map((item, i) => (
                  <tr key={i}>
                                
                      <td>{item.merchandise.product.title}</td>
                      <td className='basket-qty'>
                        <button className='change-qty-btn' onClick={() => removeItem(item.merchandise.id)}>-</button>
                        {item.quantity}
                        <button className='change-qty-btn' onClick={() => addItem(item.merchandise.id)}>+</button>
                      </td>
                      <td className='basket-item-total'>£{item.cost?.totalAmount.amount}</td>
                  </tr>
                ))
            ) : (
              <tr>
                <td>Your cart is empty.</td>
              </tr>
            )}
              <tr>
                <td>Total</td>
                <td className='basket-item-total'>£{cost?.totalAmount.amount}</td>
              </tr>

              <tr >
                <td style={{paddingTop: '200px'}}>
                  <a href={checkoutUrl} id='checkout-btn'>Checkout</a>
                </td>
              </tr>
            </table>


          </div>

            
        </div>
        )
}
