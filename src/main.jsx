import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CityListProvider } from './components/CityListContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityListProvider>
      <App />
    </CityListProvider>
  </React.StrictMode>,
)
