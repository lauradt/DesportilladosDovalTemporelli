import './ItemListContainer.css';
import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import { ListItem } from '@mui/material';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const{catId}=useParams();
    return (
      <div className="ItemListContainer">
        <ItemList categoria={catId}/>
      </div>
    );
  }
  
  export default ItemListContainer;