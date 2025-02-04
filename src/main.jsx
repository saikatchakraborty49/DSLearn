import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
// import './input.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster/>
    <App />
  </BrowserRouter>
)
