import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})
  
export const deductItemFromCart = item => ({
  type: CartActionTypes.DEDUCT_ITEM,
  payload: item
})