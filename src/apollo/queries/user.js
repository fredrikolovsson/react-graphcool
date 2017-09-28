import { gql } from 'react-apollo'

export const GET_USER_FLAT = 'GetUserFlat'
export const GET_USER_POPULATED = 'GetUserPopulated'

export const getUserPopulated = gql`
  query ${GET_USER_POPULATED} {
    user {
      id
      isVerified
      transactions(orderBy: transactedAt_DESC) {
        id
        createdAt
        updatedAt
        transactedAt
        paid
        received
      }
    }
  }
`

export const getUserFlat = gql`
  query ${GET_USER_FLAT} {
    user {
      id
      email
      isVerified
    }
  }
`
