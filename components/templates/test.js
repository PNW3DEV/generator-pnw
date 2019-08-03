import React from 'react'
import { shallow } from 'enzyme'

import <%= componentName %> from '.'

describe('<%= componentName %>', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render the <%= componentName %> component', () => {
    const props = {
      classes: {}
    }
    const component = shallow(<<%= componentName %> {...props} />)
  })
})
