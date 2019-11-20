import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './stripe-button.styles.scss';
//import PurchaseConfirmation from '../../pages/purchase-confirmation/purchase-confirmation.component';

const StripeCheckoutButton = ({price, cartItems}) => {
  const priceForStripe = price * 100;
  console.log(cartItems);
  const orderSummary = cartItems.reduce((cartItemAll, cartItem) => cartItemAll += cartItem.name + cartItem.quantity , '' )
  console.log(orderSummary);
  const publishableKey = 'pk_test_gx1eYqPqsULK5XmlerI770jq00T06wpXBD'; 
  
  const onToken = token => {
    console.log(token);
    // alert('Payment Successful')
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        order: orderSummary,
        token
      }
    }).then(response => {
      console.log(response);
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please try again!'
      )
    })
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Dancergy Ltd.'
      billingAddress
      shippingAddress
      image='https://i.imgur.com/vWgUzvC.png'
      description={`Your total is $${price} USD`}
      amount={priceForStripe}
      panelLabel = 'Pay Now'
      token={onToken} 
      stripeKey={publishableKey}
      label="Pay with 💳"
    />
  )
}

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// })
export default StripeCheckoutButton;