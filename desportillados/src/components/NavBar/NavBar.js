import logo from '../../assets/logo.png';
import './NavBar.css';
//external components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <AppBar position="static" className="main-navbar">
            <Toolbar>
                <Typography variant="h6">
                    <div className="container-logo">
                        <img src={logo} alt={'otro'}></img>
                    </div>
                </Typography>
                <div><h1>DESPORTILLADOS</h1></div>
                <ul className="navbar-list">
                    <li><NavLink to="/"><Button color="inherit">Inicio</Button></NavLink></li>
                    <li><NavLink to="/contacto"><Button color="inherit">Contacto</Button></NavLink></li>
                    <li><Button color="inherit">Login</Button></li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
