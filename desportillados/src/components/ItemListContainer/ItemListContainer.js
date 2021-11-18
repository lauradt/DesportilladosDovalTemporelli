import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  async function getItems(db, id) {
    const itemsCol = collection(db, "productos");
    const itemsSnapshot = await getDocs(itemsCol);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    console.log(itemsList);
    return itemsList
  }

  useEffect(() => {
    setLoader(true);

    getItems(db).then((data) => {
      id ? setItems(data.filter(x => x.categoria === id)) : setItems(data);

    }).finally(() => setLoader(false))
  }, [id])

  return (
    <div className="item-list-container">
      {loader ? (<h3>Cargando productos...<LinearProgress /></h3>) : (
        <ItemList items={items} />)
      }
    </div>
  );
}

export default ItemListContainer;
