import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greetings="Hola"/>
        <ItemCount initial={0} stock={5} onAdd={handleOnAdd}/>

      </header>
    </div>
  );
}

export default App;
