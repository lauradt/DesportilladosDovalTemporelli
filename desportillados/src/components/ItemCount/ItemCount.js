import React, { useState } from 'react';


export default function ItemCount(stock) {
    const [seleccion, setSeleccion] = useState(stock.initial)
    const agregarProducto = () => {
        if (seleccion < stock.disponible)
            setSeleccion(seleccion + 1)
    }
    const sacarProducto = () => {
        if (seleccion > 0) {
            setSeleccion(seleccion - 1)
        }
    }
    return (
        <div>
            <div>
                <button onClick={sacarProducto}>-</button>
                <button>Agregar al carrito {seleccion} productos</button>
                <button onClick={agregarProducto}>+</button>
            </div>
        </div>
    )
}