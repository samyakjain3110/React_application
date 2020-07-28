import React from 'react';
import logo from './logo.svg'
import './App.css';
function App() {

  function openalert(){
    alert('the button is pressed') ;
  }

  return (
    <div className="App">
    <h1>Event Handling in React </h1>
    <button onClick={openalert}>click me</button>
    <input type='text' onChange={() => {alert("changed the text");}}></input>
    <h1 onMouseOver={()=> {alert("h1 tag is hovered");}}>h1 tag</h1>
    </div>
  );
}

export default App;
