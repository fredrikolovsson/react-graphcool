import {
  actionCreators as localStorageAC,
  utils as localStorageUtils,
} from 'redux-module-local-storage'

import {
  setIsLoggedIn,
} from './actionCreators'

import {
  AUTH_BOOTSTRAP,
  AUTH_LOGGED_IN,
  AUTH_LOGGED_OUT,
} from './actionTypes'

import {
  AUTH_TOKEN_KEY,
} from './constants'


export default function createAuthMiddleware() {
  return function authMiddleware({ dispatch, getState }) {
    return (next) => (action) => {
      // set token in localStorage before forwarding action
      if (action.type === AUTH_LOGGED_IN) {
        dispatch(localStorageAC.setItem(AUTH_TOKEN_KEY, action.payload.token))
      }

      const result = next(action)

      switch (action.type) {
        case AUTH_BOOTSTRAP: {
          if (localStorageUtils.getItem(AUTH_TOKEN_KEY)) {
            dispatch(setIsLoggedIn(true))
          }
          break
        }
        case AUTH_LOGGED_OUT: {
          dispatch(localStorageAC.removeItem(AUTH_TOKEN_KEY))
          // TODO: make this work
          console.log('fix redirect')
          break
        }
        default: {
          return result
        }
      }
    }
  }
}
