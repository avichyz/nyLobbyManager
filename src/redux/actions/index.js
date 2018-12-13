
import { getCarts, getCartById } from '../../managers/cartsServiceManager';
import { ADD_CART, EDIT_CART, SELECT_CART, FILTER_CARTS, LOAD_CARTS, LOAD_CART_DATA, REMOVE_CART } from './actionTypes';


export function loadCartsWithData() {
  return function (dispatch) {
    return getCarts()
    .then(carts => 
      {
        dispatch(loadCarts(carts))
        return carts;
      })
  }
}

export function loadCarts(carts) {
  return { type: LOAD_CARTS, carts }
}

export function loadCartData(cart) {
  return { type: LOAD_CART_DATA, cart }
}

export function addCart(cartId, batteryPercentage, longitude, info, latitude) {
  return { type: ADD_CART, cartId, batteryPercentage, longitude, info, latitude }
}

export function editCart(id ,cartId, batteryPercentage, longitude, info, latitude) {
  return { type: EDIT_CART, id, cartId, batteryPercentage, longitude, info, latitude }
}

export function deleteCart(id) {
  return { type: REMOVE_CART, id }
}

export function selectCart(id) {
  return { type: SELECT_CART, id }
}

export function filterCarts(searchText) {
  return { type: FILTER_CARTS, searchText }
}

