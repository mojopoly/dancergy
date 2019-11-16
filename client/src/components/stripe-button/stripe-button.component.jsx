import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_gx1eYqPqsULK5XmlerI770jq00T06wpXBD'; 
  
  const onToken = token => {
    console.log(token);
    // alert('Payment Successful')
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
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

    />
  )
}

export default StripeCheckoutButton;