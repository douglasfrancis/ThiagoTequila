import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './components/PublicUI/Homepage/Homepage';
import {CartProvider} from '@shopify/hydrogen-react';
import {ShopifyProvider} from '@shopify/hydrogen-react';
import { ProductGlobalContext } from './Context/ProductContext';
import Products from './components/PublicUI/ProductsPage/Products';
import Terms from './components/PublicUI/Legal/Terms';
import Privacy from './components/PublicUI/Legal/Privacy';
import CustomerService from './components/PublicUI/CustomerService';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <ShopifyProvider
        storeDomain={process.env.REACT_APP_PUBLIC_STORE_DOMAIN}
        storefrontToken={process.env.REACT_APP_PUBLIC_STOREFRONT_API_TOKEN}
        storefrontApiVersion="2024-07"
        countryIsoCode="GB"
        languageIsoCode="EN"
      >

      <ProductGlobalContext>
      <CartProvider>

        <Routes>
          <Route path="/" element={<App />}  >
              <Route index element={<Homepage />}/>
              <Route path='products' element={<Products />}/>
              <Route path='terms' element={<Terms />}/>
              <Route path='privacy' element={<Privacy />}/>
              <Route path='customer-service' element={<CustomerService />}/>
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
        </CartProvider>
      </ProductGlobalContext>
      </ShopifyProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);

