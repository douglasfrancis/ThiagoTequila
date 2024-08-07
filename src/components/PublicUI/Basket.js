import React from 'react'
import './Basket.css'
import { useCart, CartLineQuantityAdjustButton, CartLineProvider } from '@shopify/hydrogen-react';
import bin from '../../Assets/icons/bin.webp'
import basket from '../../Assets/icons/red-basket.webp'

export default function Basket({basketOpen, setBasketOpen}) {

  const { lines, cost, checkoutUrl } = useCart();


   function closeNav() {
       setBasketOpen(false)
  }

  return (
        <div id="mySidenav" className={basketOpen ? 'sidenav-open' : 'sidenav'}>


          <div style={{ width: '95%', overflow:'scroll'}}>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <img src={basket} style={{height: 30, width: 30, objectFit: 'contain', marginBottom: 10}}/>
              <p id='cart-title'>Shopping Cart</p>
              <div className="close-button" onClick={closeNav}></div>
            </div>
            <div style={{overflow:'scroll'}}>

            {lines?.length > 0 ? (
                lines.map((item, i) => (
                  <div key={i} className='cart-line'>
                    <img className='cart-img' src={item.merchandise.image.url} alt='Thiago Tequila Flavoured Tequila UK'/>

                    <div style={{display:'flex', flexDirection:'column', fontFamily: 'Futura-pt', width: '85%'}}>
                        <p className='cart-item-name'>Thiago Tequila {item.merchandise.product.title}</p>

                        <p style={{margin: 0, color: '#313131', fontSize: 14}}>Pre order</p>
                        <p style={{margin: 0, color: '#313131', fontSize: 14}}>Estimated dispatch 01/09/2024</p>

                        <CartLineProvider line={item} >
                          <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center'}}>

                            {item.quantity < 2 ?
                              <CartLineQuantityAdjustButton adjust="remove" style={{background: 'unset', border: 'unset'}}>
                                <img src={bin} style={{height: 15, width: 15}}/>
                              </CartLineQuantityAdjustButton> 
                              :
                              <CartLineQuantityAdjustButton adjust="decrease" className='change-qty-btn' >
                              -
                              </CartLineQuantityAdjustButton>
                            }
                            <p className='basket-qty'>
                              {item.quantity}
                            </p>
                            <CartLineQuantityAdjustButton adjust="increase" className='change-qty-btn' >
                              +
                            </CartLineQuantityAdjustButton>
                            

                            <p className='basket-item-total'>£{parseFloat(item.cost?.totalAmount.amount).toFixed(2)}</p>

                          </div>
                        </CartLineProvider>
                    </div>

                     
                  </div>
                ))
            ) : (
              <div style={{textAlign: 'center', paddingTop: 100, color: '#FB4622', fontFamily: 'futura-pt'}}>
                <p>Your cart is empty.</p>
              </div>
            )}

             
            </div>
            
            <div id='btn-container'>

              <p className='basket-qty' style={{justifyContent: 'left', marginLeft: '1rem', color: '#313131'}}>Shipping added at checkout</p>

              <div style={{display: 'flex', justifyContent:'space-between', padding: '0 1rem'}}>
                <p className='basket-grand-total'>Total</p>
                <p className='basket-grand-total'>£{!cost?.totalAmount.amount ? "0.00" : parseFloat(cost?.totalAmount.amount).toFixed(2)}</p>
              </div>
              <a href={checkoutUrl} id='checkout-btn'>Checkout</a>

              <button onClick={closeNav} id='continue-shopping'>
                Continue Shopping
              </button>
            </div>
            
          </div>

            
        </div>
        )
}
