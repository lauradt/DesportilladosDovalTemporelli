import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../../data/productos';
import LinearProgress from '@mui/material/LinearProgress';
import db from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  async function getItem(db,id){
    const docRef = doc(db,"productos",id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      setItem(docSnap.data())
    }

    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    

    getItem(db,id)
  }, [id])


  return (
    <div className="item-detail-container">
      {loader ? (<h3> Obteniendo información del producto...<LinearProgress color="primary"/></h3>) : (
        <ItemDetail item={item} />)
      }

    </div>
  );
}

export default ItemDetailContainer;

// function ItemDetailContainer(props) {
//   const [item, setItem] = useState([]);
//   const [loader, setLoader] = useState(true);
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);

//   async function getProducts(db){
//     const productsCol = collection(db, 'productos');
//     const productsSnapshot = await getDocs(productsCol);
//     const productsList = productsSnapshot.docs.map(doc=>doc.data());
//     setProducts(productsList);
//     return productsList;
//   }
//   useEffect(()=>{
//   getProducts(db)
// },{})

//    return (
//      <div className="item-detail-container">
//        {loader ? (<h3> Obteniendo información del producto...<LinearProgress color="error"/></h3>) : (
//          <ItemDetail item={item} />)}
//          </div>
     
//    );

  
// }

// export default ItemDetailContainer; 

// const getItem = new Promise((resolve) => {
  //   setTimeout(() => {
  //     const mockItem=productos.find(x=> x.id ==id)
        
  //     resolve(mockItem);
  //   }, 2000)
  // })

  // useEffect(() => {
  //   getItem.then((data) => {
  //     setItem(data);
  //   }).finally(() => setLoader(false))
  // }, [id])


  // return (
  //   <div className="item-detail-container">
  //     {loader ? (<h3> Obteniendo información del producto...<LinearProgress color="error"/></h3>) : (
  //       <ItemDetail item={item} />)
  //     }

  //   </div>
  // );