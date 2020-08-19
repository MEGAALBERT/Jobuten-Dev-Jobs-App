import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"

//components
import TestComponents from './components/TestComponent'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponents />
      </header> */}
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
//comment