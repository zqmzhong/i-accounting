import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, i-accounting</h1>
        <Button type="primary">Get Start !</Button>
      </header>
    </div>
  );
}

export default App;
