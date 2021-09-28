
import React, {useState, useEffect} from 'react';

import Item from '../Item//Item';
import './ItemList.css';

export default function ItemList(){
    const[productos, setProductos] = useState([])
    const getProductos = new Promise((resolve)=>{
        setTimeout(()=>{
            const mockProducts=    [
                {
                    id:'1',
                    nombre: 'Puertita Amarilla',
                    img: 'Amarilla.jpg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 15
                },
                {
                    id:'2',
                    nombre: 'Puertita Verde',
                    img: 'verde.jpg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 5
                },
                {
                    id:'3',
                    nombre: 'Puertita Violeta',
                    img: 'violeta.jpg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 8
                },
                {
                    id:'4',
                    nombre: 'Puertita Azul',
                    img: 'Azul.jpeg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 6
                },
                {
                    id:'5',
                    nombre: 'Puertita Celeste',
                    img: 'Celeste.jpg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 4
                },
                {
                    id:'6',
                    nombre: 'Puertita Gris',
                    img: 'Gris.jpg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 8
                },
                {
                    id:'7',
                    nombre: 'Puertita Rosado claro',
                    img: 'Rosada.jpeg',
                    precio:'1000',
                    descripcion: '10 x 15 cm',
                    stock: 7
                }
    
            ]
            resolve(mockProducts)
        
        }, 2000)

    })

    useEffect(()=>{
        getProductos.then((respuesta)=>{
            console.log(respuesta);
            setProductos(respuesta);
        })

    },[] )
    
    

    return(
        <div className="container-general">
            {productos.map((item, index)=>{
                return(<Item key={index} item={item} />)
            })}
        </div>
    

    )
}