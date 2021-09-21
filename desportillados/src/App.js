//import logo from '../src/assets/logo.png';
import './App.css';
//external components

//components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
