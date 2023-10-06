import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './ui/Router'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>,
)
