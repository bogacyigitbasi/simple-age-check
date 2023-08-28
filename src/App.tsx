import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Connect';
import { useState } from "react";
import Connect from './Connect';

function App() {
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Connect
          onConnected={() => setConnected(true)}
          onDisconnected={() => setConnected(false)}
        />
      </header>
    </div>
  );
}

export default App;
