import React, { useState } from 'react';


export default function ItemCount(props) {
    const [seleccion, setSeleccion] = useState(0)
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
    return (
        <div>
            
            <div className="container-item-count">
                
            <button onClick={props.onAdd}variant="outlined">+</button>
                
               <p className="item-count">{props.quantity}</p> {/* <button disabled={disableButton} onClick={()=>props.onAdd(seleccion)}>Agregar al carrito {seleccion} productos</button> */}
               <button onClick={props.onLess}variant="outlined">-</button>
            </div> 
        </div>
    )
}


             