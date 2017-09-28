import React from 'react'
import { shallow } from 'enzyme'

import Transaction from './Transaction'

it('renders without crashing', () => {
  shallow(
    <Transaction
      transaction={{
        createdAt: '2017-06-03',
        id: 'id',
        paid: 'BTC 2300',
        received: 'ETH 300',
      }}
    />,
  )
})
