import types from '../types';

export function addToCart(value) {
  return {
    type: types.ADD_To_CART,
    payload: {value},
  };
}
export function editCart(index) {
  return {
    type: types.EDIT_CART,
    payload: {index},
  };
}
export function deleteCart(index) {
  return {
    type: types.DELETE_CART,
    payload: index,
  };
}
export function increaseQuantity(index) {
  return {
    type: types.INCREASE_QUANTITY,
    payload: index,
  };
}
export function decreaseQuantity(index) {
  return {
    type: types.DECREASE_QUANTITY,
    payload: index,
  };
}
