import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';
// import { userInfo } from 'os';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      { currentUser
        ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <Link className='option' to='/contact'>CONTACT</Link>
      <CartIcon />
    </div>
    {
      hidden ?
      null :
      <CartDropdown />
    }
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser, //user is as it's defined in root reducer and currentUser is how it's defined in user-reducer
  hidden: state.cart.hidden
})
export default connect(mapStateToProps)(Header);