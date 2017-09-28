import React from 'react'
import { shallow } from 'enzyme'

import { Tasks } from './index'

it('renders without crashing when loaded', () => {
  shallow(
    <Tasks data={{
      allHoldings: [{
        createdAt: '2017-06-03',
        currency: 'ETH',
        id: 'id',
      }],
      loading: false
    }}/>
  )
})

it('renders without crashing when loading', () => {
  shallow(<Tasks data={{ allHoldings: undefined, loading: true }}/>)
})
