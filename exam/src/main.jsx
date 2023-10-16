import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './ui/router'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
