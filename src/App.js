import React, { useState } from 'react';
import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"


//components

import Header from './components/Header';
import Home from './components/Home';
import SearchJobs from './components/SearchJobs';
import About from './components/About';



function App() {

  const [numState, setNumState] = useState(0);

  function stateDisplay() {
    if (numState === 0) {

      return <>
        <Header onClick={(e) => setNumState(e)}/>
        <Home />
      </>;
    } else if (numState === 1) {
      return <>
        <Header onClick={(e) => setNumState(e)}/>
        <SearchJobs />
      </>
    } else if (numState === 2) {
      return <>
        <Header onClick={(e) => setNumState(e)}/>
        <About />
      </>
    } else if (numState === 3) {
      return <>
        login page
        <button onClick={() => setNumState(0)}>login</button>
      </>
    }else if (numState === 4) {
      return <>
        <Header onClick={(e) => setNumState(e)}/>
        <Signup /> 
      </>
    }else if (numState === 5) {
      return <>
        <Header onClick={(e) => setNumState(e)}/>
        <Login />
      </>
    }
  }

  return (
    <div className="App">
     
      {stateDisplay()}
    </div>
  );
}

export default App;
//comment