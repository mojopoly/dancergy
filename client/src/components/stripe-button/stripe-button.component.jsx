import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './stripe-button.styles.scss';
import {removeItemFromCart} from '../../redux/cart/cart.actions';

class StripeCheckoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardListBacklog: []
    };
  }

  onToken = token => {
    console.log(token);
    const { cartItems, price } = this.props;
    const priceForStripe = price * 100;
    const orderSummary = cartItems.reduce(
      (cartItemAll, cartItem) =>
        (cartItemAll += cartItem.name + cartItem.quantity),
      ''
    );
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        order: orderSummary,
        token
      }
    })
    .then(response => {
      alert(
        `Payment successful, ${response.data.success.billing_details.name}; please check your email for your receipt.`
      );
      this.setState({cardListBacklog: ['1']});
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment. Please try again!');
      });
  };
  render() {
    const publishableKey = 'pk_test_gx1eYqPqsULK5XmlerI770jq00T06wpXBD';
    const { price } = this.props;
    const priceForStripe = price * 100;
    return (
      this.state.cardListBacklog.length
        ? 
        <div>Payment Successful</div>
       :
      <StripeCheckout
        label="Pay Now"
        name="Dancergy Ltd."
        billingAddress
        shippingAddress
        image="https://i.imgur.com/vWgUzvC.png"
        description={`Your total is $${price} USD`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={this.onToken}
        stripeKey={publishableKey}
        label="Pay with 💳"
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeItemFromCart(item)),
})

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton);
