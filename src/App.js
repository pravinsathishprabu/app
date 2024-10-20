import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <div className="nav"><Navbar/></div>
      <div className="home"><Home/></div>
    </div>

  );
}

export default App;
