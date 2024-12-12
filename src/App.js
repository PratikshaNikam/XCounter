import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        
    <h1>Counter App</h1>
      </header>

      <p>Count: {count}</p>

      <button onClick={ setCount(count + 1)} className='button'>Increment</button>
      <button onClick={setCount(count - 1)} className='button'>Decrement</button>
    </div>
  );
}

export default App;
