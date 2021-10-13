import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
//external components
import { CartProvider } from './Context/CartContext';
//components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
const producto = {nombre:"Puertita Roja", precio:1000, stock:15}


function App() {
  return (
    <div className="App">
      <CartProvider>
      <AppRouter/>
      </CartProvider>
    </div>
  );
}

export default App;
