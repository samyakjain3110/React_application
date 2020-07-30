import React, { useEffect } from 'react';
import logo from './logo.svg'
import './App.css';
function App() {

    const names = ["react", "angular" ,"vue"] 
    const nameslist = names.map(name => {
    return <h1>{name}</h1>
  })

  return (
    <div className="App">
    <h1> Used map to display the names</h1>
    {nameslist} 
    </div>
  );
}

export default App;
