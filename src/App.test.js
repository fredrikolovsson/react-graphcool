import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

it('renders without crashing when logged in', () => {
  shallow(<App isLoggedIn />)
})

it('renders without crashing when not logged in', () => {
  shallow(<App isLoggedIn={false} />)
})
