import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../../data/productos';


function ItemDetailContainer(props) {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      const mockItem=productos.find(x=> x.id ==id)
        
      resolve(mockItem);
    }, 2000)
  })

  useEffect(() => {
    getItem.then((data) => {
      setItem(data);
    }).finally(() => setLoader(false))
  }, [id])


  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer; 