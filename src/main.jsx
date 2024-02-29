import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import menu from './components/data'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App menu={menu} />
  </React.StrictMode>,
)
