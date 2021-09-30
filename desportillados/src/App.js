//import logo from '../src/assets/logo.png';
import './App.css';
//external components

//components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
const producto = {nombre:"Puertita Roja", precio:1000, stock:15}


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
