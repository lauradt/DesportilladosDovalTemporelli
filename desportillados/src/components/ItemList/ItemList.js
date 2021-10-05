
import React, {useState, useEffect} from 'react';

import Item from '../Item//Item';
import './ItemList.css';

export default function ItemList(prop){
    const[productos, setProductos] = useState([])
    const getProductos = new Promise((resolve)=>{
        setTimeout(()=>{
            const mockProducts=    [
                {
                    id:'1',
                    categoria:"puerta",
                    nombre: 'Puertita Amarilla',
                    img: 'Amarilla.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 15
                },
                {
                    id:'2',
                    categoria:"puerta",
                    nombre: 'Puertita Verde',
                    img: 'verde.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 5
                },
                {
                    id:'3',
                    categoria:"puerta",
                    nombre: 'Puertita Violeta',
                    img: 'violeta.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 8
                },
                {
                    id:'4',
                    categoria:"puerta",
                    nombre: 'Puertita Azul',
                    img: 'Azul.jpeg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 6
                },
                {
                    id:'5',
                    categoria:"puerta",
                    nombre: 'Puertita Celeste',
                    img: 'Celeste.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 4
                },
                {
                    id:'6',
                    categoria:"puerta",
                    nombre: 'Puertita Gris',
                    img: 'Gris.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 8
                },
                {
                    id:'7',
                    categoria:"puerta",
                    nombre: 'Puertita Rosado claro',
                    img: 'Rosada.jpeg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 7
                },
                {
                    id:'50',
                    categoria:"otros",
                    nombre: 'Cajita porta dientes nena',
                    img: 'cajaNena.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 20
                },
                {
                    id:'51',
                    categoria:"otros",
                    nombre: 'Cajita porta dientes nene',
                    img: 'cajaNene.jpg',
                    precio:'1000',
                    descripcion: 'material: madera, tamaño:10 x 15 cm',
                    stock: 20
                }
    
            ]
            resolve(mockProducts)
        
        }, 2000)

    })

    useEffect(()=>{
        getProductos.then((respuesta)=>{
            prop.categoria? setProductos(respuesta.filter(x=>x.categoria==prop.categoria)):setProductos(respuesta);
        })

    },[prop.categoria] )
    
    

    return(
        <div className="container-general">
            {productos.map((item, index)=>{
                return(<Item key={index} item={item} />)
            })}
        </div>
    

    )
}