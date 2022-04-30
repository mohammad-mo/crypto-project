import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CoinContextProvider from './context/CoinContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </React.StrictMode>,
)
