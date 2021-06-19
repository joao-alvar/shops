import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Theme Nav
import MainNav from './Themes/MainNav';
import SecondaryNav from './Themes/SecondaryNav';
import NavSectionHomens from './Themes/NavSectionHomens';

// Pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import ShopsMulheres from './pages/ShopsMulheres';
import ShopsHomens from './pages/ShopsHomens';
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
   <Route path="/shopsmulheres" render={() => (
     <SecondaryNav>
       <ShopsMulheres />
       <Footer />
     </SecondaryNav> 
     )} />
       <Route path="/shopshomens" render={() => (
     <NavSectionHomens>
       <ShopsHomens />
       <Footer />
     </NavSectionHomens> 
     )} />
   </Switch>
    </div>
  );
}

export default App;
