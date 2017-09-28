import {
  actionIsOperationName,
  actionIsQueryResult,
} from '../apollo/utils'

import {
  GET_USER_FLAT,
  GET_USER_POPULATED,
} from '../../apollo/queries/user'

import {
  AUTH_LOGGED_OUT,
} from '../auth/actionTypes'

const initialState = {
  user: null,
}

export default function reducer(state = initialState, action) {
  if (
    actionIsQueryResult(action)
    && actionIsOperationName(action, [GET_USER_FLAT, GET_USER_POPULATED])
  ) {
    if (action.result.data.user) {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.result.data.user,
        },
      }
    } else {
      return {
        ...state,
        user: null,
      }
    }
  }

  switch (action.type) {
    case AUTH_LOGGED_OUT: {
      return {
        ...state,
        user: null,
      }
    }
    default: {
      return state
    }
  }
}
