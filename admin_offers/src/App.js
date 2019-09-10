import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewOffers from './ViewOffers/ViewOffers.react';
import AddOffers from './AddOffers/AddOffers.react';

function App() {
  return (
    <div className="App">
      <ViewOffers></ViewOffers>
      <AddOffers></AddOffers>
    </div>
  );
}

export default App;
