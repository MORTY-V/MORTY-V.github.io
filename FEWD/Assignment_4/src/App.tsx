import { useState } from 'react';
import { usePrevious } from './hooks/usePrevious';
import { useDebouncedState } from './hooks/useDebouncedState';
import { useTypewriter } from './hooks/useTypewriter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const [text, setText] = useDebouncedState('', 500);

  const [inputText, setInputText] = useState('');
  const customTypewriter = useTypewriter(inputText, 50);

  return (
    <div className="app">
      <h1>Custom Hooks</h1>

      <div className="section">
        <h2>1. usePrevious Hook</h2>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCount === undefined ? 'N/A' : prevCount}</p>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count - 1)}>Subtract 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="section">
        <h2>2. useDebouncedState Hook</h2>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
        />
        <p>Debounced value: {text || '(empty)'}</p>
      </div>

      <div className="section">
        <h2>3. useTypewriter Hook</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type here..."
        />
        <p>{customTypewriter}|</p>
      </div>
    </div>
  );
}

export default App;

