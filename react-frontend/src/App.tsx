import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallPanel from './components/trade/CallPanel';
import PutPanel from './components/trade/PutPanel';
import Inventory from './components/tradeLog/Inventory/Inventory';
import JournalBoard from './components/tradeLog/Journal/JournalBoard';
import OperationBoard from './components/tradeLog/Operation/OperationBoard';
import OrderBoard from './components/tradeLog/Order/OrderBoard';
import PLSummaryBoard from './components/tradeLog/PLsummary/PLSummaryBoard';


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
        <Inventory/>
        <JournalBoard/>
        <OperationBoard/>
        <OrderBoard/>
        <PLSummaryBoard/>
        <CallPanel/>
        <PutPanel/>
      </header>

     

    </div>
  );
}

export default App;
