import {
  AUTH_BOOTSTRAP,
  AUTH_LOGGED_IN,
  AUTH_LOGGED_OUT,
  AUTH_SET_IS_LOGGED_IN,
} from './actionTypes'

export const bootstrap = () => {
  return {
    type: AUTH_BOOTSTRAP,
  }
}

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: AUTH_SET_IS_LOGGED_IN,
    payload: { isLoggedIn },
  }
}

export const loggedIn = (token) => {
  return {
    type: AUTH_LOGGED_IN,
    payload: { token },
  }
}

export const loggedOut = () => {
  return {
    type: AUTH_LOGGED_OUT,
  }
}
