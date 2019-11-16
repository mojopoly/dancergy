import CartActionTypes from './cart.types';
import {addItemToCartArray, deductItemFromCartArray} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartArray(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => 
          cartItem.id !== action.payload.id)
      }
    case CartActionTypes.DEDUCT_ITEM:
      return {
        ...state,
        cartItems: deductItemFromCartArray(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;