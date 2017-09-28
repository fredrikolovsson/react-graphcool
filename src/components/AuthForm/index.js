import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import {
  RaisedButton,
  TextField,
} from 'material-ui'


const propTypes = {
  buttonCTA: PropTypes.string,
  history: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  viewTitle: PropTypes.string.isRequired,
}
const defaultProps = {
  buttonCTA: 'Submit',
}

export class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const {
      id,
      value,
    } = event.target

    this.setState(() => ({
      [id]: value,
    }))
  }

  render() {
    const {
      buttonCTA,
      history,
      onSubmit,
      viewTitle,
    } = this.props

    const {
      email,
      password,
    } = this.state

    return (
      <div>
        <h1>{viewTitle}</h1>
        <TextField
          id="email"
          hintText="Email"
          floatingLabelText="Email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <TextField
          id="password"
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <RaisedButton
          primary
          label={buttonCTA}
          onTouchTap={() => {
            return onSubmit({
              variables: {
                email,
                password,
              }
            })
            .then(() => history.push('/'))
          }}
        />
      </div>
    )
  }
}

AuthForm.propTypes = propTypes
AuthForm.defaultProps = defaultProps

const enhance = compose(
  withRouter,
)

export default enhance(AuthForm)
