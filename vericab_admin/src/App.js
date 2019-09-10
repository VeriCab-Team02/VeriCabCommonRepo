import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation.react';
import Drivers from './Drivers/Drivers.react';
import Trial1 from './trial1/trial1.react';
import ShowDriversReact from './ShowDrivers/ShowDrivers.react';

function App() {
  return (
    <div className="App">
      <Drivers></Drivers>
      <Navigation></Navigation>
      {/* <Trial1></Trial1> */}

      <ShowDriversReact></ShowDriversReact>
    </div>
  );
}

export default App;
