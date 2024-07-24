import './App.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Basket from './components/PublicUI/Basket.js';
import SideNav from './components/PublicUI/SideNav.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/PublicUI/Navbar.js';
import Footer from './components/PublicUI/Footer.js';

function App() {

  const [basketOpen, setBasketOpen] = useState(false)
  const [open, setOpen] = useState(false)


  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <Navbar setOpen={setOpen} open={open} setBasketOpen={setBasketOpen}/>

      <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
      <SideNav open={open} setOpen={setOpen}/>
      
      <Outlet id='main' context={{setBasketOpen}}/>
      <Footer />

    </div>
  );
}

export default App;
