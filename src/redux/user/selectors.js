import { createSelector } from 'reselect'

const EMPTY_ARRAY = []

export const getUser = (state) => state.user
export const getUserTransactions = createSelector(
  getUser,
  (user) => user ? user.transactions : EMPTY_ARRAY,
)
