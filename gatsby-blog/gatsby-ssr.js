import React from 'react'
import Terser from 'terser'

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/tokens/colors'

import App from './src/components/App'

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
