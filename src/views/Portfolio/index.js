import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo'
import { List } from 'material-ui/List'
import {
  withRouter,
} from 'react-router-dom'

import {
  selectors as userSelectors,
} from '../../redux/user'
import {
  getUserPopulated,
} from '../../apollo/queries/user'
import {
  networkOnly,
} from '../../apollo/options'

import Transaction from './Transaction'

const mapStateToProps = (state) => {
  return {
    user: userSelectors.getUser(state.user),
  }
}

const propTypes = {
  user: PropTypes.shape({
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        createdAt: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        paid: PropTypes.string.isRequired,
        received: PropTypes.string.isRequired,
        transactedAt: PropTypes.string,
      })
    ),
  })
}

export class Tasks extends Component {

  render() {
    const {
      user,
    } = this.props

    if (!user) {
      return (
        <div>
          <h2>{'Please log in or sign up'}</h2>
        </div>
      )
    }

    const { transactions } = user

    return (
      <div>
        <h2>{'Holdings'}</h2>
        {transactions && transactions.length ? (
          <List>
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </List>
        ) : (
          <p>{'Need to buy some stuff'}</p>
        )}
      </div>
    )
  }
}

Tasks.propTypes = propTypes

const enhance = compose(
  withRouter,
  graphql(getUserPopulated, networkOnly),
  connect(mapStateToProps),
)

export default enhance(Tasks)
