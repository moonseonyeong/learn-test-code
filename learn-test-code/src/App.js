import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">

        <h3 data-testid="counter">{counter}</h3>
        <button data-testid="minus-button"
          onClick={() => setCounter((count) => count - 1)}
        >-</button>
        <button data-testid="plus-button"
          onClick={() => setCounter((count) => count + 1)}
        >+</button>
      </header>
    </div>
  );
}

export default App;
