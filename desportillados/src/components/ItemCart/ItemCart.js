import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ItemCart = (prop) => {
    const cartData = useContext(CartContext);

    return (
        <div className="item-cart">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <img height="200px" width="auto" src={`../assets/${prop.item.img}`} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {prop.item.nombre}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            cantidad: {prop.item.cantidad + " "}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            $ {prop.item.precio * prop.item.cantidad}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <NavLink to="/cart" exact activeClassName="selected">
                    <Button onClick={() => cartData.removeItem(prop.item.id)} variant="contained" color="warning">Sacar del carrito</Button>
                </NavLink>
            </Card>
        </div>
    )
}

export default ItemCart;