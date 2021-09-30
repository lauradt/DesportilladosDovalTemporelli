import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (props) => {

    return (
        <div className="item-detail">
            <div className="container-data-producto">
            <h5>{props.item.descripcion}</h5>
            </div>
        </div>
    )
}

export default ItemDetail;