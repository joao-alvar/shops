import React from 'react';
import Nav from './components/Nav';
import Home from './pages/HomePage';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
    <Nav /> 
    <Home />
    </div>
  );
}

export default App;
