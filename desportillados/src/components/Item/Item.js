import React from 'react';
import './Item.css';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
const Item = (prop) => {
    const onAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades de ${prop.item.nombre} al carrito`)
    }

    return (

        <div className="container-producto">
            <div className="item">
                <Card sx={{ maxWidth: 345 }}>
                    <Link to={`/item/${prop.item.id}`}>
                        <CardActionArea>
                            <img height="200px" width="auto" src={`../assets/${prop.item.img}`} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {prop.item.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    $ {prop.item.precio}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
export default Item