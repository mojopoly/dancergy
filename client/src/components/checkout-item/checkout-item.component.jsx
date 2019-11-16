import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.styles.scss';
import {removeItemFromCart, deductItemFromCart, addItemToCart} from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem, deductItem, addItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => deductItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
  deductItem: item => dispatch(deductItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);