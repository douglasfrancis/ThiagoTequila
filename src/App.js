import './App.css';
import React, { useState} from 'react';
import Footer from './components/Footer';
import cart from './Images/cart.png'
import logo from './Images/logo.png'
import { Outlet, Link} from 'react-router-dom'
import Basket from './components/Basket';
import './components/Basket.css'

function App() {

  const [scrolled, setScrolled] = useState(false)
  const [basketOpen, setBasketOpen] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [open, setOpen] = useState(false)
  
  window.onscroll = function() {
    var nav = document.getElementById('nav');
    var logo = document.getElementById('logo');

    if ( window.pageYOffset > 10 ) {
        setScrolled(true)

        nav.classList.add("navbar1");
        logo.classList.add("logo1");
    } else {
        setScrolled(false)
        nav.classList.remove("navbar1");
        logo.classList.remove("logo1");
    }
}

  

  return (
    <div className="App">
      <header className="App-header">
       <nav id='nav'>
          <div className={clicked ? 'container change' : 'container'} onClick={()=>{ setClicked(!clicked); setOpen(!open)}}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
          </div>
         <div id='nav-items'>
            <Link to='/products' className={scrolled? 'nav-item1' :'nav-item'} >Products</Link>
            <Link to='/our-story' className={scrolled? 'nav-item1' :'nav-item'} >Our Story</Link>
            <Link to='/retail' className={scrolled? 'nav-item1' :'nav-item'} >Wholesale</Link>
         </div>

        <Link to='/'>
         <img id='logo' src={logo} alt='Thiago logo' />
        </Link>

         <img id='cart' src={cart} alt='Shopping cart' onClick={()=>setBasketOpen(true)} />
        
       </nav>
      </header>
      <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
      
      <Outlet id='main'/>

      <Footer/>
    </div>
  );
}

export default App;
