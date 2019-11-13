import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';

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

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser, //user is as it's defined in root reducer and currentUser is how it's defined in user-reducer
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);