import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'

const propTypes = {
  transaction: PropTypes.shape({
    paid: PropTypes.string.isRequired,
    received: PropTypes.string.isRequired,
  }).isRequired,
}

function Transaction({
  transaction,
}) {
  if (!transaction) return null

  const {
    paid,
    received,
  } = transaction

  return (
    <ListItem
      primaryText={received}
      secondaryText={paid}
    />
  )
}

Transaction.propTypes = propTypes

export default Transaction
