
import ItemCount from '../ItemCount/ItemCount';
import React, {useState, useEffect, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material';

const ItemDetail=(props)=>  {

    const [items, setItems] = useState(0)
    
    const [disabled, setDisableButton] = useState(false)

    const cartData = useContext(CartContext);

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
        setDisableButton(false); 
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
    const addToShop = (unidades) => {
        console.log(`Se agregaron ${unidades} unidades de ${props.item.nombre} al carrito`)
        cartData.addItems(props.item, unidades);
    }
    return (
        <div className="item-detail">
            <div className="container-producto">
             <div className="container-img-producto">
                 <img src={`../assets/${props.item.img}`}/>
             </div>
             <div className="container-data-producto">
             <h3>{props.item.nombre}</h3>
            <p>$ {props.item.precio}</p>
             <p> Stock: {props.item.stock}</p> 
            <h5>{props.item.descripcion}</h5>
            
            <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/> 
            <Button disabled={disabled} onClick={() => addToShop(items)} variant="contained">Agregar al carrito</Button>
            {/* <NavLink to="/cart"><button variant="contained" className="info-details-payment-button">COMPRAR</button></NavLink> */}
            </div>
            </div>
        </div>
        
    )
}

export default ItemDetail;

