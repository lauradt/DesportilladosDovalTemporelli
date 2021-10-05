import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from '../components/CartWidget/CartWidget';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';
import ContactPage from '../Pages/ContactPage'
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export default function AppRouter(){
    return(
        <BrowserRouter>
        <NavBar/>
        <HomePage/>
        <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/cart"component={CartWidget}/>
            <Route path="/contacto"component={ContactPage}/>
            <Route path="/categoria/:catId"component={ItemListContainer}/>
            <Route path="*"component={NotFoundPage}/>
                
        </Switch>
        {/* <Footer/> */}
        </BrowserRouter>
    )
}