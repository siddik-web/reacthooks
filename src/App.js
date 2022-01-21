import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({'name': ''})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>useState Example</h2>
        <p>You Clicked the button {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <h2>{obj.name}</h2>
        <input type="text" value={obj.name} onChange={(e) => setObj({...obj, 'name': e.target.value})} />
      </header>
    </div>
  );
}

export default App;
