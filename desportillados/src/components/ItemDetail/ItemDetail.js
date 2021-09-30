import React from 'react';
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

