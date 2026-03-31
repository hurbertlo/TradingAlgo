import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallPanel from './components/trade/CallPanel';
import PutPanel from './components/trade/PutPanel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CallPanel/>
        <PutPanel/>
      </header>

     

    </div>
  );
}

export default App;
