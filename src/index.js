import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createTheme({
  palette: {
    type: 'dark',
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>,

  document.getElementById('root')
)
