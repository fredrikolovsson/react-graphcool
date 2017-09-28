import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {
  AppBar,
  FlatButton,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui'
// import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import {
  loggedOut as logOut,
} from '../../redux/auth/actionCreators'

const mapDispatchToProps = {
  logOut,
}

const propTypes = {
  history: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
}

function Header({
  history,
  isLoggedIn,
  logOut,
}) {
  return (
    <AppBar
      title="Title"
      // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={isLoggedIn ? (
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem
            primaryText="Sign out"
            onTouchTap={() => {
              logOut()
              setTimeout(() => {
                history.replace('/')
              }, 0)
            }}
          />
        </IconMenu>
      ) : (
        <FlatButton
          label="Login"
          onTouchTap={() => {
            history.replace('/login')
          }}
        />
      )}
    />
  )
}

Header.propTypes = propTypes

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps)
);

export default enhance(Header)
