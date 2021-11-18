import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
const ItemDetail = (props) => {

    const cartData = useContext(CartContext);

    const [items, setItems] = useState(cartData.cantItem(props.item.id))

    const [disabled, setDisableButton] = useState(false)

    const onAdd = () => {
        items < props.item.stock && setItems(items + 1)

        setDisableButton(false);
    }
    const onLess = () => {
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
        props.item.cantidad = items;
        cartData.addItems(props.item);
    }
    return (
        <div className="item-detail">
            <Grid container spacing={0.5} justifyContent="center" direction="column">
                <div className="container-producto">
                    <div className="container-img-producto">
                        <img src={`../assets/${props.item.img}`} />
                    </div>
                    <div className="container-data-producto">
                        <h3>{props.item.nombre}</h3>
                        <p>$ {props.item.precio}</p>
                        <p> Stock: {props.item.stock}</p>
                        <h5>{props.item.descripcion}</h5>


                        <Grid xs={12}>

                            <ItemCount stock={props.item.stock} onAdd={onAdd} onLess={onLess} quantity={items} />

                        </Grid>

                        <Grid xs={12}>
                            {
                                <Button disabled={disabled} onClick={() => addToShop(items)} variant="contained">Agregar al carrito</Button>
                            }

                        </Grid>

                    </div>
                </div>
            </Grid>
        </div>

    )
}

export default ItemDetail;

