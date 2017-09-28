import {
  APOLLO_MUTATION_RESULT,
  APOLLO_QUERY_RESULT,
} from './actionTypes'

export const actionIsMutationResult = (action) => {
  return action.type === APOLLO_MUTATION_RESULT
}

export const actionIsOperationName = (action, operationNames) => {
  if (!Array.isArray(operationNames)) {
    throw new Error('Must provide operationNames wrapped in array')
  }

  if (!action.operationName) {
    return false
  }

  return operationNames.reduce((flag, operation) => {
    return flag || operation === action.operationName
  }, false)
}

export const actionIsQueryResult = (action) => {
  return action.type === APOLLO_QUERY_RESULT
}
