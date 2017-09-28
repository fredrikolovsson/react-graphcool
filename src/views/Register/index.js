import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import {
  createEmailUser,
  signinEmailUser,
} from '../../apollo/mutations/auth'
import {
  getUserFlat,
} from '../../apollo/queries/user'
import {
  networkOnly,
} from '../../apollo/options'
import {
  AuthForm,
} from '../../components'

const propTypes = {
  createEmailUser: PropTypes.func.isRequired,
}

export const Register = ({ createEmailUser }) => {
  return (
    <AuthForm
      buttonCTA="Sign up"
      onSubmit={createEmailUser}
      viewTitle="Create new portfolio"
    />
  )
}

Register.propTypes = propTypes

const enhance = compose(
  graphql(createEmailUser, { name: 'createEmailUser' }),
  graphql(getUserFlat, networkOnly),
  graphql(signinEmailUser, { name: 'signinEmailUser' }),
  withRouter,
)

export default enhance(Register)
