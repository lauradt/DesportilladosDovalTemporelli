import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartCantTotal, setCartCantTotal] = useState(0);



    const addItems = (item, cantidad) => {
        if (!isInCart(item.id)) {

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
    }

    const removeItem = (id) => {
        let itemAux = items.find(x => x.id == id);
        let aux = items.filter(x => x.id != id);
        setPrecioTotal(precioTotal - (itemAux.precio * itemAux.cantidad));
        setCartCantTotal(cartCantTotal - itemAux.cantidad);
        setItems(aux);
    }
    const data = { items, precioTotal, cartCantTotal, addItems, isInCart, clear, removeItem };

    //const data = { items, addItems, isInCart, clear, removeItem, cartSize: items.length };
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;