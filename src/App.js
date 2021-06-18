import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
    <Nav /> 
    <Switch>
   <Route exact path="/" component={HomePage} />
   <Route path="/registration" component={Registration} />
   </Switch>
    </div>
  );
}

export default App;
