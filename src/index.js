import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './components/PublicUI/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}  >
            <Route index element={<LandingPage />}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

