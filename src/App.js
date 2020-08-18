import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import TestComponents from './components/TestComponent';
import Job from './components/Job';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponents />
        <Job />
        <News />
      </header>
    </div>
  );
}

export default App;
//comment