import React , { useContext } from 'react';
import ItemCartContainer from '../ItemCartContainer/ItemCartContainer';
import './Cart.css';
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const cartData = useContext(CartContext);
  return (
    <div>
      <h4>Precio total de la compra: $ {cartData.precioTotal}</h4>
      <ItemCartContainer />
      {cartData.cartCantTotal > 0 ?
      <NavLink to="/Gracias" exact>
        <Button color="success" variant="contained">Pagar</Button>
      </NavLink>
      :
      <></>
    }
    </div>
  );
}

export default Cart;