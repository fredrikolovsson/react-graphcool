import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  // using HashRouter to enable routing on GitHub pages
  // https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing
  HashRouter as Router,
  Link,
  Route,
} from 'react-router-dom'

import {
  Header,
} from './components'
import {
  About,
  Login,
  Register,
  Portfolio,
} from './views'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export class App extends Component {
  render() {
    const {
      isLoggedIn,
    } = this.props

    return (
      <Router>
        <div>
          <Header isLoggedIn={isLoggedIn} />
          <Link to="/">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          <Route exact path="/" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    )
  }
}

App.propTypes = propTypes

const enhance = compose(
  connect(mapStateToProps)
)

export default enhance(App)
