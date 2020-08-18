import React, { useState } from 'react';
import './App.css';

//components

import Header from './components/Header';
import Home from './components/Home';
import SearchJobs from './components/SearchJobs';
import About from './components/About';
import Job from './components/Job';
import News from './components/News';


function App() {

  const [numState, setNumState] = useState(0);

  function stateDisplay() {
    if (numState === 0) {
      return <Home />;
    } else if (numState === 1) {
      return <SearchJobs />
    } else if (numState === 2) {
      return <About />
    }
  }

  return (
    <div className="App">

      <Header onClick={() => console.log('ehehhe')}/>

      {stateDisplay()}
        <Job />
        <News />

    </div>
  );
}

export default App;
//comment