import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { graphql } from 'react-apollo'

import {
  signinEmailUser,
} from '../../apollo/mutations/auth'
import {
  networkOnly,
} from '../../apollo/options'
import {
  AuthForm,
} from '../../components'

const propTypes = {
  signinEmailUser: PropTypes.func.isRequired,
}

export const Login = ({ signinEmailUser }) => {
  return (
    <AuthForm
      buttonCTA="Log in"
      onSubmit={signinEmailUser}
      viewTitle="Log in to your portfolio"
    />
  )
}

Login.propTypes = propTypes

const mutationOptions = {
  name: 'signinEmailUser',
  options: networkOnly.options,
}

const enhance = compose(
  graphql(signinEmailUser, mutationOptions),
);

export default enhance(Login)
