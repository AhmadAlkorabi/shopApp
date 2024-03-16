import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SideBarProvider from './components/context/SideBarContext';
import CartProvider from './components/context/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </SideBarProvider>
);

