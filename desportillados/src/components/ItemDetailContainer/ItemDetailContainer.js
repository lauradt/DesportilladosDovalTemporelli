import React, {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      const mockItem = { 
        id:'1',
        nombre: 'Puertita Amarilla',
        img: 'Amarilla.jpg',
        precio:'1000',
        descripcion: 'puertita de madera 10 x 15 cm',
        stock: 15
        }

      resolve(mockItem);
    }, 2000)
  })

  useEffect(() => {
    getItem.then((data) => {
      setItem(data);
    })
  }, [])


  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer; 