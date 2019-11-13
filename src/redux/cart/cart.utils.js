export const addItemToCartArray = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id );
  
  if(existingCartItem) {
    return cartItems.map(cartItem =>  
      cartItem.id === cartItemToAdd.id 
      ?
      {...cartItem, quantity: cartItem.quantity + 1}
      :
      cartItem
      )
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const deductItemFromCartArray = (cartItems, cartItemToDeduct) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDeduct.id );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDeduct.id)
  }

  return cartItems.map(cartItem =>  
    cartItem.id === cartItemToDeduct.id 
    ?
    {...cartItem, quantity: cartItem.quantity - 1}
    :
    cartItem
    ) 
}
