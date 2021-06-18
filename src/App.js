import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Theme Nav
import MainNav from './Themes/MainNav'

// Pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
  
    <Switch>
   <Route exact path="/" render={() => (
     <MainNav>
       <HomePage />
       <Footer />
     </MainNav>
   )} />
   <Route path="/registration" component={Registration} />
   </Switch>
    </div>
  );
}

export default App;
