import {
  AUTH_LOGGED_IN,
  AUTH_LOGGED_OUT,
  AUTH_SET_IS_LOGGED_IN,
} from './actionTypes'

const initialState = {
  isLoggedIn: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: true,
      }
    }
    case AUTH_LOGGED_OUT: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    case AUTH_SET_IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      }
    }
    default:
      return state
  }
}
