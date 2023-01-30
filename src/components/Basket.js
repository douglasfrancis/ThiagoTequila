import React from 'react'
import './Basket.css'

export default function Basket({basketOpen, setBasketOpen}) {

   /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
   function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

   /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
   function closeNav() {
       setBasketOpen(false)
    //document.getElementById("mySidenav").style.width = 0;
    //document.getElementById("main").style.marginLeft = 0;
    //document.body.style.backgroundColor = "white";
  }

  return (
        <div id="mySidenav" className={basketOpen ? 'sidenav-open' : 'sidenav'}>

            <button className="closebtn" onClick={closeNav}>Close</button>
            
            <h1>Store coming soon</h1>

          <div>
            <p>Sign up to our mailing list so we can keep you posted</p>

            <input id='basket-input' placeholder='Email Addres'/>

            <button>Subscribe</button>
          </div>
            
        </div>
        )
}
