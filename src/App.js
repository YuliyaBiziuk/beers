import React from 'react';
import Beers from './components/Beers';
import './App.css';
import './components/Beers.css';

function App() {
  return (
    <div className="App">
      <header><h1>Beers List</h1></header>
       <Beers />
        
    </div>
  );
}

export default App;
