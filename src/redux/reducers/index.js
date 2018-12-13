import { ADD_CART, EDIT_CART, REMOVE_CART,SELECT_CART, FILTER_CARTS, LOAD_CARTS,LOAD_CART_DATA } from '../actions/actionTypes';

let initialState = [];

function cartApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARTS :
    return {
      carts: action.carts
    }

    case LOAD_CART_DATA: 
      return {
        carts: state.carts.map(cart => (cart.id == action.cart.id) ? action.cart : cart)
      }

    case SELECT_CART:
      return Object.assign({}, state, {
        selectedId: action.id
      })

    case FILTER_CARTS:
      return Object.assign({}, state, {
        searchText: action.searchText
      })

    case ADD_CART:
      return Object.assign({}, state, {
        carts: [
          ...state.carts,
          {
            id: new Date().getUTCMilliseconds(), // getting a unique id based on a timestamp
            cartId: action.cartId,
            batteryPercentage: action.batteryPercentage,
            longitude: action.longitude,
            info: action.info,
            latitude: action.latitude
          }
        ].sort(mov => mov.id)
      })

    case EDIT_CART:
      return Object.assign({}, state, {
        carts: [
          Object.assign({}, {
            id:action.id,
            cartId:action.cartId,
            latitude: action.latitude,
            batteryPercentage: action.batteryPercentage, 
            info: action.info,
            longitude:action.longitude
          }),
          ...state.carts.filter(cart => cart.id !== action.id)
        ]
      })
    case REMOVE_CART:
      return Object.assign({}, state, {
        carts: [
          ...state.carts.filter(cart => cart.id !== action.id)
        ]
      })
    default:
      return state
  }
}

export default cartApp;