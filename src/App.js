import logo from './logo.svg';
import './App.css';
import Numero from './Numero';
import ListComent from './ListComent';
import TicTacToe from './TicTacToe';
import ConsumoCombustivel from './ConsumoCombustivel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Numero></Numero>
        <ListComent></ListComent>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <ConsumoCombustivel></ConsumoCombustivel>
      <TicTacToe></TicTacToe>
      
      
    </div>
  );
}

export default App;
