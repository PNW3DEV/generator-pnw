import React from 'react'
import storiesOf from '../../../../.storybook/util'
import <%= componentName %> from '.'

const props = {}

storiesOf('<%= componentName %>', module).add('Default', () => <<%= componentName %> {...props} />)
