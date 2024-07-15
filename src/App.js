import './App.css';
import React, { useState,useLayoutEffect, useEffect} from 'react';
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
import axios from 'axios'
import {client} from './shopify.js';
import Navbar from './components/PublicUI/Navbar.js';

function App() {

  const location = useLocation();


  useEffect(() => {
    async function getServerSideProps() {
      const response = await fetch(client.getStorefrontApiUrl(), {
        body: JSON.stringify({
          query: GRAPHQL_QUERY,
        }),
        // Generate the headers using the private token.
        headers: client.getPublicTokenHeaders({buyerIp: '...'}),
        method: 'POST',
      });
    
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    
      const json = await response.json();
    
      return console.log({props: json}) ;
    }
    const GRAPHQL_QUERY = `
    query getProductMedia {
      products(first: 3) {
        edges {
          cursor
          node {
            id
            title
            description
            media(first: 10) {
              edges {
                node {
                  mediaContentType
                  alt
                  ...mediaFieldsByType
                }
              }
            }
          }
        }
      }
    }
    
    fragment mediaFieldsByType on Media {
      ...on ExternalVideo {
        id
        host
        originUrl
      }
      ...on MediaImage {
        image {
          url
        }
      }
      ...on Model3d {
        sources {
          url
          mimeType
          format
          filesize
        }
      }
      ...on Video {
        sources {
          url
          mimeType
          format
          height
          width
        }
      }
    }
    `;

    getServerSideProps()
  }, [])

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
      <Navbar />

      <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
      <SideNav open={open} setOpen={setOpen}/>
      
      <Outlet id='main'/>

    </div>
  );
}

export default App;
