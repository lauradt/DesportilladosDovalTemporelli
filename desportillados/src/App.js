import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
//external components

//components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const producto = {nombre:"Puertita Roja", precio:1000, stock:15}


function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
