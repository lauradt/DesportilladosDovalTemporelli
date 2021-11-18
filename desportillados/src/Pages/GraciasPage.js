import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';

export default function GraciasPage() {
    const cartData = useContext(CartContext);
    return (
        <>
            <h1>Gracias por tu compra</h1>
            <h3>El id de tu compra es: {cartData.idUltimaCompra}</h3>
            <img src='\assets\huellitas.jpg' />
        </>
    )
}