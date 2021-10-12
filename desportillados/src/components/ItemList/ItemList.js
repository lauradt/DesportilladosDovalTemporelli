
import React, {useState, useEffect} from 'react';

import Item from '../Item//Item';
import './ItemList.css';
import Grid from '@mui/material/Grid';

const ItemList = (prop) => {

    return (
        <div >
                {prop.items.map((item,index) => {
                    return (
                        
                        
                            <Item key={index} item={item} /> 
                        
                           
                    )
                })} 
        </div>
    );
}

export default ItemList;

// export default function ItemList(prop){
//     const[productos, setProductos] = useState([])
//     const getProductos = new Promise((resolve)=>{
//         setTimeout(()=>{
//             const mockProducts=    
//             resolve(mockProducts)
        
//         }, 2000)

//     })

//     useEffect(()=>{
//         getProductos.then((respuesta)=>{
//             prop.categoria? setProductos(respuesta.filter(x=>x.categoria==prop.categoria)):setProductos(respuesta);
//         })

//     },[prop.categoria] )
    
    

//     return(
//         <div className="container-general">
//             {productos.map((item, index)=>{
//                 return(<Item key={index} item={item} />)
//             })}
//         </div>
    

//     )
// }