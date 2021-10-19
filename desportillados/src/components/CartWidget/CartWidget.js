import './CartWidget.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import IconButton from '@mui/material/IconButton';

import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import CartContext from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget=()=>{
    const cartData = useContext(CartContext);
    return(
      <> {cartData.cartCantTotal > 0 ?
        <NavLink to="/cart" exact activeClassName="selected">
      <IconButton color="inherit" aria-label="carrito">
        <Badge badgeContent={cartData.cartCantTotal} color="primary">
          <ShoppingCartSharpIcon />
        </Badge>
      </IconButton>
    </NavLink>
    :
    <></>
  }
    </>
    );
    
}

export default CartWidget;



     
