import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { ProyectoProvider } from './context/ProyectosProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProyectoProvider>
    <App />
    </ProyectoProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
