import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import '../components/NavBar/NavBar.css'
export default function HomePage() {

    return (
        <div>
            <NavLink to="/"><Button color="inherit">Todos los Productos</Button></NavLink>
            <NavLink to="/categoria/puerta"><Button color="inherit">Puertas</Button></NavLink>
            <NavLink to="/categoria/otros"><Button color="inherit">Otros productos</Button></NavLink>
        </div>
    )
}