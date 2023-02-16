import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from './components/Products'
import Home from './components/Home';
import NotFound from './components/NotFound';
import OurStory from './components/OurStory';
import Retail from './components/Retail';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}  >
            <Route index element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/our-story" element={<OurStory />}/>
            <Route path="/retail" element={<Retail />}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

