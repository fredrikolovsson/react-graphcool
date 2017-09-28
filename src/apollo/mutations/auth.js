import { gql } from 'react-apollo'

export const CREATE_EMAIL_USER = 'CreateEmailUser'
export const CREATE_ANONYMOUS_USER = 'CreateAnonymousUser'
export const SIGN_IN_EMAIL_USER = 'SigninEmailUser'

export const createEmailUser = gql`
  mutation ${CREATE_EMAIL_USER}($email: String!, $password: String!) {
    createUser(authProvider: {
      email: {
        email: $email,
        password: $password,
      }
    }) {
      id
    }
  }
`

export const createAnonymousUser = gql`
  mutation ${CREATE_ANONYMOUS_USER}($secret: String!) {
    authenticateAnonymousUser(secret: $secret) {
      id
      token
    }
  }
`

export const signinEmailUser = gql`
  mutation ${SIGN_IN_EMAIL_USER}($email: String!, $password: String!) {
    signinUser(email: {
      email: $email,
      password: $password,
    }) {
      token
    }
  }
`
