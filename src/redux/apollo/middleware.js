import {
  loggedIn,
  loggedOut,
} from '../auth/actionCreators'

import {
  actionIsMutationResult,
  actionIsOperationName,
  actionIsQueryResult,
} from '../apollo/utils'

import {
  GET_USER_FLAT,
  GET_USER_POPULATED,
} from '../../apollo/queries/user'
import {
  SIGN_IN_EMAIL_USER,
} from '../../apollo/mutations/auth'

export default function createApolloReduxMiddleware() {
  return function apolloReduxMiddleware({ dispatch, getState }) {
    return (next) => (action) => {
      const result = next(action)

      if (
        actionIsMutationResult(action)
        && actionIsOperationName(action, [SIGN_IN_EMAIL_USER])
      ) {
        const { token } = action.result.data.signinUser
        dispatch(loggedIn(token))
      }

      if (
        actionIsQueryResult(action)
        && actionIsOperationName(action, [GET_USER_FLAT, GET_USER_POPULATED])
      ) {
        if (!action.result.data.user) {
          dispatch(loggedOut())
        }
      }

      return result
    }
  }
}

