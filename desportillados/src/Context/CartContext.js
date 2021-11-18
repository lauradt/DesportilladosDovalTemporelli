import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartCantTotal, setCartCantTotal] = useState(0);
    const [idUltimaCompra, setIdUltimaCompra] = useState("");

    const addItems = (item) => {
        if (isInCart(item.id)) {
            let itemAux = items.find(x => x.id == item.id)
            setPrecioTotal(precioTotal - (itemAux.precio * itemAux.cantidad) + (item.precio * item.cantidad));
            setCartCantTotal(cartCantTotal - itemAux.cantidad + item.cantidad);
            items.find(x => x.id == item.id).cantidad = item.cantidad;
        }
        else {
            setItems([...items, item]);
            setPrecioTotal(precioTotal + (item.precio * item.cantidad));
            setCartCantTotal(cartCantTotal + item.cantidad);
        }
    }

    const isInCart = (id) => {
        return items.some(x => x.id === id)
    }

    const clear = () => {
        setItems([]);
        setPrecioTotal(0);
        setCartCantTotal(0);
    }

    const removeItem = (id) => {
        let itemAux = items.find(x => x.id == id);
        setCartCantTotal(cartCantTotal - itemAux.cantidad);
        setPrecioTotal(precioTotal - (itemAux.precio * itemAux.cantidad));

        let aux = items.filter(x => x.id != id);
        setItems(aux);
    }

    const cantItem = (id) => {
        if (isInCart(id)) {
            let itemAux = items.find(x => x.id == id)
            return itemAux.cantidad
        }
        else {
            return 0;
        }
    }
    const data = { items, precioTotal, cartCantTotal, idUltimaCompra, addItems, isInCart, clear, removeItem, setIdUltimaCompra, cantItem };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;