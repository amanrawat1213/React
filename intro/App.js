// import logo from './logo.svg';
import './App.css';
// We need to create a state that can be updated
import { useState } from "react";

// Need to import the component
import NAVBAR from './components/NAVBAR.js';

function App() {
  // Initialize useState
//   We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.
  const [value,setValue]=useState(0);
  return (
    <div className="App">
      <NAVBAR/>
      <div className='value'>{value}</div>
      {/* so the button is changing the value on clicking */}
      <button onClick={()=>{setValue(value+1)}}>Click me</button>
    </div>
  );
}

export default App;
