import React, { useContext } from 'react';
import ItemCart from '../ItemCart/ItemCart';
import CartContext from '../../Context/CartContext';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

const CartItemList = (prop) => {
    const cartData = useContext(CartContext);

    return (
        <div className="item-list">
            {cartData.cartCantTotal > 0 ?
                <Grid container rowSpacing={2} columnSpacing={2} justifyContent="space-evenly" alignItems="center">
                    {prop.items.map((item, index) => {
                        return (
                            <Grid key={index} item xs={3}>
                                <ItemCart item={item} />
                            </Grid>
                        )
                    })}
                </Grid>
                :
                <>
                    <h2>{"Carrito vacio"}</h2>
                    <NavLink to="/">
                        <p>Elegir productos</p>
                    </NavLink>
                </>
            }
        </div>
    );
}

export default CartItemList;