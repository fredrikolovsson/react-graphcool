import React from 'react'
import { shallow } from 'enzyme'

import AuthForm from './index'

it('renders without crashing', () => {
  shallow(
    <AuthForm onSubmit={() => {}} viewTitle="Login" />
  )
})
