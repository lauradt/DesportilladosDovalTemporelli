import logo from '../../assets/logo.png';
import './NavBar.css';
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar=()=> {
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
              <li><Button color="inherit">Inicio</Button></li>
              <li><Button color="inherit">Productos</Button></li>
              <li><Button color="inherit">Contacto</Button></li>
              <li><Button color="inherit">Login</Button></li>
              </ul>
          </Toolbar>
      </AppBar>
  );
}

export default NavBar;
