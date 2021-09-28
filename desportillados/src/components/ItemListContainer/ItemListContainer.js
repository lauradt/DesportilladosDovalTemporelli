import './ItemListContainer.css';
import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import { ListItem } from '@mui/material';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    return (
      <div className="ItemListContainer">
        <ItemList/>
        {/* <Item nombre="Puertita Roja" precio="1000" stock="15" /> */}
        {/* <p>Producto: <b>{producto.nombre}</b> <br />
          Precio: <b>${producto.precio}</b><br />
          Stock disponible: <b>{producto.stock}</b></p>
        <ItemCount disponible={producto.stock} initial={0}/> */}
      </div>
    );
  }
  
  export default ItemListContainer;