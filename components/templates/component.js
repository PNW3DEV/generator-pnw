import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './<%= componentName %>.styles'

export const <%= componentName %> = ({ classes }) => {
  // TODO INSERT JSX
}

<%= componentName %>.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styels)(<%= componentName %>)
