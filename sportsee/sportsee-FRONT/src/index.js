import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

/**
 * The React application entry point. Using createRoot() allows using React 18 features, including batching.
 */
const root = ReactDOM.createRoot(document.body.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)