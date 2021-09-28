import React  from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item =(props)=>{
    const onAdd =(cantidad)=>{
        console.log(`Se agregaron ${cantidad} unidades de ${props.item.nombre} al carrito`)
    }
    return(
        
        <div className="container-producto">
            <div className="container-img-producto">
                <img src={`./assets/${props.item.img}`}/>
            </div>
            <div className="container-data-producto">
            <h3>{props.item.nombre}</h3>
            <p>$ {props.item.precio}</p>
            <p> Stock: {props.item.stock}</p>
            <ItemCount stock={props.item.stock} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    )
}
export default Item