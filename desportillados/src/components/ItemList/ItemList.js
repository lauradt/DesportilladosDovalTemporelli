import React, { useState, useEffect } from 'react';
import Item from '../Item//Item';
import './ItemList.css';

const ItemList = (prop) => {

    return (
        <div >
            {prop.items.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </div>
    );
}

export default ItemList;

