import React from 'react';
import logo from './logo.svg'
import './App.css';
import CC from './class_components'
import FC from './functional_components'
function App() {
  return (
    <div className="App">
    <h1>hello world</h1>
    {/* to add another component inside another component use append as CC below */}
      <CC name="samyakjain" username="sam3110" />
      <FC name="sam" username="samyak" />
    </div>
  );
}

export default App;
