import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
import PurchaseConfirmation from './pages/purchase-confirmation/purchase-confirmation.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      } else {
          setCurrentUser(userAuth) 
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const {currentUser} = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path= '/signin' render={() => 
            currentUser ? (<Redirect to='/' />
            ) : (
            <SignInAndSignUpPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/purchase-confirmation' component={PurchaseConfirmation} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser //user is as it's defined in root reducer and currentUser is how it's defined in user-reducer
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //we pass the user object to all action objects; user.actions will listen to this only
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
