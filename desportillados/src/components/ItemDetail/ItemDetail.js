
import ItemCount from '../ItemCount/ItemCount';
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
const ItemDetail=(props)=>  {

    const [items, setItems] = useState(0)
    
    const [disableButton, setDisableButton] = useState(true)

    // const agregarProducto = () => {
    //     if (seleccion < props.stock)
    //         setSeleccion(seleccion + 1);
    //         setDisableButton(false);
                
    // }
    // const sacarProducto = () => {
    //     if (seleccion > 1) {
    //         setSeleccion(seleccion - 1)
    //     }
    //     else if (seleccion === 1) {
    //         setSeleccion(seleccion - 1);
    //         setDisableButton(true);
    //     }
    // }
    const onAdd = ()=>{
        items < props.item.stock && setItems(items + 1)  
    }
    const onLess = ()=>{
        if (items > 1) {
                     setItems(items - 1)
                 }
                 else if (items === 1) {
                     setItems(items - 1);
                     setDisableButton(true);
                 } 
    }
    return (
        <div className="item-detail">
            
            <h5>{props.item.descripcion}</h5>
            <p> Stock: {props.item.stock}</p>
            <p> Precio: ${props.item.precio}</p>
            {/* <ItemCount stock={props.item.stock} initial={0} onAdd={onAdd}/> */}
            <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/> 
            <NavLink to="/cart"><button variant="contained" className="info-details-payment-button">COMPRAR</button></NavLink>
            
            
        </div>
        
    )
}

export default ItemDetail;

