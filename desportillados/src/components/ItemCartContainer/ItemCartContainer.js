import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../Context/CartContext';
import CartItemList from '../CartItemList/CartItemList';
import { LinearProgress } from '@mui/material';

const ItemCartContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const cartData = useContext(CartContext)

  useEffect(() => {
    setLoader(true);
    const getItems = new Promise((resolve) => {
      resolve(cartData.items);
    })

    getItems.then((data) => {
      setItems(data);
    })

    getItems.then((data) => {
      setItems(data);
    }).finally(() => setLoader(false))
  }, [cartData.items])


  return (
    <div className="items-cart-container">
      <div>
        {loader ? (<h3>Cargando carrito...<LinearProgress color="primary" /></h3>) : (
          <CartItemList items={items} />)
        }
      </div>
    </div>
  );
}

export default ItemCartContainer;
