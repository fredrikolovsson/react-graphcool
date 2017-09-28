import React from 'react'
import { shallow } from 'enzyme'

import { Register } from './index'

it('renders without crashing', () => {
  shallow(
    <Register createEmailUser={() => {}} />
  )
})
