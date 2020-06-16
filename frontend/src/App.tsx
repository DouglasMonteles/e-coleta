import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Header title="Hello World" />

      <h1>{ count }</h1>

      <button onClick={handleButtonClick}>add</button>
    </div>
  );
}

export default App;
