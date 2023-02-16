import './App.css';
import React, { useState,useLayoutEffect} from 'react';
import Footer from './components/Footer';
import cart from './Images/cart.png'
import logo from './Images/logo.png'
import { Outlet, Link, useLocation} from 'react-router-dom'
import Basket from './components/Basket';
import './components/Basket.css'
import SideNav from './components/SideNav';
import WOW from 'wowjs'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const location = useLocation();


  useLayoutEffect(()=>{
    new WOW.WOW({
      live: false
  }).init();
  },[location])

  const [scrolled, setScrolled] = useState(false)
  const [basketOpen, setBasketOpen] = useState(false)
  const [open, setOpen] = useState(false)


window.addEventListener("scroll", function(e){
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
  }});

  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <header className="App-header">

       <nav id='nav' >

          <div className={open ? 'change' : 'container'}  onClick={()=>{  setOpen(!open)}} >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
          </div>

         <div id='nav-items' >
            <Link to='/products' className={scrolled? 'nav-item1' :'nav-item'} >Products</Link>
            <Link to='/our-story' className={scrolled? 'nav-item1' :'nav-item'} >Our Story</Link>
            <Link to='/wholesale' className={scrolled? 'nav-item1' :'nav-item'} >Wholesale</Link>
         </div>

         <Link to='/' id='logo-container' >
         <img id='logo' style={open ? {display: 'none'}:{}} src={logo} alt='Thiago logo' />
        </Link>

        <div >
          <img id='cart' src={cart} alt='Shopping cart' onClick={()=>setBasketOpen(true)}  />
        </div>
        
       </nav>

       
      </header>

      <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
      <SideNav open={open} setOpen={setOpen}/>
      
      <Outlet id='main'/>

      <Footer/>
    </div>
  );
}

export default App;
