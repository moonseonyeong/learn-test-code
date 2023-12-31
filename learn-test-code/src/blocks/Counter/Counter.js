import '../../App.css';
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid='counter'>{counter}</h3>
        <button
          data-testid='minus-button'
          onClick={() => setCounter((count) => count - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid='plus-button'
          onClick={() => setCounter((count) => count + 1)}
          disabled={disabled}
        >
          +
        </button>

        <button
          data-testid='on/off-button'
          style={{ backgroundColor: 'blue' }}
          onClick={() => setDisabled((prev) => !prev)}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default Counter;
