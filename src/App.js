import React from 'react';
import './App.css';
import Scratch from './Scratch';
import FlowerCard from './components/FlowerCard'

function App() {
  return (
    <div className="App">
      <Scratch/>
      <div>
      <FlowerCard/>
      <FlowerCard/>
      <FlowerCard/>
      </div>
    </div>
  );
}

export default App;
