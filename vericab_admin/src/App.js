import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation.react';
import Drivers from './Drivers/Drivers.react';

function App() {
  return (
    <div className="App">
      <Drivers></Drivers>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
