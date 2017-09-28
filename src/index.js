import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import {
  getMuiTheme,
  MuiThemeProvider,
} from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'
import WebFont from 'webfontloader'

import App from './App'
import bootstrapStore from './bootstrapStore'
import configureApolloClient from './configureApolloClient'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

// asynchronously load web font to avoid blocking page load
// https://github.com/typekit/webfontloader
WebFont.load({
  classes: false,
  events: false,
  google: {
    families: [ 'Roboto:400,300,500:latin' ],
  },
})

// Customize the Material UI theme
// http://www.material-ui.com/#/customization/themes
const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
})

const apolloClient = configureApolloClient()
const store = configureStore({ apolloClient })
bootstrapStore(store)

const component = (
  <ApolloProvider client={apolloClient} store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>
)

// Needed for onTouchTap by Material UI. Recommended to inject right before render.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(component, document.getElementById('root'))
registerServiceWorker()
