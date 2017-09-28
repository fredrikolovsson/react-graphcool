import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import { createLogger } from 'redux-logger'
import { middleware as localStorageMiddleware } from 'redux-module-local-storage'

import {
  apollo,
  auth,
  user,
} from './redux'


export default function configureStore({
  apolloClient,
  initialState = {},
} = {}) {
  if (!apolloClient) {
    throw new Error('Must provide apolloClient')
  }

  const hasReduxDevtools = process.env.NODE_ENV === 'development'
  && process.env.REACT_APP_REDUX_DEVTOOLS === 'true'
  && window.__REDUX_DEVTOOLS_EXTENSION__

  const reducer = combineReducers({
    auth: auth.reducer,
    apollo: apolloClient.reducer(),
    user: user.reducer,
  })

  const middleware = [
    apolloClient.middleware(),
    apollo.middleware(),
    auth.middleware(),
    localStorageMiddleware(),
  ]

  if (hasReduxDevtools) {
    const reduxLogger = createLogger({
      collapsed: true,
    })

    // must be the last middleware in chain, otherwise it will log thunk and promise
    middleware.push(reduxLogger)
  }

  const enhancers = [applyMiddleware(...middleware)]

  // Redux DevTools Browser Extension
  // https://github.com/zalmoxisus/redux-devtools-extension
  if (hasReduxDevtools) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(reducer, initialState, compose(...enhancers))
}
