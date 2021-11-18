import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import LinearProgress from '@mui/material/LinearProgress';
import db from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  async function getItem(db, id) {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setItem(docSnap.data())
    }

    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);


    getItem(db, id)
  }, [id])


  return (
    <div className="item-detail-container">
      {loader ? (<h3> Obteniendo información del producto...<LinearProgress color="primary" /></h3>) : (
        <ItemDetail item={item} />)
      }

    </div>
  );
}

export default ItemDetailContainer;
