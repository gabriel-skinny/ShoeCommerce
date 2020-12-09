export function addToCart(data){
  return {
    type: "@ADD_TO_CART",
    payload: {
      data
    }
  }
}

export function removeFromCart(id){
  return {
    type: "@REMOVE_FROM_CART",
    payload: {
      id: id
    }
  }
}