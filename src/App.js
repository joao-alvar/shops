import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth } from './firebase/utils';

// Theme Nav
import MainNav from './Themes/MainNav';
import SecondaryNav from './Themes/SecondaryNav';

// Pages
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import ShopsMulheres from './pages/ShopsMulheres';
import Footer from './components/Footer';
import './styles/main.scss';
import NavSectionHomens from './Themes/NavSectionHomens';
import ShopsHomens from './pages/ShopsHomens';
import SignIn from './pages/SignIn';

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        this.setState({
          ...initialState
        })
      };

      this.setState({
        currentUser: userAuth
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() { 
    const { currentUser } = this.state;
  return (
    <div className="App">
  
    <Switch>
   <Route exact path="/" render={() => (
     <MainNav currentUser={currentUser}>
       <HomePage />
       <Footer />
     </MainNav>
   )} />
   <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
     <Registration />
   )}
   
   />
   <Route path="/signin" render={() => currentUser ? <Redirect to="/" /> : (
     <SignIn />
   )} />
   <Route path="/shopsmulheres" render={() => (
     <SecondaryNav currentUser={currentUser}>
       <ShopsMulheres />
       <Footer />
     </SecondaryNav> 
     )} />
       <Route path="/shopshomens" render={() => (
     <NavSectionHomens currentUser={currentUser}>
       <ShopsHomens />
       <Footer />
     </NavSectionHomens> 
     )} />
   </Switch>
    </div>
  );
}
}

export default App;
