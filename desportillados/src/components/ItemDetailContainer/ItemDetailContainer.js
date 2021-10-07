import React, {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer(props) {
  const [item, setItem] = useState([]);
  

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
        
      resolve(item);
    }, 2000)
  })

  useEffect(() => {
    getItem.then((item) => {
      setItem(item);
    })
  }, [])


  return (
    <div className="item-detail-container">
      <ItemDetail item={props.item} />
    </div>
  );
}

export default ItemDetailContainer; 