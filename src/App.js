import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

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
import RecuperarSenha from './pages/RecuperarSenha';

class App extends Component {
    authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }

      setCurrentUser(userAuth);
        });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() { 
    const { currentUser } = this.props;
  return (
    <div className="App">
  
    <Switch>
   <Route exact path="/" render={() => (
     <MainNav>
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
     <Route path="/recuperarconta" render={() => currentUser ? <Redirect to="/" /> : (
       <RecuperarSenha />
     )} />
   </Switch>
    </div>
  );
}
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
