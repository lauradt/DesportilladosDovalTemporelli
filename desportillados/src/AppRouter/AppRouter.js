import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from '../components/CartWidget/CartWidget';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';
import ContactPage from '../Pages/ContactPage'
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import GraciasPage from '../Pages/GraciasPage';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <HomePage />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/cart" component={Cart} />
                <Route path="/contacto" component={ContactPage} />
                <Route path="/categoria/:id" component={ItemListContainer} />
                <Route exact path="/item/:id" component={ItemDetailContainer} />
                <Route exact path="/gracias" component={GraciasPage} />
                <Route path="*" component={NotFoundPage} />

            </Switch>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}