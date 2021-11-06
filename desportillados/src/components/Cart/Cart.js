import React , { useContext } from 'react';
import ItemCartContainer from '../ItemCartContainer/ItemCartContainer';
import './Cart.css';
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import db from '../../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const Cart = () => {
  let idCompra=" ";
  const cartData = useContext(CartContext);
  const pagar=()=>{
    const order={
      buyer:{
        name: "Laura",
        email: "lauradt@gmail.com",
        phone: 3435057722
      },
      items: cartData.items,
      total: cartData.precioTotal
    }
    pushOrderFirebase(order);
  }

  async function pushOrderFirebase(order){
    const orderFirebase=collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, order);
    cartData.setIdUltimaCompra(orderDoc.id);
    updateItemStock(order.items);
    cartData.clear();

  }

  async function updateItemStock(items){
    for(let item of items){
      const itemDoc = doc(db, "productos",item.id);

      await updateDoc(itemDoc,{
        stock: item.stock - item.cantidad
      })
    };
  }

  return (
    <div>
      <h4>Precio total de la compra: $ {cartData.precioTotal}</h4>
      <ItemCartContainer />
      {cartData.cartCantTotal > 0 ?
      <NavLink to="/Gracias" exact>
        <Button onClick={()=> pagar()} color="success" variant="contained">Pagar</Button>
      </NavLink>
      :
      <></>
    }
    </div>
  );
}

export default Cart;